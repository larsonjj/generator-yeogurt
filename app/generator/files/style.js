/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  // src/styles

  if (this.useKss) {
    this.template('src/styles/styleguide.md', 'src/styleguide.md');
  }

  if (this.cssOption !== 'css') {
    if (this.cssOption === 'less') {
      this.template('src/styles/main.less', 'src/main.less');
    }
    if (this.cssOption === 'sass') {
      if (this.sassSyntax === 'sass') {
        this.template('src/styles/main.sass', 'src/main.sass');
      }
      else {
        this.template('src/styles/main.scss', 'src/main.scss');
      }
    }
    if (this.cssOption === 'stylus') {
      this.template('src/styles/main.styl', 'src/main.styl');
    }
  }
  else {
    this.template('src/styles/main.css', 'src/main.css');
  }
};

module.exports = styleFiles;
