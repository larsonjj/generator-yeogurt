/**
 * Generate files specific to the grunt folder
 */

'use strict';

var taskFiles = function taskFiles() {

  // ========
  // Util
  // ========

  this.template('gulp/subtasks/util/clean.js', 'gulp/subtasks/util/clean.js');
  this.template('gulp/subtasks/util/copy.js', 'gulp/subtasks/util/copy.js');

  // ========
  // Compile
  // ========

  if (this.cssOption === 'less') {
    this.template('gulp/subtasks/compile/less.js', 'gulp/subtasks/compile/less.js');
  }

  if (this.cssOption === 'sass') {
    this.template('gulp/subtasks/compile/sass.js', 'gulp/subtasks/compile/sass.js');
  }

  if (this.cssOption === 'stylus') {
    this.template('gulp/subtasks/compile/stylus.js', 'gulp/subtasks/compile/stylus.js');
  }

  if (this.htmlOption === 'jade') {
    this.template('gulp/subtasks/compile/jade.js', 'gulp/subtasks/compile/jade.js');
  }
  else if (this.htmlOption === 'nunjucks') {
    this.template('gulp/subtasks/compile/nunjucks.js', 'gulp/subtasks/compile/nunjucks.js');
  }

  // Browserify
  if (this.jsOption === 'browserify') {
    this.template('gulp/subtasks/compile/browserify.js', 'gulp/subtasks/compile/browserify.js');
  }

  // ========
  // Docs
  // ========

  // Auto-Dashboard
  if (this.useDashboard) {
    this.template('gulp/subtasks/docs/dashboard.js', 'gulp/subtasks/docs/dashboard.js');
  }

  // ========
  // Optimize
  // ========

  this.template('gulp/subtasks/optimize/imagemin.js', 'gulp/subtasks/optimize/imagemin.js');

  // ========
  // Test
  // ========

  this.template('gulp/subtasks/test/eslint.js', 'gulp/subtasks/test/eslint.js');

  if (this.useTesting) {
    this.template('gulp/subtasks/test/karma.js', 'gulp/subtasks/test/karma.js');
  }

  if (this.useE2e) {
    this.template('gulp/subtasks/test/protractor.js', 'gulp/subtasks/test/protractor.js');
  }

  // ========
  // Tasks
  // ========

  this.template('gulp/tasks/build.js', 'gulp/tasks/build.js');
  this.template('gulp/tasks/default.js', 'gulp/tasks/default.js');
  this.template('gulp/tasks/serve.js', 'gulp/tasks/serve.js');
  this.template('gulp/tasks/test.js', 'gulp/tasks/test.js');

};

module.exports = taskFiles;
