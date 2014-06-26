/**
 * Express configuration
 */
'use strict';

var compress = require('compression');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var expressValidator = require('express-validator');
var session = require('express-session');
var logger = require('morgan');<% if (dbOption === 'MongoDB') { %>
var MongoStore = require('connect-mongo')({
    session: session
});<% } %>

// Configuration files
var secrets = require('./secrets');
var settings = require('./settings');
var security = require('./security');

module.exports = function(app, passport, express, path) {

    var hour = 3600000;
    var day = hour * 24;
    var week = day * 7;

    var env = app.get('env');

    // Setup port for server to run on
    app.set('port', settings.server.port);

     // Setup view engine for server side templating
    app.engine('.html', require('ejs').__express);
    app.set('view engine', 'html');

    // Remove x-powered-by header (doesn't let clients know we are using Express)
    app.disable('x-powered-by');

    // Returns middleware that parses both json and urlencoded.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Setup server-side validation
    app.use(expressValidator());

    // Parse Cookie header and populate req.cookies with an object keyed by the cookie names
    app.use(cookieParser(secrets.cookieSecret));

    app.use(session({
        secret: secrets.sessionSecret,<% if (dbOption === 'MongoDB') { %>
        store: new MongoStore({
            url: settings.database.url,
            auto_reconnect: true,
        }),<% } %>
        cookie: {
            httpOnly: true /*, secure: true*/
        }
    }));

    // Passport authentication
    app.use(passport.initialize());
    app.use(passport.session());

    // Initialize Lusca Security
    app.use(function(req, res, next) {
        security(req, res, next);
    });

    app.use(function(req, res, next) {
        res.locals.user = req.user;
        next();
    });

    // define a flash message and render it without redirecting the request.
    app.use(flash());

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

        app.use(express.static(path.join(settings.root, 'dev/.server')));
        // Setup path where all server templates will reside
        app.set('views', path.join(settings.root, 'dev'));
    }

    if ('production' === env || 'test' === env) {
        app.use(compress());
        // Mount public/ folder for static assets and set cache via maxAge
        app.use(express.static(path.join(settings.root, 'dist'), {
            maxAge: week
        }));
        // Setup path where all server templates will reside
        app.set('views', path.join(settings.root, 'dev'));
    }

};