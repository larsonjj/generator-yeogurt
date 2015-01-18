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
  }, {
    type: 'list',
    name: 'versionControl',
    message: 'Which ' + 'version control software'.blue + ' are you using (or plan to use)?',
    choices: ['Git', 'SVN', 'None (I like to live on the edge)'],
    filter: function(val) {
      var filterMap = {
        'Git': 'git',
        'SVN': 'svn',
        'None (I like to live on the edge)': 'none'
      };

      return filterMap[val];
    }
  }], function(answers) {
    this.projectPrompts = answers;

    cb();
  }.bind(this));
};

module.exports = projectPrompts;
