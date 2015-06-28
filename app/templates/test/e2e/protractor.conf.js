/* global browser */
// Protractor configuration
// https://github.com/angular/protractor/blob/master/referenceConf.js
'use strict';

exports.config = {
  // The timeout for each script run on the browser. This should be longer
  // than the maximum time your application needs to stabilize between tasks.
  allScriptsTimeout: 110000,

  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:' + (process.env.PORT || '3000'),

  // If true, only chromedriver will be started, not a standalone selenium.
  // Tests for browsers other than chrome will not run.
  directConnect: true,

  // list of files / patterns to load in the browser
  specs: [
    'e2e/**/*.spec.js'
  ],

  // Patterns to exclude.
  exclude: [],

  // ----- Capabilities to be passed to the webdriver instance ----
  //
  // For a full list of available capabilities, see
  // https://code.google.com/p/selenium/wiki/DesiredCapabilities
  // and
  // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js
  capabilities: {
    'browserName': 'chrome'
  },

  // ----- The test framework -----
<% if (testFramework === 'jasmine') { %>
  framework: 'jasmine',

  // ----- Options to be passed to minijasminenode -----
  //
  // See the full list at https://github.com/juliemr/minijasminenode
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }<% } else if (testFramework === 'mocha') { %>

  framework: 'mocha',

  // ----- Options to be passed to mocha -----
  //
  // See the full list at http://mochajs.org/
  mochaOpts: {
    reporter: 'spec',
    slow: 30000
  }<% } %><% if (jsFramework !== 'angular') { %>,

  // Setup globals for protractor tests
  onPrepare: function() {
    // Lets protractor know if it should be looking for angular in tests
    global.isAngularSite = function(flag) {
      browser.ignoreSynchronization = !flag;
    };
  }<% } %>
};
