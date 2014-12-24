/**
 * Express configuration
 */
'use strict';

var compress = require('compression');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');<% if (useAuth) { %>
var flash = require('express-flash');
var expressValidator = require('express-validator');
var passport = require('passport');
var auth = require('../auth');
var session = require('express-session');<% } %>

// Configuration files<% if (useAuth) { %>
var secrets = require('./secrets');<% } %>
var settings = require('./env/default');
var security = require('./security');

var expressConfig = function(app, express<% if (dbOption !== 'none') { %>, db<% } %>) {

    var hour = 3600000;
    var day = hour * 24;
    var week = day * 7;

    // Get current server environment
    var env = app.get('env');

    // Remove x-powered-by header (doesn't let clients know we are using Express)
    app.disable('x-powered-by');

    // Setup port for server to run on
    app.set('port', settings.server.port);

     // Setup view engine for server side templating<% if (singlePageApplication) { %>
    app.engine('.html', require('ejs').__express);
    app.set('view engine', 'html');<% } %><% if (!singlePageApplication) { %>
    app.engine('<%= htmlOption === 'jade' ? 'jade' : '' %><%= htmlOption === 'swig' ? 'swig' : '' %>', require('<%= htmlOption %>').renderFile);
    app.set('view engine', '<%= htmlOption === 'jade' ? 'jade' : '' %><%= htmlOption === 'swig' ? 'swig' : '' %>');<% } %>

    // Setup path where all server templates will reside
    app.set('views', path.join(settings.root, 'server/templates'));

    // Enable GZip compression for all static assets
    app.use(compress());

    if (env === 'development') {
        // Include livereload script on all pages
        app.use(require('connect-livereload')());
    }

    // Load favicon
    app.use(favicon(path.join(settings.root, settings.staticAssets, '/favicon.ico')));

    // Setup static assets
    app.use(express.static(path.join(settings.root, settings.staticAssets), {maxAge: week}));

    // Returns middleware that parses both json and urlencoded.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Returns middleware that parses cookies
    app.use(cookieParser());<% if (useAuth) { %>

    // Initialize form validation
    app.use(expressValidator());

    /**
     * Enable HTTP Method Overrides (POST, GET, DELETE, PUT, etc)
     * Override HTML forms with method="POST" using ?_method=PUT at the end of action URLs
     * ex <form method="POST" action="/someurl?_method=PUT">
     */
    app.use(methodOverride('_method'));

    // override with the X-HTTP-Method-Override header in the request
    app.use(methodOverride('X-HTTP-Method-Override'));

    /**
     * Create cookie that keeps track of user sessions
     */
    app.use(session({
        secret: secrets.sessionSecret,
        saveUninitialized: true,
        resave: true,
        cookie: {
            httpOnly: true, // Only server can manipulate cookies
            maxAge: day
        }
    }));

    // Initialize Authentication
    auth.init(db.user);
    app.use(passport.initialize());
    app.use(passport.session());

    // Initialize server validation flash messages
    app.use(flash());

    // Initialize Security
    app.use(security);

    app.use(function(req, res, next) {
        // Make Node environment available in templates
        res.locals.env = env;
        // Make user object available in templates.
        res.locals.user = req.user;
        next();
    });

    /**
     * Remember original destination before login.
     * Go back to that original destination once successfully logged in
     * (Unless specified in the ignoredPaths array)
     */
    app.use(function(req, res, next) {
        var path = req.path.split('/')[1];
        var ignorePaths = [
            'auth',
            'login',
            'logout',
            'signup',
            'favicon',
            'images',
            'scripts',
            'styles',
            'bower_components'
        ];
        var regExp = new RegExp(ignorePaths.join('|'), 'i');
        if (regExp.test(path)) {
            return next();
        }
        req.session.returnTo = req.path;
        next();
    });<% } %>

    if (env === 'production') {
        // Setup log level for production server console output
        app.use(logger('short'));
    }

    if (env === 'development') {
        // Setup log level for developer server console output
        app.use(logger('dev'));

        // Disable caching for easier testing
        app.use(function noCache(req, res, next) {
            res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
            res.header('Pragma', 'no-cache');
            res.header('Expires', 0);
            next();
        });
    }

    // Load routes
    require(path.join(settings.root,'./server/routes'))(app);

    // 404 Error Handler
    app.use(function(req, res) {
        res.status(404);
        res.format({
            html: function() {
                res.render('errors/404');
            },
            json: function() {
                res.json({
                    status: 404,
                    message: 'Not Found'
                });
            },
            text: function() {
                res.send('404 Not Found');
            }
        });
    });

    if (env === 'development') {
        // Development 500 Error Handler.
        // Log out stack trace
        return app.use(errorHandler());
    }

    // Production 500 Error Handler.
    app.use(function(err, req, res, next) {

        req.unhandledError = err;

        var message = err.message;
        var error = err.error || err;
        var status = err.status || 500;

        res.status(status);
        res.format({
            html: function() {
                res.render('errors/' + status, {
                    message: message
                });
            },
            json: function() {
                res.json({
                    status: status,
                    message: message
                });
            },
            text: function() {
                res.send(status + ': ' + message);
            }
        });
    });


};

module.exports = expressConfig;
