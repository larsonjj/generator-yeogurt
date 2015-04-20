/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  // src/styles

  if (this.cssOption !== 'css') {
    if (this.useKss) {
      this.template('src/styles/styleguide.md', 'src/_styles/styleguide.md');
    }
    if (this.cssOption === 'less') {
      this.template('src/styles/main.less', 'src/_styles/main.less');
    }
    if (this.cssOption === 'sass') {
      if (this.sassSyntax === 'sass') {
        this.template('src/styles/main.sass', 'src/_styles/main.sass');
      }
      else {
        this.template('src/styles/main.scss', 'src/_styles/main.scss');
      }
    }
    if (this.cssOption === 'stylus') {
      this.template('src/styles/main.styl', 'src/_styles/main.styl');
    }
  }
  else {
    if (this.useKss) {
      this.template('src/styles/styleguide.md', 'src/styles/styleguide.md');
    }
    this.template('src/styles/main.css', 'src/styles/main.css');
  }
};

module.exports = styleFiles;
