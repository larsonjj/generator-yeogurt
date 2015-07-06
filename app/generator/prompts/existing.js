/**
 * Check for existing yo-rc.json configuration file
 */

'use strict';

var existingConfigPrompt = function existingConfigPrompt() {
  var cb = this.async();
  if (this.config.get('config')) {
    this.prompt([{
      type: 'confirm',
      name: 'existingConfig',
      message: 'Existing .yo-rc configuration found, would you like to use it?',
      default: true
    }], function(answers) {
      this.existingConfig = answers.existingConfig;
      cb();
    }.bind(this));
  }
  else {
    cb();
  }
};

module.exports = existingConfigPrompt;
