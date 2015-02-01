'use strict';

var Router = require('director').Router;
var routes = require('./routes');
var Dispatcher = require('../common/scripts/core/dispatcher');
var pageConstants = require('../modules/page/page.constant');
var routeConstants = require('../modules/route/route.constant');

// Setup router
var router = new Router(routes);<% if (useServer){ %>

// Enable pushState for compatible browsers
var enablePushState = true;

// Detect is pushState is available
var pushState = !!(enablePushState && window.history && window.history.pushState);

if (pushState) {
  // Start listening to route changes with pushState
  router.configure({
    html5history: true
  }).init();
} else {
  // Start listening to route changes without pushState
  router.init();
}

// Handle pushState for incompatible browsers (IE9 and below)
if (!pushState && window.location.pathname !== '/') {
  window.location.replace('/#' + window.location.pathname);
}

// Handle route and page changes
Dispatcher.register(function(payload) {

  var action = payload.action;

  if (action.actionType === routeConstants.SET_CURRENT_ROUTE) {
    router.setRoute(action.route);
  }

  else if (action.actionType === pageConstants.SET_CURRENT_PAGE) {
    // Set current page title
    document.title = action.page.title;
  }

  return true; // No errors.  Needed by promise in Dispatcher.
});<% } else { %>

// Start listening to route changes
router.init();

// Handle urls by ensuring the use of hash routing
window.location.replace('/#' + window.location.pathname);

// Handle route and page changes
Dispatcher.register(function(payload) {

  var action = payload.action;

  if (action.actionType === routeConstants.SET_CURRENT_ROUTE) {
    router.setRoute(action.route);
  }

  else if (action.actionType === pageConstants.SET_CURRENT_PAGE) {
    // Set current page title
    document.title = action.page.title;
  }

  return true; // No errors.  Needed by promise in Dispatcher.
});<% } %>

console.log('Welcome to Yeogurt');
