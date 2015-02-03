/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  // client/styles

  if (this.useKss) {
    this.template('client/app/styles/styleguide.md', 'client/app/styleguide.md');
  }

  if (this.cssOption !== 'css') {
    if (this.cssOption === 'less') {
      this.template('client/app/styles/main.less', 'client/app/main.less');
      this.template('client/app/styles/index/index.less', 'client/app/index/index.less');
    }
    if (this.cssOption === 'sass') {
      if (this.sassSyntax === 'sass') {
        this.template('client/app/styles/main.sass', 'client/app/main.sass');
        this.template('client/app/styles/index/index.sass', 'client/app/index/index.sass');
      }
      else {
        this.template('client/app/styles/main.scss', 'client/app/main.scss');
        this.template('client/app/styles/index/index.scss', 'client/app/index/index.scss');
      }
    }
    if (this.cssOption === 'stylus') {
      this.template('client/app/styles/main.styl', 'client/app/main.styl');
      this.template('client/app/styles/index/index.styl', 'client/app/index/index.styl');
    }
  }
  else {
    this.template('client/app/styles/main.css', 'client/app/main.css');
    this.template('client/app/styles/index/index.css', 'client/app/index/index.css');
  }
};

module.exports = styleFiles;
