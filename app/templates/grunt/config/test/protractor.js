// Configuration for Protractor task(s)
// Handles protractor e2e testing server
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('protractor', {
    protractor: {
      options: {
        configFile: 'protractor.conf.js'
      },
      chrome: {
        options: {
          args: {
            browser: 'chrome'
          }
        }
      }
    },
  });

};

module.exports = taskConfig;
