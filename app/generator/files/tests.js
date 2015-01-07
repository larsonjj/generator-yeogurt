/**
 * Generate files specific to unit testing
 */

'use strict';

var testingFiles = function testingFiles() {
    if (this.useTesting) {
        if (this.jsOption === 'requirejs') {
            this.copy('test/test-main.js', 'test/test-main.js');
        }
        this.template('karma.conf.js', 'karma.conf.js');

        if (this.jsFramework === 'backbone') {
            if (this.jsOption === 'requirejs') {
                this.template('test/spec/backbone/requirejs/app.spec.js', 'test/spec/app.spec.js');
                this.template('test/spec/backbone/requirejs/routes.spec.js', 'test/spec/routes.spec.js');
                this.template('test/spec/backbone/requirejs/views/index.spec.js', 'test/spec/views/index.spec.js');

                if (this.useAuth) {
                    // Views
                    this.template('test/spec/backbone/requirejs/views/account/forgot.spec.js', 'test/spec/views/account/forgot.spec.js');
                    this.template('test/spec/backbone/requirejs/views/account/login.spec.js', 'test/spec/views/account/login.spec.js');
                    this.template('test/spec/backbone/requirejs/views/account/reset.spec.js', 'test/spec/views/account/reset.spec.js');
                    this.template('test/spec/backbone/requirejs/views/account/settings.spec.js', 'test/spec/views/account/settings.spec.js');
                    this.template('test/spec/backbone/requirejs/views/account/signup.spec.js', 'test/spec/views/account/signup.spec.js');

                    this.template('test/spec/backbone/requirejs/views/layouts/default.spec.js', 'test/spec/views/layouts/default.spec.js');

                    this.template('test/spec/backbone/requirejs/views/modules/messages.spec.js', 'test/spec/views/modules/messages.spec.js');
                    this.template('test/spec/backbone/requirejs/views/modules/navbar.spec.js', 'test/spec/views/modules/navbar.spec.js');

                    // Models
                    this.template('test/spec/backbone/requirejs/models/user.spec.js', 'test/spec/models/user.spec.js');
                    this.template('test/spec/backbone/requirejs/models/messages.spec.js', 'test/spec/models/messages.spec.js');
                }
            }

            if (this.jsOption === 'browserify') {
                this.template('test/spec/backbone/browserify/app.spec.js', 'test/spec/app.spec.js');
                this.template('test/spec/backbone/browserify/routes.spec.js', 'test/spec/routes.spec.js');
                this.template('test/spec/backbone/browserify/views/index.spec.js', 'test/spec/views/index.spec.js');

                if (this.useAuth) {
                    // Views
                    this.template('test/spec/backbone/browserify/views/account/forgot.spec.js', 'test/spec/views/account/forgot.spec.js');
                    this.template('test/spec/backbone/browserify/views/account/login.spec.js', 'test/spec/views/account/login.spec.js');
                    this.template('test/spec/backbone/browserify/views/account/reset.spec.js', 'test/spec/views/account/reset.spec.js');
                    this.template('test/spec/backbone/browserify/views/account/settings.spec.js', 'test/spec/views/account/settings.spec.js');
                    this.template('test/spec/backbone/browserify/views/account/signup.spec.js', 'test/spec/views/account/signup.spec.js');

                    this.template('test/spec/backbone/browserify/views/layouts/default.spec.js', 'test/spec/views/layouts/default.spec.js');

                    this.template('test/spec/backbone/browserify/views/modules/messages.spec.js', 'test/spec/views/modules/messages.spec.js');
                    this.template('test/spec/backbone/browserify/views/modules/navbar.spec.js', 'test/spec/views/modules/navbar.spec.js');

                    // Models
                    this.template('test/spec/backbone/browserify/models/user.spec.js', 'test/spec/models/user.spec.js');
                    this.template('test/spec/backbone/browserify/models/messages.spec.js', 'test/spec/models/messages.spec.js');
                }
            }

            if (this.jsOption === 'none') {
                this.template('test/spec/backbone/js/app.spec.js', 'test/spec/app.spec.js');
                this.template('test/spec/backbone/js/routes.spec.js', 'test/spec/routes.spec.js');
                this.template('test/spec/backbone/js/views/index.spec.js', 'test/spec/views/index.spec.js');

                if (this.useAuth) {
                    // Views
                    this.template('test/spec/backbone/js/views/account/forgot.spec.js', 'test/spec/views/account/forgot.spec.js');
                    this.template('test/spec/backbone/js/views/account/login.spec.js', 'test/spec/views/account/login.spec.js');
                    this.template('test/spec/backbone/js/views/account/reset.spec.js', 'test/spec/views/account/reset.spec.js');
                    this.template('test/spec/backbone/js/views/account/settings.spec.js', 'test/spec/views/account/settings.spec.js');
                    this.template('test/spec/backbone/js/views/account/signup.spec.js', 'test/spec/views/account/signup.spec.js');

                    this.template('test/spec/backbone/js/views/layouts/default.spec.js', 'test/spec/views/layouts/default.spec.js');

                    this.template('test/spec/backbone/js/views/modules/messages.spec.js', 'test/spec/views/modules/messages.spec.js');
                    this.template('test/spec/backbone/js/views/modules/navbar.spec.js', 'test/spec/views/modules/navbar.spec.js');

                    // Models
                    this.template('test/spec/backbone/js/models/user.spec.js', 'test/spec/models/user.spec.js');
                    this.template('test/spec/backbone/js/models/messages.spec.js', 'test/spec/models/messages.spec.js');
                }
            }
        }
        else {
            this.template('test/spec/app.spec.js', 'test/spec/app.spec.js');
        }
    }
};

module.exports = testingFiles;
