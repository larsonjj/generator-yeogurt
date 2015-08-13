/**
 * Generate files specific to needed images
 */

'use strict';

var gulpFiles = function gulpFiles() {
  this.template('gulp/browserify.js', 'gulp/browserify.js');
  this.template('gulp/browserSync.js', 'gulp/browserSync.js');
  this.template('gulp/clean.js', 'gulp/clean.js');
  this.template('gulp/copy.js', 'gulp/copy.js');
  this.template('gulp/eslint.js', 'gulp/eslint.js');
  this.template('gulp/imagemin.js', 'gulp/imagemin.js');
  this.template('gulp/watch.js', 'gulp/watch.js');

  if (this.htmlOption === 'jade') {
    this.template('gulp/jade.js', 'gulp/jade.js');
  }
  else if (this.htmlOption === 'nunjucks') {
    this.template('gulp/nunjucks.js', 'gulp/nunjucks.js');
  }

  if (this.cssOption === 'sass') {
    this.template('gulp/sass.js', 'gulp/sass.js');
  }
  else if (this.cssOption === 'less') {
    this.template('gulp/less.js', 'gulp/less.js');
  }
  if (this.cssOption === 'stylus') {
    this.template('gulp/stylus.js', 'gulp/stylus.js');
  }
};

module.exports = gulpFiles;
