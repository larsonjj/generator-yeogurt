/**
 * Generate files specific to templates/templates
 */

'use strict';

var viewFiles = function viewFiles() {
    var viewRoot = this.useServer ? 'server/' : 'client/';

    if (this.htmlOption === 'jade') {
        this.mkdir(viewRoot + 'templates');
        this.mkdir(viewRoot + 'templates/layouts');
        this.template('client/templates/jade/index.jade', viewRoot + 'templates/index.jade');
        this.template('client/templates/jade/layouts/base.jade', viewRoot + 'templates/layouts/base.jade');
        if (this.useAuth) {
            if (this.cssFramework === 'bootstrap') {
                // Account
                this.template('client/templates/jade/account/bootstrap/forgot.jade', viewRoot + 'templates/account/forgot.jade');
                this.template('client/templates/jade/account/bootstrap/login.jade', viewRoot + 'templates/account/login.jade');
                this.template('client/templates/jade/account/bootstrap/profile.jade', viewRoot + 'templates/account/profile.jade');
                this.template('client/templates/jade/account/bootstrap/reset.jade', viewRoot + 'templates/account/reset.jade');
                this.template('client/templates/jade/account/bootstrap/signup.jade', viewRoot + 'templates/account/signup.jade');

                // Modules
                this.template('client/templates/jade/modules/bootstrap/navbar.jade', viewRoot + 'templates/modules/navbar.jade');
                this.template('client/templates/jade/modules/bootstrap/messages.jade', viewRoot + 'templates/modules/messages.jade');

                // Layouts
                this.template('client/templates/jade/layouts/bootstrap/one-column.jade', viewRoot + 'templates/layouts/one-column.jade');
            }
            else if (this.cssFramework === 'foundation') {
                // Account
                this.template('client/templates/jade/account/foundation/forgot.jade', viewRoot + 'templates/account/forgot.jade');
                this.template('client/templates/jade/account/foundation/login.jade', viewRoot + 'templates/account/login.jade');
                this.template('client/templates/jade/account/foundation/profile.jade', viewRoot + 'templates/account/profile.jade');
                this.template('client/templates/jade/account/foundation/reset.jade', viewRoot + 'templates/account/reset.jade');
                this.template('client/templates/jade/account/foundation/signup.jade', viewRoot + 'templates/account/signup.jade');

                // Modules
                this.template('client/templates/jade/modules/foundation/navbar.jade', viewRoot + 'templates/modules/navbar.jade');
                this.template('client/templates/jade/modules/foundation/messages.jade', viewRoot + 'templates/modules/messages.jade');

                // Layouts
                this.template('client/templates/jade/layouts/foundation/one-column.jade', viewRoot + 'templates/layouts/one-column.jade');
            }
            else if (this.cssFramework === 'none') {
                // Account
                this.template('client/templates/jade/account/css/forgot.jade', viewRoot + 'templates/account/forgot.jade');
                this.template('client/templates/jade/account/css/login.jade', viewRoot + 'templates/account/login.jade');
                this.template('client/templates/jade/account/css/profile.jade', viewRoot + 'templates/account/profile.jade');
                this.template('client/templates/jade/account/css/reset.jade', viewRoot + 'templates/account/reset.jade');
                this.template('client/templates/jade/account/css/signup.jade', viewRoot + 'templates/account/signup.jade');

                // Modules
                this.template('client/templates/jade/modules/css/navbar.jade', viewRoot + 'templates/modules/navbar.jade');
                this.template('client/templates/jade/modules/css/messages.jade', viewRoot + 'templates/modules/messages.jade');

                // Layouts
                this.template('client/templates/jade/layouts/css/one-column.jade', viewRoot + 'templates/layouts/one-column.jade');
            }
        }
    }
    else if (this.htmlOption === 'swig') {
        this.mkdir(viewRoot + 'templates');
        this.mkdir(viewRoot + 'templates/layouts');
        this.template('client/templates/swig/index.swig', viewRoot + 'templates/index.swig');
        this.template('client/templates/swig/layouts/base.swig', viewRoot + 'templates/layouts/base.swig');
    }

    if (this.singlePageApplication) {
        if (!this.useServer) {
            this.template('client/templates/html/index.html', 'client/index.html');
        }
    }
};

module.exports = viewFiles;
