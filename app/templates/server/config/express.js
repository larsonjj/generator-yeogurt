// Express configuration

'use strict';

var compress = require('compression');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var session = require('express-session');
var errors = require('../modules/error');
var routes = require('../app/routes');

// Configuration files
var secrets = require('./secrets');
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
    // Load bower_components
    app.use(express.static(path.join(settings.root, '.tmp'), {maxAge: 0}));
    app.use('/bower_components', express.static(path.join(settings.root, 'client/bower_components'), {maxAge: 0}));
  }
  // Load favicon
  app.use(favicon(path.join(settings.root, settings.staticAssets, '/favicon.ico')));
  // Load static assets
  app.use(express.static(path.join(settings.root, settings.staticAssets), {maxAge: week}));

  // Returns middleware that parses both json and urlencoded.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // Returns middleware that parses cookies
  app.use(cookieParser());

  // Enable HTTP Method Overrides (POST, GET, DELETE, PUT, etc)
  // Override HTML forms with method="POST" using ?_method=PUT at the end of action URLs
  // ex <form method="POST" action="/someurl?_method=PUT">
  app.use(methodOverride('_method'));

  // override with the X-HTTP-Method-Override header in the request
  app.use(methodOverride('X-HTTP-Method-Override'));

  // Create cookie that keeps track of user sessions
  app.use(session({
    secret: secrets.sessionSecret,
    saveUninitialized: true,
    resave: true,
    cookie: {
      httpOnly: true, // Only server can manipulate cookies
      maxAge: day
    }
  }));

  // Initialize Security
  app.use(security);

  app.use(function(req, res, next) {
    // Make Node environment available in templates
    res.locals.env = env;
    next();
  });

  // Setup log level for server console output
  app.use(logger(settings.server.logLevel));

  // Load routes
  routes(app);

  // 404 Error Handler
  app.use(errors('404'));

  if (env === 'development') {
    // Development Error Handler.
    // Log out stack trace
    return app.use(errorHandler());
  }

  // Production Error Handler.
  app.use(errors('500'));

};

module.exports = expressConfig;
