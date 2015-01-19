// Configuration for Open task(s)
// Opens up default browser to specified URL
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('open', {
    server: {
      url: 'http://localhost:9010/'
    }
  });

};

module.exports = taskConfig;
