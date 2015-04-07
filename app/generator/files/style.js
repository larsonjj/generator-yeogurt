/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  // client/styles

  if (this.useKss) {
    this.template('client/styles/styleguide.md', 'client/styleguide.md');
  }

  if (this.cssOption !== 'css') {
    if (this.cssOption === 'less') {
      this.template('client/styles/main.less', 'client/main.less');
    }
    if (this.cssOption === 'sass') {
      if (this.sassSyntax === 'sass') {
        this.template('client/styles/main.sass', 'client/main.sass');
      }
      else {
        this.template('client/styles/main.scss', 'client/main.scss');
      }
    }
    if (this.cssOption === 'stylus') {
      this.template('client/styles/main.styl', 'client/main.styl');
    }
  }
  else {
    this.template('client/styles/main.css', 'client/main.css');
  }
};

module.exports = styleFiles;
