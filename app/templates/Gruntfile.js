// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

// Folder paths for:
// - dev (location for development source files)
// - server (location for files created when running 'grunt serve')
// - dist (location for files created when running 'grunt' or 'grunt build')
var config = {
    dev: 'dev',
    server: 'dev/.server',
    dist: 'dist'
};

module.exports = function(grunt) {

    // setup configuration object
    grunt.config.set('yeogurt', config);

    // show elapsed time at the end
    require('time-grunt')(grunt);

    // Load all grunt tasks with JIT (Makes task loading super fast!)
    require('jit-grunt')(grunt, {
        // translate useminPrepare to use the 'grunt-usemin' plugin
        useminPrepare: 'grunt-usemin',
        // translate swig to use the 'grunt-wobble-swig' plugin
        swig: 'grunt-swig-templates'<% if (useServer) { %>,
        express: 'grunt-express-server'<% } %>
    });

    // Load the include-all library in order to require all of our grunt
    // configurations and task registrations dynamically.
    var  includeAll = require('include-all');

    /**
     * Loads Grunt configuration modules from the specified
     * relative path. These modules should export a function
     * that, when run, should either load/configure or register
     * a Grunt task.
     */
    function loadTasks(relPath) {
        return includeAll({
            dirname: require('path').resolve(__dirname, relPath),
            filter: /(.+)\.js$/
        }) || {};
    }

    /**
     * Invokes the function from a Grunt configuration module with
     * a single argument - the `grunt` object.
     */
    function invokeConfigFn(tasks) {
        for (var taskName in tasks) {
            if (tasks.hasOwnProperty(taskName)) {
                tasks[taskName](grunt);
            }
        }
    }

    // Load task functions
    var taskConfigurations = loadTasks('./grunt/config'),
        registerDefinitions = loadTasks('./grunt/tasks');

    // (ensure that a default task exists)
    if (!registerDefinitions.
        default) {
        registerDefinitions.
        default = function(grunt) {
            grunt.registerTask('default', []);
        };
    }

    // Run task functions to configure Grunt.
    invokeConfigFn(taskConfigurations);
    invokeConfigFn(registerDefinitions);

};