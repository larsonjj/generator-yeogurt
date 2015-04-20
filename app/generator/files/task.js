/**
 * Generate files specific to the grunt folder
 */

'use strict';

var taskFiles = function taskFiles() {

  // ========
  // Util
  // ========

  this.template('grunt/config/util/watch.js', 'grunt/config/util/watch.js');
  this.template('grunt/config/util/clean.js', 'grunt/config/util/clean.js');
  this.template('grunt/config/util/concurrent.js', 'grunt/config/util/concurrent.js');
  this.template('grunt/config/util/copy.js', 'grunt/config/util/copy.js');

  if (this.useServer) {
    // Open (handles opening default web browser)
    this.template('grunt/config/util/open.js', 'grunt/config/util/open.js');
  }

  // ========
  // Compile
  // ========

  if (this.cssOption === 'less') {
    this.template('grunt/config/compile/less.js', 'grunt/config/compile/less.js');
  }

  if (this.jsOption === 'requirejs') {
    this.template('grunt/config/compile/requirejs.js', 'grunt/config/compile/requirejs.js');
  }

  if (this.cssOption === 'sass') {
    this.template('grunt/config/compile/sass.js', 'grunt/config/compile/sass.js');
  }

  if (this.cssOption === 'stylus') {
    this.template('grunt/config/compile/stylus.js', 'grunt/config/compile/stylus.js');
  }

  if (this.jsTemplate === 'underscore') {
    this.template('grunt/config/compile/jst.js', 'grunt/config/compile/jst.js');
  }
  else if (this.jsTemplate === 'handlebars') {
    this.template('grunt/config/compile/handlebars.js', 'grunt/config/compile/handlebars.js');
  }

  if (this.htmlOption === 'jade' || this.jsTemplate === 'jade') {
    this.template('grunt/config/compile/jade.js', 'grunt/config/compile/jade.js');
  }
  else if (this.htmlOption === 'swig') {
    this.template('grunt/config/compile/swig.js', 'grunt/config/compile/swig.js');
  }

  // Browserify
  if (this.jsOption === 'browserify') {
    this.template('grunt/config/compile/browserify.js', 'grunt/config/compile/browserify.js');
  }

  if (this.jsFramework === 'angular') {
    this.template('grunt/config/compile/ng-templates.js', 'grunt/config/compile/ng-templates.js');
    this.template('grunt/config/compile/ng-annotate.js', 'grunt/config/compile/ng-annotate.js');
  }

  // ========
  // Docs
  // ========

  // JSDoc
  if (this.useJsdoc) {
    this.template('grunt/config/docs/jsdoc.js', 'grunt/config/docs/jsdoc.js');
  }

  // Auto-Dashboard
  if (this.useDashboard) {
    this.template('grunt/config/docs/dashboard.js', 'grunt/config/docs/dashboard.js');
  }

  // KSS Styleguide
  if (this.useKss) {
    this.template('grunt/config/docs/styleguide.js', 'grunt/config/docs/styleguide.js');
  }

  // ========
  // Optimize
  // ========

  this.template('grunt/config/optimize/concat.js', 'grunt/config/optimize/concat.js');
  this.template('grunt/config/optimize/htmlmin.js', 'grunt/config/optimize/htmlmin.js');
  this.template('grunt/config/optimize/autoprefixer.js', 'grunt/config/optimize/autoprefixer.js');
  this.template('grunt/config/optimize/imagemin.js', 'grunt/config/optimize/imagemin.js');
  this.template('grunt/config/optimize/uglify.js', 'grunt/config/optimize/uglify.js');
  this.template('grunt/config/optimize/cssmin.js', 'grunt/config/optimize/cssmin.js');

  // ========
  // Server
  // ========

  if (!this.useServer) {
    // Connect (simple webserver)
    this.template('grunt/config/server/browsersync.js', 'grunt/config/server/browsersync.js');
  }

  if (this.useServer) {
    this.template('grunt/config/server/express.js', 'grunt/config/server/express.js');
    this.template('grunt/config/server/env.js', 'grunt/config/server/env.js');
  }

  // ========
  // Test
  // ========

  this.template('grunt/config/test/eslint.js', 'grunt/config/test/eslint.js');

  if (this.useServerTesting) {
    this.template('grunt/config/test/mochaTest.js', 'grunt/config/test/mochaTest.js');
  }

  if (this.useTesting) {
    this.template('grunt/config/test/karma.js', 'grunt/config/test/karma.js');
  }

  if (this.useE2e) {
    this.template('grunt/config/test/protractor.js', 'grunt/config/test/protractor.js');
  }

  // ========
  // Tasks
  // ========

  this.template('grunt/tasks/build.js', 'grunt/tasks/build.js');
  this.template('grunt/tasks/default.js', 'grunt/tasks/default.js');
  this.template('grunt/tasks/serve.js', 'grunt/tasks/serve.js');
  this.template('grunt/tasks/test.js', 'grunt/tasks/test.js');

  if (this.useServer) {
    this.template('grunt/tasks/keepalive.js', 'grunt/tasks/keepalive.js');
    this.template('grunt/tasks/wait.js', 'grunt/tasks/wait.js');
  }
};

module.exports = taskFiles;
