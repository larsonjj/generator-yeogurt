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
    else if (this.jsFramework === 'react') {
      // Router
      this.template('test/spec/react/routes.spec.js', 'test/spec/routes.spec.js');

      // Components
      this.template('test/spec/react/components/index.spec.js', 'test/spec/components/index.spec.js');

      // Dispatchers
      this.template('test/spec/react/dispatchers/default.spec.js', 'test/spec/dispatchers/default.spec.js');

      // Stores
      this.template('test/spec/react/stores/page.spec.js', 'test/spec/stores/page.spec.js');
      this.template('test/spec/react/stores/default.spec.js', 'test/spec/stores/default.spec.js');

      // Actions
      this.template('test/spec/react/actions/page.spec.js', 'test/spec/actions/page.spec.js');
      this.template('test/spec/react/actions/routes.spec.js', 'test/spec/actions/routes.spec.js');

      if (this.useAuth) {
        // Components
        this.template('test/spec/react/components/account/forgot.spec.js', 'test/spec/components/account/forgot.spec.js');
        this.template('test/spec/react/components/account/login.spec.js', 'test/spec/components/account/login.spec.js');
        this.template('test/spec/react/components/account/reset.spec.js', 'test/spec/components/account/reset.spec.js');
        this.template('test/spec/react/components/account/settings.spec.js', 'test/spec/components/account/settings.spec.js');
        this.template('test/spec/react/components/account/signup.spec.js', 'test/spec/components/account/signup.spec.js');

        this.template('test/spec/react/components/layouts/default.spec.js', 'test/spec/components/layouts/default.spec.js');

        this.template('test/spec/react/components/modules/messages.spec.js', 'test/spec/components/modules/messages.spec.js');
        this.template('test/spec/react/components/modules/navbar.spec.js', 'test/spec/components/modules/navbar.spec.js');

        // Stores
        this.template('test/spec/react/stores/user.spec.js', 'test/spec/stores/user.spec.js');
        this.template('test/spec/react/stores/messages.spec.js', 'test/spec/stores/messages.spec.js');

        // Actions
        this.template('test/spec/react/actions/user.spec.js', 'test/spec/actions/user.spec.js');
        this.template('test/spec/react/actions/messages.spec.js', 'test/spec/actions/messages.spec.js');
      }
    }
    else if (this.jsFramework === 'angular') {
      this.template('client/scripts/angular/app/index/index.spec.js', 'client/app/index/index.spec.js');
    }
    else {
      this.template('test/spec/main.spec.js', 'test/spec/main.spec.js');
    }
  }
};

module.exports = testingFiles;
