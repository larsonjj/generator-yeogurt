/**
 * Create prompts for client info
 */

'use strict';

var testingPrompts = function testingPrompts() {
  if (this.existingConfig) {
    return;
  }

  var cb = this.async();
  var self = this;

  this.log('\n---- ' + 'Testing'.red.underline + ' ----\n');

  this.prompt([{
    type: 'confirm',
    name: 'useTesting',
    message: 'Will you be ' + 'unit testing your client-side JavaScript'.blue + '?',
    default: true
  }, {
    type: 'confirm',
    name: 'useE2e',
    message: 'Will you be ' + 'running end-to-end tests'.blue + '?',
    default: true
  }, {
    when: function() {
      return self.serverPrompts.useServer;
    },
    type: 'confirm',
    name: 'useServerTesting',
    message: 'Will you be ' + 'unit testing your server-side JavaScript'.blue + '?',
    default: true
  }, {
    when: function(answers) { return answers.useTesting && !answers.useServerTesting || answers.useE2e && !answers.useServerTesting; },
    type: 'list',
    name: 'testFramework',
    message: 'Which JavaScript ' + 'testing framework'.blue + ' would you like to use?',
    choices: ['Jasmine', 'Mocha'],
    filter: function(val) {
      var filterMap = {
        'Jasmine': 'jasmine',
        'Mocha': 'mocha'
      };

      return filterMap[val];
    }
  }], function(answers) {
    this.testingPrompts = answers;

    cb();
  }.bind(this));
};

module.exports = testingPrompts;
