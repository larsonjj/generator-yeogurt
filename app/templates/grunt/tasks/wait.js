// `grunt wait`
// Pause grunt execution of tasks to allow node server enough to time to restart

'use strict';

var taskConfig = function(grunt) {
  grunt.registerTask('wait', 'Task that allows a set amount of time to wait for the server to reload', function() {
    grunt.log.ok('Waiting for server...');

    var done = this.async();

    setTimeout(function() {
      grunt.log.writeln('Done waiting!');
      done();
    }, 500);
  });
};

module.exports = taskConfig;
