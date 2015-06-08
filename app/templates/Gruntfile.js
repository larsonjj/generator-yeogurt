// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

var fs = require('fs');
var path = require('path');

var config = require('./yeogurt.conf');

module.exports = function(grunt) {

  // setup configuration object
  grunt.config.set('yeogurt', config);

  // show elapsed time at the end
  require('time-grunt')(grunt);

  // Load all grunt tasks with JIT (Makes task loading super fast!)
  require('jit-grunt')(grunt, {
    // translate browsersync task to use the 'grunt-browser-sync' plugin
    browserSync: 'grunt-browser-sync'<% if (htmlOption === 'swig') { %>,
    // translate swig task to use the 'grunt-swig-templates' plugin
    swig: 'grunt-swig-templates'<% } %><% if (jsFramework === 'angular') { %>,
    // translate ngtemplates task to use the 'grunt-angular-templates' plugin
    ngtemplates: 'grunt-angular-templates'<% } %><% if (useE2e) { %>,
    // translate protractor task to use the 'protractor-runner' plugin
    protractor: 'grunt-protractor-runner'<% } %>
  });

  // Load the include-all library in order to require all of our grunt
  // configurations and task registrations dynamically.
  var includeAll = require('include-all');

  // Loads Grunt configuration modules from the specified
  // relative path. These modules should export a function
  // that, when run, should either load/configure or register
  // a Grunt task.
  function loadTasks(relPath) {
    return includeAll({
      dirname: require('path').resolve(__dirname, relPath),
      filter: /(.+)\.js$/
    }) || {};
  }

  // Invokes the function from a Grunt configuration module with
  // a single argument - the `grunt` object.
  function invokeConfigFn(tasks) {
    for (var taskName in tasks) {
      if (tasks.hasOwnProperty(taskName)) {
        tasks[taskName](grunt);
      }
    }
  }

  // Load task functions
  var utilConfig = loadTasks('./grunt/config/util');
  var compileConfig = loadTasks('./grunt/config/compile');<% if (useDashboard) { %>
  var docConfig = loadTasks('./grunt/config/docs');<% } %>
  var optimizeConfig = loadTasks('./grunt/config/optimize');
  var serverConfig = loadTasks('./grunt/config/server');
  var testConfig = loadTasks('./grunt/config/test');
  var registerDefinitions = loadTasks('./grunt/tasks');

  // (ensure that a default task exists)
  if (!registerDefinitions.default) {
    registerDefinitions.
    default = function(task) {
      task.registerTask('default', []);
    };
  }

  // Run task functions to configure Grunt.
  invokeConfigFn(utilConfig);
  invokeConfigFn(compileConfig);<% if (useDashboard) { %>
  invokeConfigFn(docConfig);<% } %>
  invokeConfigFn(optimizeConfig);
  invokeConfigFn(serverConfig);
  invokeConfigFn(testConfig);
  invokeConfigFn(registerDefinitions);

};
