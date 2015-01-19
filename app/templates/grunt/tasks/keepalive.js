// `grunt keepalive`
// Keep node server running forever

'use strict';

var taskConfig = function(grunt) {
  grunt.registerTask('keepalive', 'Keeps the express server running forever', function() {
    grunt.log.ok('Keeping the server running forever...');

    this.async();
  });
};

module.exports = taskConfig;
