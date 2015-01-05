/**
 * Generate files specific to the scripts folder
 */

'use strict';

var scriptFiles = function scriptFiles() {
    // client/scripts

    if (!this.jsFramework) {
        if (this.jsOption === 'requirejs') {
            this.template('client/scripts/noframework/requirejs/main.js', 'client/scripts/main.js');
            this.template('client/scripts/noframework/requirejs/app.js', 'client/scripts/app.js');
        }

        if (this.jsOption === 'browserify') {
            this.template('client/scripts/noframework/browserify/main.js', 'client/scripts/main.js');
            this.template('client/scripts/noframework/browserify/app.js', 'client/scripts/app.js');
        }

        if (this.jsOption === 'none') {
            this.template('client/scripts/noframework/js/main.js', 'client/scripts/main.js');
        }
    }


    if (this.jsFramework === 'backbone') {
        if (this.jsOption === 'requirejs') {
            this.template('client/scripts/backbone/main/requirejs/main.js', 'client/scripts/main.js');
            this.template('client/scripts/backbone/main/requirejs/app.js', 'client/scripts/app.js');
            this.template('client/scripts/backbone/routes/requirejs/routes.js', 'client/scripts/routes.js');
            this.template('client/scripts/backbone/views/requirejs/index.js', 'client/scripts/views/index.js');

            if (this.useAuth) {
                // Views
                this.template('client/scripts/backbone/views/requirejs/account/forgot.js', 'client/scripts/views/account/forgot.js');
                this.template('client/scripts/backbone/views/requirejs/account/login.js', 'client/scripts/views/account/login.js');
                this.template('client/scripts/backbone/views/requirejs/account/reset.js', 'client/scripts/views/account/reset.js');
                this.template('client/scripts/backbone/views/requirejs/account/settings.js', 'client/scripts/views/account/settings.js');
                this.template('client/scripts/backbone/views/requirejs/account/signup.js', 'client/scripts/views/account/signup.js');

                this.template('client/scripts/backbone/views/requirejs/layouts/one-column.js', 'client/scripts/views/layouts/one-column.js');

                this.template('client/scripts/backbone/views/requirejs/modules/messages.js', 'client/scripts/views/modules/messages.js');
                this.template('client/scripts/backbone/views/requirejs/modules/navbar.js', 'client/scripts/views/modules/navbar.js');

                // Controllers
                this.template('client/scripts/backbone/controllers/requirejs/account.js', 'client/scripts/controllers/account.js');
                this.template('client/scripts/backbone/controllers/requirejs/index.js', 'client/scripts/controllers/index.js');

                // Models
                this.template('client/scripts/backbone/models/requirejs/user.js', 'client/scripts/models/user.js');
                this.template('client/scripts/backbone/models/requirejs/messages.js', 'client/scripts/models/messages.js');
            }
        }

        if (this.jsOption === 'browserify') {
            this.template('client/scripts/backbone/main/browserify/main.js', 'client/scripts/main.js');
            this.template('client/scripts/backbone/main/browserify/app.js', 'client/scripts/app.js');
            this.template('client/scripts/backbone/routes/browserify/routes.js', 'client/scripts/routes.js');
            this.template('client/scripts/backbone/views/browserify/index.js', 'client/scripts/views/index.js');

            if (this.useAuth) {
                // Views
                this.template('client/scripts/backbone/views/browserify/account/forgot.js', 'client/scripts/views/account/forgot.js');
                this.template('client/scripts/backbone/views/browserify/account/login.js', 'client/scripts/views/account/login.js');
                this.template('client/scripts/backbone/views/browserify/account/reset.js', 'client/scripts/views/account/reset.js');
                this.template('client/scripts/backbone/views/browserify/account/settings.js', 'client/scripts/views/account/settings.js');
                this.template('client/scripts/backbone/views/browserify/account/signup.js', 'client/scripts/views/account/signup.js');

                this.template('client/scripts/backbone/views/browserify/layouts/one-column.js', 'client/scripts/views/layouts/one-column.js');

                this.template('client/scripts/backbone/views/browserify/modules/messages.js', 'client/scripts/views/modules/messages.js');
                this.template('client/scripts/backbone/views/browserify/modules/navbar.js', 'client/scripts/views/modules/navbar.js');

                // Controllers
                this.template('client/scripts/backbone/controllers/browserify/account.js', 'client/scripts/controllers/account.js');
                this.template('client/scripts/backbone/controllers/browserify/index.js', 'client/scripts/controllers/index.js');

                // Models
                this.template('client/scripts/backbone/models/browserify/user.js', 'client/scripts/models/user.js');
                this.template('client/scripts/backbone/models/browserify/messages.js', 'client/scripts/models/messages.js');
            }
        }

        if (this.jsOption === 'none') {
            this.template('client/scripts/backbone/main/js/main.js', 'client/scripts/main.js');
            this.template('client/scripts/backbone/routes/js/routes.js', 'client/scripts/routes.js');
            this.template('client/scripts/backbone/views/js/index.js', 'client/scripts/views/index.js');

            if (this.useAuth) {
                // Views
                this.template('client/scripts/backbone/views/js/account/forgot.js', 'client/scripts/views/account/forgot.js');
                this.template('client/scripts/backbone/views/js/account/login.js', 'client/scripts/views/account/login.js');
                this.template('client/scripts/backbone/views/js/account/reset.js', 'client/scripts/views/account/reset.js');
                this.template('client/scripts/backbone/views/js/account/settings.js', 'client/scripts/views/account/settings.js');
                this.template('client/scripts/backbone/views/js/account/signup.js', 'client/scripts/views/account/signup.js');

                this.template('client/scripts/backbone/views/js/layouts/one-column.js', 'client/scripts/views/layouts/one-column.js');

                this.template('client/scripts/backbone/views/js/modules/messages.js', 'client/scripts/views/modules/messages.js');
                this.template('client/scripts/backbone/views/js/modules/navbar.js', 'client/scripts/views/modules/navbar.js');

                // Controllers
                this.template('client/scripts/backbone/controllers/js/account.js', 'client/scripts/controllers/account.js');
                this.template('client/scripts/backbone/controllers/js/index.js', 'client/scripts/controllers/index.js');

                // Models
                this.template('client/scripts/backbone/models/js/user.js', 'client/scripts/models/user.js');
                this.template('client/scripts/backbone/models/js/messages.js', 'client/scripts/models/messages.js');
            }
        }

        if (this.jsTemplate === 'underscore') {
            this.template('client/scripts/backbone/templates/underscore/index.jst', 'client/templates/index.jst');

            if (this.useAuth) {
                // Account
                this.template('client/scripts/backbone/templates/underscore/account/forgot.jst', 'client/templates/account/forgot.jst');
                this.template('client/scripts/backbone/templates/underscore/account/login.jst', 'client/templates/account/login.jst');
                this.template('client/scripts/backbone/templates/underscore/account/reset.jst', 'client/templates/account/reset.jst');
                this.template('client/scripts/backbone/templates/underscore/account/settings.jst', 'client/templates/account/settings.jst');
                this.template('client/scripts/backbone/templates/underscore/account/signup.jst', 'client/templates/account/signup.jst');

                // Layouts
                this.template('client/scripts/backbone/templates/underscore/layouts/one-column.jst', 'client/templates/layouts/one-column.jst');

                // Modules
                this.template('client/scripts/backbone/templates/underscore/modules/messages.jst', 'client/templates/modules/messages.jst');
                this.template('client/scripts/backbone/templates/underscore/modules/navbar.jst', 'client/templates/modules/navbar.jst');
            }
        }
        else if (this.jsTemplate === 'handlebars') {
            this.template('client/scripts/backbone/templates/handlebars/index.hbs', 'client/templates/index.hbs');

            if (this.useAuth) {
                // Account
                this.template('client/scripts/backbone/templates/handlebars/account/forgot.hbs', 'client/templates/account/forgot.hbs');
                this.template('client/scripts/backbone/templates/handlebars/account/login.hbs', 'client/templates/account/login.hbs');
                this.template('client/scripts/backbone/templates/handlebars/account/reset.hbs', 'client/templates/account/reset.hbs');
                this.template('client/scripts/backbone/templates/handlebars/account/settings.hbs', 'client/templates/account/settings.hbs');
                this.template('client/scripts/backbone/templates/handlebars/account/signup.hbs', 'client/templates/account/signup.hbs');

                // Layouts
                this.template('client/scripts/backbone/templates/handlebars/layouts/one-column.hbs', 'client/templates/layouts/one-column.hbs');

                // Modules
                this.template('client/scripts/backbone/templates/handlebars/modules/messages.hbs', 'client/templates/modules/messages.hbs');
                this.template('client/scripts/backbone/templates/handlebars/modules/navbar.hbs', 'client/templates/modules/navbar.hbs');
            }
        }
        else if (this.jsTemplate === 'jade') {
            this.template('client/scripts/backbone/templates/jade/index.jade', 'client/templates/index.jade');

            if (this.useAuth) {
                // Account
                this.template('client/scripts/backbone/templates/jade/account/forgot.jade', 'client/templates/account/forgot.jade');
                this.template('client/scripts/backbone/templates/jade/account/login.jade', 'client/templates/account/login.jade');
                this.template('client/scripts/backbone/templates/jade/account/reset.jade', 'client/templates/account/reset.jade');
                this.template('client/scripts/backbone/templates/jade/account/settings.jade', 'client/templates/account/settings.jade');
                this.template('client/scripts/backbone/templates/jade/account/signup.jade', 'client/templates/account/signup.jade');

                // Layouts
                this.template('client/scripts/backbone/templates/jade/layouts/one-column.jade', 'client/templates/layouts/one-column.jade');

                // Modules
                this.template('client/scripts/backbone/templates/jade/modules/messages.jade', 'client/templates/modules/messages.jade');
                this.template('client/scripts/backbone/templates/jade/modules/navbar.jade', 'client/templates/modules/navbar.jade');
            }
        }

    }
    else if (this.jsFramework === 'react') {
        this.template('client/scripts/react/routes/routes.js', 'client/scripts/routes.js');
        this.template('client/scripts/react/main/main.js', 'client/scripts/main.js');
        this.template('client/scripts/react/main/app.js', 'client/scripts/app.js');

        if (this.useAuth) {
            // Controllers
            this.template('client/scripts/react/controllers/account.js', 'client/scripts/controllers/account.js');
            this.template('client/scripts/react/controllers/index.js', 'client/scripts/controllers/index.js');
        }

        // Constants
        this.template('client/scripts/react/constants/action-types.js', 'client/scripts/constants/action-types.js');
        this.template('client/scripts/react/constants/defaults.js', 'client/scripts/constants/defaults.js');
        this.template('client/scripts/react/constants/payload-sources.js', 'client/scripts/constants/payload-sources.js');

        // Stores
        this.template('client/scripts/react/stores/default.js', 'client/scripts/stores/default.js');
        this.template('client/scripts/react/stores/page.js', 'client/scripts/stores/page.js');
        if (this.useAuth) {
            this.template('client/scripts/react/stores/messages.js', 'client/scripts/stores/messages.js');
            this.template('client/scripts/react/stores/user.js', 'client/scripts/stores/user.js');
        }

        if (this.useJsx) {
            this.template('client/scripts/react/components/jsx/index.jsx', 'client/scripts/components/index.jsx');

            // Modules
            this.template('client/scripts/react/components/jsx/modules/link.jsx', 'client/scripts/components/modules/link.jsx');
            if (this.useAuth) {
                this.template('client/scripts/react/components/jsx/modules/messages.jsx', 'client/scripts/components/modules/messages.jsx');
                this.template('client/scripts/react/components/jsx/modules/navbar.jsx', 'client/scripts/components/modules/navbar.jsx');
            }

            // Layouts
            this.template('client/scripts/react/components/jsx/layouts/one-column.jsx', 'client/scripts/components/layouts/one-column.jsx');

            if (this.useAuth) {
                // Account
                this.template('client/scripts/react/components/jsx/account/forgot.jsx', 'client/scripts/components/account/forgot.jsx');
                this.template('client/scripts/react/components/jsx/account/login.jsx', 'client/scripts/components/account/login.jsx');
                this.template('client/scripts/react/components/jsx/account/reset.jsx', 'client/scripts/components/account/reset.jsx');
                this.template('client/scripts/react/components/jsx/account/settings.jsx', 'client/scripts/components/account/settings.jsx');
                this.template('client/scripts/react/components/jsx/account/signup.jsx', 'client/scripts/components/account/signup.jsx');
            }
        }
        else {
            this.template('client/scripts/react/components/js/index.js', 'client/scripts/components/index.js');

            // Modules
            this.template('client/scripts/react/components/js/modules/link.js', 'client/scripts/components/modules/link.js');
            if (this.useAuth) {
                this.template('client/scripts/react/components/js/modules/messages.js', 'client/scripts/components/modules/messages.js');
                this.template('client/scripts/react/components/js/modules/navbar.js', 'client/scripts/components/modules/navbar.js');
            }

            // Layouts
            this.template('client/scripts/react/components/js/layouts/one-column.js', 'client/scripts/components/layouts/one-column.js');

            if (this.useAuth) {
                // Account
                this.template('client/scripts/react/components/js/account/forgot.js', 'client/scripts/components/account/forgot.js');
                this.template('client/scripts/react/components/js/account/login.js', 'client/scripts/components/account/login.js');
                this.template('client/scripts/react/components/js/account/reset.js', 'client/scripts/components/account/reset.js');
                this.template('client/scripts/react/components/js/account/settings.js', 'client/scripts/components/account/settings.js');
                this.template('client/scripts/react/components/js/account/signup.js', 'client/scripts/components/account/signup.js');
            }
        }
        if (this.useTesting) {
            this.template('test/helpers/phantomjs-shims.js', 'test/helpers/phantomjs-shims.js');
        }
    }
};

module.exports = scriptFiles;
