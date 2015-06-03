/**
 * Generate files specific to the styleguide and JS api documentation
 */

'use strict';

var docFiles = function docFiles() {

  if (this.useDashboard) {
    this.template('src/autodocs/dashboard/styles/dashboard.less', 'src/_autodocs/dashboard/styles/dashboard.less');
    this.template('src/autodocs/dashboard/styles/module-syntax.less', 'src/_autodocs/dashboard/styles/module-syntax.less');
    this.template('src/autodocs/dashboard/scripts/less.js', 'src/_autodocs/dashboard/scripts/less.js');
    this.template('src/autodocs/dashboard/scripts/jquery.js', 'src/_autodocs/dashboard/scripts/jquery.js');
    this.template('src/autodocs/dashboard/scripts/highlight.js', 'src/_autodocs/dashboard/scripts/highlight.js');
    this.template('src/autodocs/dashboard/scripts/main.js', 'src/_autodocs/dashboard/scripts/main.js');
    this.copy('src/autodocs/dashboard/template.hbs', 'src/_autodocs/dashboard/template.hbs');
    this.copy('src/autodocs/dashboard/module-template.hbs', 'src/_autodocs/dashboard/module-template.hbs');
    this.copy('src/default/_images/yeogurt-logo.png', 'src/_autodocs/dashboard/images/yeogurt-logo.png');
  }

};

module.exports = docFiles;
