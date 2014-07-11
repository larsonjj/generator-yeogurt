/**
 * Express configuration
 */
'use strict';

var compress = require('compression');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var session = require('express-session');
var logger = require('morgan');<% if (dbOption === 'MongoDB') { %>
var MongoStore = require('connect-mongo')({
    session: session
});<% } %><% if ('MySQL'.indexOf(dbOption) > -1) { %>
var SequelizeStore = require('connect-session-sequelize')(session.Store);<% } %>

// Configuration files
var secrets = require('./secrets');
var settings = require('./settings');
var security = require('./security');

module.exports = function(app, express,<% if ('MySQL'.indexOf(dbOption) > -1) { %> sequelize,<% } %> path) {

    var hour = 3600000;
    var day = hour * 24;
    var week = day * 7;

    var env = app.get('env');

    // Setup port for server to run on
    app.set('port', settings.server.port);

     // Setup view engine for server side templating<% if (structure === 'Single Page Application' || htmlOption === 'None (Vanilla HTML)') { %>
    app.engine('.html', require('ejs').__express);
    app.set('view engine', 'html');<% } %><% if (structure === 'Static Site' && htmlOption !== 'None (Vanilla HTML)') { %>
    app.engine('<%= htmlOption === 'Jade' ? 'jade' : '' %><%= htmlOption === 'Swig' ? 'swig' : '' %><%= htmlOption === 'None (Vanilla HTML)' ? 'html' : '' %>', require('<%= htmlOption.toLowerCase() %>').renderFile);
    app.set('view engine', '<%= htmlOption === 'Jade' ? 'jade' : '' %><%= htmlOption === 'Swig' ? 'swig' : '' %>

    // Remove x-powered-by header (doesn't let clients know we are using Express)
    app.disable('x-powered-by');

    if ('development' === env) {
        app.use(require('connect-livereload')());

        // Setup log level for server console output
        app.use(logger('dev'));

        // Disable caching of scripts for easier testing
        app.use(function noCache(req, res, next) {
            if (req.url.indexOf('/scripts/') === 0) {
                res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
                res.header('Pragma', 'no-cache');
                res.header('Expires', 0);
            }
            next();
        });

        app.use(express.static(path.join(settings.root, settings.staticAssets), {maxAge: week}));
    }

    if ('production' === env) {
        app.use(compress());
        // Mount public/ folder for static assets and set cache via maxAge
        app.use(express.static(path.join(settings.root, settings.staticAssets), {
            maxAge: week
        }));
    }

    // Setup path where all server templates will reside<% if (structure === 'Single Page Application') { %>
    app.set('views', path.join(settings.root, 'lib/views'));<% } %><% if (structure === 'Static Site') { %>
    app.set('views', path.join(settings.root, 'dev/templates'));
    <% } %>

    // Returns middleware that parses both json and urlencoded.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Parse Cookie header and populate req.cookies with an object keyed by the cookie names
    app.use(cookieParser(secrets.cookieSecret));

    app.use(session({
        secret: secrets.sessionSecret,
        saveUninitialized: true,
        resave: true,<% if (dbOption === 'MongoDB') { %>
        store: new MongoStore({
            url: settings.database.url,
            auto_reconnect: true,
        }),<% } %><% if (dbOption === 'MySQL') { %>
        store: new SequelizeStore({
            db: sequelize
        }),<% } %>
        cookie: {
            httpOnly: true, /*, secure: true for HTTPS*/
            maxAge: day
        }
    }));

    // Initialize Lusca Security
    app.use(function(req, res, next) {
        security(req, res, next);
    });

    app.use(function(req, res, next) {
        res.locals.user = req.user;
        next();
    });

    // Load all routes
    require('fs').readdirSync(path.join(settings.root, './lib/routes/')).forEach(function(file) {
        require(path.join(settings.root, './lib/routes/') + file)(app);
    });

    /**
     * 500 Error Handler.
     * As of Express 4.0 it must be placed at the end of all routes.
     */
    app.use(errorHandler());

};