/**
 * Generate files specific to templates/views
 */

'use strict';

var viewFiles = function viewFiles() {
    var viewRoot = this.useServer ? 'server/' : 'client/';

    if (this.htmlOption === 'jade') {
        this.mkdir(viewRoot + 'templates');
        this.mkdir(viewRoot + 'templates/layouts');
        this.template('client/templates/jade/index.jade', viewRoot + 'templates/index.jade');
        this.template('client/templates/jade/layouts/base.jade', viewRoot + 'templates/layouts/base.jade');
    }
    else if (this.htmlOption === 'swig') {
        this.mkdir(viewRoot + 'templates');
        this.mkdir(viewRoot + 'templates/layouts');
        this.template('client/templates/swig/index.swig', viewRoot + 'templates/index.swig');
        this.template('client/templates/swig/layouts/base.swig', viewRoot + 'templates/layouts/base.swig');
    }
    else if (this.htmlOption === 'html') {
        this.template('client/templates/html/index.html', 'client/index.html');
    }

    if (this.singlePageApplication) {
        if (!this.useServer) {
            this.template('client/templates/html/index.html', 'client/index.html');
        }
    }
};

module.exports = viewFiles;