// Configuration for Open task(s)
// Opens up default browser to specified URL
'use strict';

var taskConfig = function(grunt) {

  // Load config for use with non-grunt logic
  var yeogurt = grunt.config.get('yeogurt');
  var serverUrl = 'http://' + yeogurt.host + ':' + yeogurt.port + '/' + yeogurt.baseUrl;

  grunt.config.set('open', {
    serve: {
      url: serverUrl
    }
  });

};

module.exports = taskConfig;
