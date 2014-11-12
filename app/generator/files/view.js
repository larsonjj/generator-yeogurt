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
            // Account
            this.template('client/templates/jade/account/forgot.jade', viewRoot + 'templates/account/forgot.jade');
            this.template('client/templates/jade/account/login.jade', viewRoot + 'templates/account/login.jade');
            this.template('client/templates/jade/account/profile.jade', viewRoot + 'templates/account/profile.jade');
            this.template('client/templates/jade/account/reset.jade', viewRoot + 'templates/account/reset.jade');
            this.template('client/templates/jade/account/signup.jade', viewRoot + 'templates/account/signup.jade');

            // Modules
            this.template('client/templates/jade/modules/navbar.jade', viewRoot + 'templates/modules/navbar.jade');
            this.template('client/templates/jade/modules/messages.jade', viewRoot + 'templates/modules/messages.jade');

            // Layouts
            this.template('client/templates/jade/layouts/one-column.jade', viewRoot + 'templates/layouts/one-column.jade');
        }
    }
    else if (this.htmlOption === 'swig') {
        this.mkdir(viewRoot + 'templates');
        this.mkdir(viewRoot + 'templates/layouts');
        this.template('client/templates/swig/index.swig', viewRoot + 'templates/index.swig');
        this.template('client/templates/swig/layouts/base.swig', viewRoot + 'templates/layouts/base.swig');
        // if (this.useAuth) {
        //     // Account
        //     this.template('client/templates/swig/account/forgot.swig', viewRoot + 'templates/account/forgot.swig');
        //     this.template('client/templates/swig/account/login.swig', viewRoot + 'templates/account/login.swig');
        //     this.template('client/templates/swig/account/profile.swig', viewRoot + 'templates/account/profile.swig');
        //     this.template('client/templates/swig/account/reset.swig', viewRoot + 'templates/account/reset.swig');
        //     this.template('client/templates/swig/account/signup.swig', viewRoot + 'templates/account/signup.swig');

        //     // Modules
        //     this.template('client/templates/swig/modules/navbar.swig', viewRoot + 'templates/modules/navbar.swig');
        //     this.template('client/templates/swig/modules/messages.swig', viewRoot + 'templates/modules/messages.swig');

        //     // Layouts
        //     this.template('client/templates/swig/layouts/one-column.swig', viewRoot + 'templates/layouts/one-column.swig');
        // }
    }

    if (this.singlePageApplication) {
        if (!this.useServer) {
            this.template('client/templates/html/index.html', 'client/index.html');
        }
    }
};

module.exports = viewFiles;
