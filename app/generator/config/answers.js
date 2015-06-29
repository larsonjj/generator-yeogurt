/**
 * Handle prompt choices and setup template values
 * For file creation
 */

'use strict';

var _ = require('lodash');

var answersConfig = function answersConfig() {

  // If user chooses to use exsiting yo-rc file, then skip prompts
  if (this.existingConfig) {
    this.answers = this.config.get('config');
  }
  else {
    this.answers = _.merge(
      this.projectPrompts,
      this.clientPrompts,
      this.documentationPrompts,
      this.testingPrompts
    );
  }

  // Assign each answer property to `this` context to give the generator access to it

  // Project Info
  this.projectName  = this.answers.projectName;
  this.versionControl = this.answers.versionControl;

  // Client
  this.singlePageApplication = this.answers.singlePageApplication;
  this.htmlOption            = this.answers.htmlOption;
  this.jsFramework           = this.answers.jsFramework;
  this.jsOption              = this.answers.jsOption;
  this.cssOption             = this.answers.cssOption;
  this.sassSyntax            = this.answers.sassSyntax;
  this.extras                = this.answers.extras;

  // Default to mocha for testing (cannot use jasmine server-side)
  this.answers.testFramework = this.answers.testFramework || 'mocha';

  // Testing
  this.testFramework = this.answers.testFramework;
  this.useTesting    = this.answers.useTesting;

  // Documentation
  this.useDashboard  = this.answers.useDashboard;

  // Default jsOption to Browserify
  this.jsOption = this.answers.jsOption || 'browserify';

};

module.exports = answersConfig;
