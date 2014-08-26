// Generated on 2014-08-26 using generator-yeogurt 0.10.0
'use strict';

// Folder paths for:
// - dev (location for development source files)
// - server (location for files created when running 'grunt serve')
// - dist (location for files created when running 'grunt' or 'grunt build')
var config = {
    client: 'client',
    staticServer: 'client/.serve',
    dist: 'dist',
    server: 'server'
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
        swig: 'grunt-swig-templates'
    });

    // Load the include-all library in order to require all of our grunt
    // configurations and task registrations dynamically.
    var includeAll = require('include-all');

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
    var utilConfig = loadTasks('./grunt/config/util');
    var compileConfig = loadTasks('./grunt/config/compile');
    var optimizeConfig = loadTasks('./grunt/config/optimize');
    var serverConfig = loadTasks('./grunt/config/server');
    var testConfig = loadTasks('./grunt/config/test');
    var registerDefinitions = loadTasks('./grunt/tasks');

    // (ensure that a default task exists)
    if (!registerDefinitions.
        default) {
        registerDefinitions.
        default = function(grunt) {
            grunt.registerTask('default', []);
        };
    }

    // Run task functions to configure Grunt.
    invokeConfigFn(utilConfig);
    invokeConfigFn(compileConfig);
    invokeConfigFn(optimizeConfig);
    invokeConfigFn(serverConfig);
    invokeConfigFn(testConfig);
    invokeConfigFn(registerDefinitions);

};