/**
 * Generate files specific to the styleguide and JS api documentation
 */

'use strict';

var docFiles = function docFiles() {

  if (this.useKss) {
    this.template('client/autodocs/styleguide/index.html', 'client/autodocs/styleguide/index.html');
    this.template('client/autodocs/styleguide/public/kss.js', 'client/autodocs/styleguide/public/kss.js');
    this.template('client/autodocs/styleguide/public/kss.less', 'client/autodocs/styleguide/public/kss.less');
    this.template('client/autodocs/shared/scripts/less.js', 'client/autodocs/styleguide/public/less.js');
    this.template('client/autodocs/shared/scripts/jquery.js', 'client/autodocs/styleguide/public/jquery.js');
    this.template('client/autodocs/styleguide/public/markdown.less', 'client/autodocs/styleguide/public/markdown.less');
    this.copy('client/autodocs/styleguide/public/prettify.js', 'client/autodocs/styleguide/public/prettify.js');
    this.copy('client/images/yeogurt-logo.png', 'client/autodocs/styleguide/public/images/yeogurt-logo.png');
  }

  if (this.useJsdoc) {
    this.directory('client/autodocs/jsdoc', 'client/autodocs/jsdoc');
    this.template('client/autodocs/shared/scripts/less.js', 'client/autodocs/jsdoc/theme/static/scripts/less.js');
    this.template('client/autodocs/shared/scripts/jquery.js', 'client/autodocs/jsdoc/theme/static/scripts/jquery.js');
  }

  if (this.useDashboard) {
    this.template('client/autodocs/dashboard/styles/dashboard.less', 'client/autodocs/dashboard/styles/dashboard.less');
    this.template('client/autodocs/shared/scripts/less.js', 'client/autodocs/dashboard/scripts/less.js');
    this.template('client/autodocs/shared/scripts/jquery.js', 'client/autodocs/dashboard/scripts/jquery.js');
    this.template('client/autodocs/dashboard/scripts/main.js', 'client/autodocs/dashboard/scripts/main.js');
    this.copy('client/images/yeogurt-logo.png', 'client/autodocs/dashboard/images/yeogurt-logo.png');
    this.copy('client/autodocs/dashboard/template.hbs', 'client/autodocs/dashboard/template.hbs');
  }
};

module.exports = docFiles;
