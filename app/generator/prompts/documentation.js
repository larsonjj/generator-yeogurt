/**
 * Generate prompts for automated documentation info
 */

'use strict';

var documentationPrompts = function documentationPrompts() {
  if (this.existingConfig) {
    return;
  }

  var cb = this.async();
  var self = this;

  if (!this.clientPrompts.singlePageApplication) {
    this.log('\n---- ' + 'Documentation'.red.underline + ' ----\n');
  }

  this.prompt([{
    when: function() {
      return !self.clientPrompts.singlePageApplication;
    },
    type: 'confirm',
    name: 'useDashboard',
    message: 'Would you like to ' + 'generate a dashboard'.blue + ' for your site/app',
    default: true
  }], function(answers) {
    this.documentationPrompts = answers;

    cb();
  }.bind(this));

  // Add newline for some separation from next loaded text
  this.log('\n');
};

module.exports = documentationPrompts;
