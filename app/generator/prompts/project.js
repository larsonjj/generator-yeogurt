/**
 * Generate Initial project information prompts
 */

'use strict';

var projectPrompts = function projectPrompts() {
  if (this.existingConfig) {
    return;
  }

  var cb = this.async();

  this.log('\n---- ' + 'Project Info'.red.underline + ' ----\n');

  this.prompt([{
    type: 'input',
    name: 'projectName',
    message: 'What would you like to' + ' name your project'.blue + '?',
    default: 'Sample'
  }], function(answers) {
    this.projectPrompts = answers;

    cb();
  }.bind(this));
};

module.exports = projectPrompts;
