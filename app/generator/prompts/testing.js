/**
 * Create prompts for client info
 */

'use strict';

var _ = require('lodash');

var testingPrompts = function testingPrompts() {
  this.testingPrompts = {};
  var prompts = {
    testFramework: {
      type: 'list',
      name: 'testFramework',
      message: 'Which JavaScript ' + 'testing framework'.blue + ' would you like to use?',
      choices: ['Jasmine', 'Mocha', 'None'],
      filter: function(val) {
        var filterMap = {
          'Jasmine': 'jasmine',
          'Mocha': 'mocha',
          'None': 'none'
        };

        return filterMap[val];
      }
    }
  };
  var configPrompts = [];

  if (this.existingConfig) {
    var config = this.config.get('config');

    if (config.testFramework) {
      this.testingPrompts = config.testFramework;
    }
    else {
      configPrompts.push(prompts.testFramework);
    }

    if(!configPrompts.length) return;
  }
  else {
    this.testingPrompts = this.options;
    configPrompts = _.values(_.omit(prompts, _.keys(this.options)));
  }

  var cb = this.async();

  this.log('\n---- ' + 'Testing'.red.underline + ' ----\n');

  this.prompt(configPrompts, function(answers) {
    this.testingPrompts = answers;

    cb();
  }.bind(this));
};

module.exports = testingPrompts;
