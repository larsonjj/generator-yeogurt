/**
 * Generate files specific to templates/templates
 */

'use strict';

var viewFiles = function viewFiles() {

  if (this.htmlOption === 'jade') {
    if (!this.useServer) {
      this.template('client/static-templates/jade/index.jade', 'client/app/index/index.jade');
      this.template('client/static-templates/jade/layouts/base.jade', 'client/app/layout/base.jade');
    }
    else {
      this.template('client/static-templates/jade/index.jade', 'server/app/index/index.jade');
      this.template('client/static-templates/jade/layouts/base.jade', 'server/app/layout/base.jade');
      this.template('server/modules/error/jade/404.jade', 'server/modules/error/404.jade');
      this.template('server/modules/error/jade/500.jade', 'server/modules/error/500.jade');
      this.template('server/modules/error/index.js', 'server/modules/error/index.js');
    }
  }
  else if (this.htmlOption === 'swig') {
    if (!this.useServer) {
      this.template('client/static-templates/swig/index.swig', 'client/app/index/index.swig');
      this.template('client/static-templates/swig/layouts/base.swig', 'client/app/layout/base.swig');
    }
    else {
      this.template('client/static-templates/swig/index.swig', 'server/app/index/index.swig');
      this.template('client/static-templates/swig/layouts/base.swig', 'server/app/layout/base.swig');
      this.template('server/modules/error/swig/404.swig', 'server/modules/error/404.swig');
      this.template('server/modules/error/swig/500.swig', 'server/modules/error/500.swig');
      this.template('server/modules/error/index.js', 'server/modules/error/index.js');
    }
  }

  if (this.singlePageApplication) {
    this.template('client/spa-templates/html/index.html', 'client/index.html');
    if (this.useServer) {
      this.template('server/modules/error/html/404.html', 'server/modules/error/404.html');
      this.template('server/modules/error/html/500.html', 'server/modules/error/500.html');
      this.template('server/modules/error/index.js', 'server/modules/error/index.js');
    }
  }
};

module.exports = viewFiles;
