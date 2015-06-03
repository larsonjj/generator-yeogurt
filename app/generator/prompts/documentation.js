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

  this.log('\n---- ' + 'Documentation'.red.underline + ' ----\n');

  this.prompt([{
    when: function() {
      return !self.serverPrompts.useServer && !self.clientPrompts.singlePageApplication;
    },
    type: 'confirm',
    name: 'useDashboard',
    message: 'Would you like to ' + 'generate a dashboard'.blue + ' for your site/app',
    default: true
  }], function(answers) {
    this.documentationPrompts = answers;

    cb();
  }.bind(this));
};

module.exports = documentationPrompts;
