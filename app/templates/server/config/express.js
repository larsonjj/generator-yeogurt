/**
 * Express configuration
 */
'use strict';

var compress = require('compression');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
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

    var env = app.get('env');

    // Remove x-powered-by header (doesn't let clients know we are using Express)
    app.disable('x-powered-by');

    // Setup port for server to run on
    app.set('port', settings.server.port);

     // Setup view engine for server side templating<% if (singlePageApplication) { %>
    app.engine('.html', require('ejs').__express);
    app.set('view engine', 'html');<% } %><% if (!singlePageApplication && htmlOption !== 'html') { %>
    app.engine('<%= htmlOption === 'jade' ? 'jade' : '' %><%= htmlOption === 'swig' ? 'swig' : '' %>', require('<%= htmlOption %>').renderFile);
    app.set('view engine', '<%= htmlOption === 'jade' ? 'jade' : '' %><%= htmlOption === 'swig' ? 'swig' : '' %>');<% } %>

    // Setup path where all server templates will reside
    app.set('views', path.join(settings.root, 'server/templates'));

    // Enable GZip compression for all static assets
    app.use(compress());

    // Returns middleware that parses both json and urlencoded.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));<% if (useAuth) { %>

    // Initialize form validation
    app.use(expressValidator());

    // Create cookie that keeps track of user sessions
    // And store it in the Database
    app.use(session({
        secret: secrets.sessionSecret,
        saveUninitialized: true,
        resave: true,
        cookie: {
            httpOnly: true, /*, secure: true for HTTPS*/
            maxAge: day
        }
    }));

    // Initialize Authentication
    auth.init(db.user);
    app.use(passport.initialize());
    app.use(passport.session());

    // Initialize server validation flash messages
    app.use(flash());<% if (useSecurity) { %>

    // Initialize Lusca Security
    app.use(security);<% } %>

    app.use(function(req, res, next) {
        // Make Node environment available in templates
        res.locals.env = process.env.NODE_ENV || 'development';
        // Make user object available in templates.
        res.locals.user = req.user;
        next();
    });

    app.use(function(req, res, next) {
        // Remember original destination before login.
        var path = req.path.split('/')[1];
        if (/auth|login|logout|signup|fonts|favicon/i.test(path)) {
            return next();
        }
        req.session.returnTo = req.path;
        next();
    });<% } %>

    if ('production' === env) {
        // Setup log level for server console output
        app.use(logger('dev'));
    }

    if ('development' === env) {
        // Include livereload script
        app.use(require('connect-livereload')());

        // Setup log level for server console output
        app.use(logger('dev'));

        // Disable caching for easier testing
        app.use(function noCache(req, res, next) {
            res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
            res.header('Pragma', 'no-cache');
            res.header('Expires', 0);
            next();
        });
    }
    // Load favicon
    app.use(favicon((settings.root + '/' + settings.staticAssets + '/favicon.ico')));

    // Setup static assets
    app.use(express.static(path.join(settings.root, settings.staticAssets), {maxAge: week}));

};

module.exports = expressConfig;
