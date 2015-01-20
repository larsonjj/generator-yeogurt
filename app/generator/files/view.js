/**
 * Generate files specific to templates/templates
 */

'use strict';

var viewFiles = function viewFiles() {
  var viewRoot = this.useServer ? 'server/' : 'client/';

  if (this.htmlOption === 'jade') {
    this.template('client/static-templates/jade/index.jade', viewRoot + 'templates/index.jade');
    this.template('client/static-templates/jade/layouts/base.jade', viewRoot + 'templates/layouts/base.jade');
    if (this.useServer) {
      this.template('client/static-templates/jade/errors/error.jade', viewRoot + 'templates/error.jade');
    }
  }
  else if (this.htmlOption === 'swig') {
    this.template('client/static-templates/swig/index.swig', viewRoot + 'templates/index.swig');
    this.template('client/static-templates/swig/layouts/base.swig', viewRoot + 'templates/layouts/base.swig');
    if (this.useServer) {
      this.template('client/static-templates/swig/errors/error.swig', viewRoot + 'templates/error.swig');
    }
  }

  if (this.singlePageApplication) {
    this.template('client/spa-templates/html/index.html', 'client/index.html');
    if (this.useServer) {
      this.template('client/spa-templates/html/errors/error.html', 'server/templates/error.html');
    }
  }
};

module.exports = viewFiles;
