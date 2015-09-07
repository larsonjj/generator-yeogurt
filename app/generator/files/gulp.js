/**
 * Generate files specific to needed images
 */

'use strict';

var gulpFiles = function gulpFiles() {
  if (this.jsPreprocessor === 'none') {
    this.template('gulp/es5/browserify.js', 'gulp/browserify.js');
    this.template('gulp/es5/browserSync.js', 'gulp/browserSync.js');
    this.template('gulp/es5/clean.js', 'gulp/clean.js');
    this.template('gulp/es5/copy.js', 'gulp/copy.js');
    this.template('gulp/es5/eslint.js', 'gulp/eslint.js');
    this.template('gulp/es5/imagemin.js', 'gulp/imagemin.js');
    this.template('gulp/es5/watch.js', 'gulp/watch.js');

    if (this.htmlOption === 'jade') {
      this.template('gulp/es5/jade.js', 'gulp/jade.js');
    }
    else if (this.htmlOption === 'nunjucks') {
      this.template('gulp/es5/nunjucks.js', 'gulp/nunjucks.js');
    }

    if (this.cssOption === 'sass') {
      this.template('gulp/es5/sass.js', 'gulp/sass.js');
    }
    else if (this.cssOption === 'less') {
      this.template('gulp/es5/less.js', 'gulp/less.js');
    }
    if (this.cssOption === 'stylus') {
      this.template('gulp/es5/stylus.js', 'gulp/stylus.js');
    }
  }
  else {
    this.template('gulp/es6/browserify.js', 'gulp/browserify.js');
    this.template('gulp/es6/browserSync.js', 'gulp/browserSync.js');
    this.template('gulp/es6/clean.js', 'gulp/clean.js');
    this.template('gulp/es6/copy.js', 'gulp/copy.js');
    this.template('gulp/es6/eslint.js', 'gulp/eslint.js');
    this.template('gulp/es6/imagemin.js', 'gulp/imagemin.js');
    this.template('gulp/es6/watch.js', 'gulp/watch.js');

    if (this.htmlOption === 'jade') {
      this.template('gulp/es6/jade.js', 'gulp/jade.js');
    }
    else if (this.htmlOption === 'nunjucks') {
      this.template('gulp/es6/nunjucks.js', 'gulp/nunjucks.js');
    }

    if (this.cssOption === 'sass') {
      this.template('gulp/es6/sass.js', 'gulp/sass.js');
    }
    else if (this.cssOption === 'less') {
      this.template('gulp/es6/less.js', 'gulp/less.js');
    }
    if (this.cssOption === 'stylus') {
      this.template('gulp/es6/stylus.js', 'gulp/stylus.js');
    }
  }
};

module.exports = gulpFiles;
