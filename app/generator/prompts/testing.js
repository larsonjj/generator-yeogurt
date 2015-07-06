/**
 * Create prompts for client info
 */

'use strict';

var testingPrompts = function testingPrompts() {
  if (this.existingConfig) {
    return;
  }

  var cb = this.async();

  this.log('\n---- ' + 'Testing'.red.underline + ' ----\n');

  this.prompt([{
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
  }], function(answers) {
    this.testingPrompts = answers;

    cb();
  }.bind(this));
};

module.exports = testingPrompts;
