/**
 * Generate files specific to the scripts folder
 */

'use strict';

var scriptFiles = function scriptFiles() {
  // client/scripts

  if (!this.jsFramework) {
    if (this.jsOption === 'requirejs') {
      this.template('client/scripts/noframework/requirejs/main.js', 'client/scripts/main.js');
    }

    if (this.jsOption === 'browserify') {
      this.template('client/scripts/noframework/browserify/main.js', 'client/scripts/main.js');
    }

    if (this.jsOption === 'none') {
      this.template('client/scripts/noframework/js/main.js', 'client/scripts/main.js');
    }
  }


  if (this.jsFramework === 'backbone') {
    if (this.jsOption === 'requirejs') {
      this.template('client/scripts/backbone/requirejs/main/main.js', 'client/scripts/main.js');
      this.template('client/scripts/backbone/requirejs/routes/routes.js', 'client/scripts/routes.js');
      this.template('client/scripts/backbone/requirejs/views/index.js', 'client/scripts/views/index.js');
    }

    if (this.jsOption === 'browserify') {
      this.template('client/scripts/backbone/browserify/main/main.js', 'client/scripts/main.js');
      this.template('client/scripts/backbone/browserify/routes/routes.js', 'client/scripts/routes.js');
      this.template('client/scripts/backbone/browserify/views/index.js', 'client/scripts/views/index.js');
    }

    if (this.jsOption === 'none') {
      this.template('client/scripts/backbone/js/main/main.js', 'client/scripts/main.js');
      this.template('client/scripts/backbone/js/routes/routes.js', 'client/scripts/routes.js');
      this.template('client/scripts/backbone/js/views/index.js', 'client/scripts/views/index.js');
    }

    if (this.jsTemplate === 'underscore') {
      this.template('client/scripts/backbone/templates/underscore/index.jst', 'client/templates/index.jst');
    }
    else if (this.jsTemplate === 'handlebars') {
      this.template('client/scripts/backbone/templates/handlebars/index.hbs', 'client/templates/index.hbs');
    }
    else if (this.jsTemplate === 'jade') {
      this.template('client/scripts/backbone/templates/jade/index.jade', 'client/templates/index.jade');
    }

  }
  else if (this.jsFramework === 'react') {
    this.template('client/scripts/react/routes/routes.js', 'client/scripts/routes.js');
    this.template('client/scripts/react/main/main.js', 'client/scripts/main.js');

    // Constants
    this.template('client/scripts/react/constants/page.js', 'client/scripts/constants/page.js');
    this.template('client/scripts/react/constants/routes.js', 'client/scripts/constants/routes.js');
    this.template('client/scripts/react/constants/defaults.js', 'client/scripts/constants/defaults.js');
    this.template('client/scripts/react/constants/payload-sources.js', 'client/scripts/constants/payload-sources.js');

    // Stores
    this.template('client/scripts/react/stores/default.js', 'client/scripts/stores/default.js');
    this.template('client/scripts/react/stores/page.js', 'client/scripts/stores/page.js');

    // Distpatcher
    this.template('client/scripts/react/dispatchers/default.js', 'client/scripts/dispatchers/default.js');

    // Actions
    this.template('client/scripts/react/actions/routes.js', 'client/scripts/actions/routes.js');
    this.template('client/scripts/react/actions/page.js', 'client/scripts/actions/page.js');

    if (this.useJsx) {
      this.template('client/scripts/react/components/jsx/index.jsx', 'client/scripts/components/index.jsx');

      // Modules
      if (this.useServer) {
        this.template(
          'client/scripts/react/components/jsx/modules/link.jsx', 'client/scripts/components/modules/link.jsx'
        );
      }

      // Layouts
      this.template(
        'client/scripts/react/components/jsx/layouts/default.jsx', 'client/scripts/components/layouts/default.jsx'
      );
    }
    else {
      this.template('client/scripts/react/components/js/index.js', 'client/scripts/components/index.js');

      // Modules
      this.template('client/scripts/react/components/js/modules/link.js', 'client/scripts/components/modules/link.js');

      // Layouts
      this.template(
        'client/scripts/react/components/js/layouts/default.js', 'client/scripts/components/layouts/default.js'
      );
    }
    if (this.useTesting) {
      this.template('test/helpers/phantomjs-shims.js', 'test/helpers/phantomjs-shims.js');
    }
  }
  else if (this.jsFramework === 'angular') {
    this.template('client/scripts/angular/main/main.js', 'client/app/main.js');

    // Modules
    this.template('client/scripts/angular/app/home/home.html', 'client/app/home/home.html');
    this.template('client/scripts/angular/app/home/home.js', 'client/app/home/home.js');
    this.template('client/scripts/angular/app/home/home.controller.js', 'client/app/home/home.controller.js');
  }
};

module.exports = scriptFiles;
