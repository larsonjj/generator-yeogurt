/**
 * Generate Initial project information prompts
 */

'use strict';

var _ = require('lodash');

var projectPrompts = function projectPrompts() {
  this.projectPrompts = {};
  var prompts = {
    projectName: {
        type: 'input',
        name: 'projectName',
        message: 'What would you like to' + ' name your project'.blue + '?',
        default: 'Sample'
      }
  };
  var configPrompts = [];

  if (this.existingConfig) {
    var config = this.config.get('config');

    if (config.projectName) {
      this.projectPrompts.projectName = config.projectName;
    }
    else {
      configPrompts.push(prompts.projectName);
    }

    if (!configPrompts.length) return;
  }
  else {
    this.projectPrompts = this.options;
    configPrompts = _.values(_.omit(prompts, _.keys(this.options)));
  }

  var cb = this.async();

  this.log('\n---- ' + 'Project Info'.red.underline + ' ----\n');

  this.prompt(configPrompts, function(answers) {
    this.projectPrompts = answers;

    cb();
  }.bind(this));
};

module.exports = projectPrompts;
