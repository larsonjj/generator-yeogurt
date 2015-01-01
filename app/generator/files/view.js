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
        if (this.useAuth) {
            // Account
            this.template('client/static-templates/jade/account/forgot.jade', viewRoot + 'templates/account/forgot.jade');
            this.template('client/static-templates/jade/account/login.jade', viewRoot + 'templates/account/login.jade');
            this.template('client/static-templates/jade/account/reset.jade', viewRoot + 'templates/account/reset.jade');
            this.template('client/static-templates/jade/account/signup.jade', viewRoot + 'templates/account/signup.jade');
            this.template('client/static-templates/jade/account/settings.jade', viewRoot + 'templates/account/settings.jade');

            // Partials
            this.template('client/static-templates/jade/partials/navbar.jade', viewRoot + 'templates/partials/navbar.jade');
            this.template('client/static-templates/jade/partials/messages.jade', viewRoot + 'templates/partials/messages.jade');

            // Layouts
            this.template('client/static-templates/jade/layouts/one-column.jade', viewRoot + 'templates/layouts/one-column.jade');
        }
    }
    else if (this.htmlOption === 'swig') {
        this.template('client/static-templates/swig/index.swig', viewRoot + 'templates/index.swig');
        this.template('client/static-templates/swig/layouts/base.swig', viewRoot + 'templates/layouts/base.swig');
        if (this.useServer) {
            this.template('client/static-templates/swig/errors/error.swig', viewRoot + 'templates/error.swig');
        }
        if (this.useAuth) {
            // Account
            this.template('client/static-templates/swig/account/forgot.swig', viewRoot + 'templates/account/forgot.swig');
            this.template('client/static-templates/swig/account/login.swig', viewRoot + 'templates/account/login.swig');
            this.template('client/static-templates/swig/account/reset.swig', viewRoot + 'templates/account/reset.swig');
            this.template('client/static-templates/swig/account/signup.swig', viewRoot + 'templates/account/signup.swig');
            this.template('client/static-templates/swig/account/settings.swig', viewRoot + 'templates/account/settings.swig');

            // Partials
            this.template('client/static-templates/swig/partials/navbar.swig', viewRoot + 'templates/partials/navbar.swig');
            this.template('client/static-templates/swig/partials/messages.swig', viewRoot + 'templates/partials/messages.swig');

            // Layouts
            this.template('client/static-templates/swig/layouts/one-column.swig', viewRoot + 'templates/layouts/one-column.swig');
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
