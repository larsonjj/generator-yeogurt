/**
 * Generate files specific to the scripts folder
 */

'use strict';

var scriptFiles = function scriptFiles() {
  // client/scripts

  if (!this.jsFramework) {
    if (this.jsOption === 'requirejs') {
      this.template('client/app/scripts/noframework/requirejs/main.js', 'client/app/main.js');
    }

    if (this.jsOption === 'browserify') {
      this.template('client/app/scripts/noframework/browserify/main.js', 'client/app/main.js');
    }

    if (this.jsOption === 'none') {
      this.template('client/app/scripts/noframework/js/main.js', 'client/app/main.js');
    }
  }

  if (this.jsFramework === 'backbone') {
    if (this.jsOption === 'requirejs') {
      this.template('client/app/scripts/backbone/requirejs/main/main.js', 'client/app/main.js');
      this.template('client/app/scripts/backbone/requirejs/routes/routes.js', 'client/app/routes.js');
      this.template('client/app/scripts/backbone/requirejs/views/index.js', 'client/app/index/index.js');
    }

    if (this.jsOption === 'browserify') {
      this.template('client/app/scripts/backbone/browserify/main/main.js', 'client/app/main.js');
      this.template('client/app/scripts/backbone/browserify/routes/routes.js', 'client/app/routes.js');
      this.template('client/app/scripts/backbone/browserify/views/index.js', 'client/app/index/index.js');
    }

    if (this.jsOption === 'none') {
      this.template('client/app/scripts/backbone/js/main/main.js', 'client/app/main.js');
      this.template('client/app/scripts/backbone/js/routes/routes.js', 'client/app/routes.js');
      this.template('client/app/scripts/backbone/js/views/index.js', 'client/app/index/index.js');
    }

    if (this.jsTemplate === 'underscore') {
      this.template('client/app/scripts/backbone/templates/underscore/index.jst', 'client/app/index/index.jst');
    }
    else if (this.jsTemplate === 'handlebars') {
      this.template('client/app/scripts/backbone/templates/handlebars/index.hbs', 'client/app/index/index.hbs');
    }
    else if (this.jsTemplate === 'jade') {
      this.template('client/app/scripts/backbone/templates/jade/index.jade', 'client/app/index/index.jade');
    }

  }
  else if (this.jsFramework === 'react') {
    this.template('client/app/scripts/react/routes/routes.js', 'client/app/routes.js');
    this.template('client/app/scripts/react/main/main.js', 'client/app/main.js');

    // Constants
    this.template('client/app/scripts/react/constants/page.js', 'client/modules/page/page.constant.js');
    this.template('client/app/scripts/react/constants/route.js', 'client/modules/route/route.constant.js');
    this.template('client/app/scripts/react/constants/defaults.js', 'client/common/scripts/constants/default.js');
    this.template('client/app/scripts/react/constants/payload-sources.js', 'client/common/scripts/constants/payload-sources.js');

    // Stores
    this.template('client/app/scripts/react/stores/default.js', 'client/common/core/store.js');
    this.template('client/app/scripts/react/stores/page.js', 'client/app/modules/page/page.store.js');

    // Distpatcher
    this.template('client/app/scripts/react/dispatchers/default.js', 'client/app/common/scripts/core/dispatcher.js');

    // Actions
    this.template('client/app/scripts/react/actions/routes.js', 'client/app/modules/route/route.action.js');
    this.template('client/app/scripts/react/actions/page.js', 'client/app/modules/page/page.action.js');

    if (this.useJsx) {
      this.template('client/app/scripts/react/components/jsx/index.jsx', 'client/app/index/index.jsx');

      // Modules
      if (this.useServer) {
        this.template(
          'client/app/scripts/react/components/jsx/modules/link.jsx', 'client/app/modules/link/link.jsx'
        );
      }

      // Layouts
      this.template(
        'client/app/scripts/react/components/jsx/layouts/default.jsx', 'client/app/layout/base.jsx'
      );
    }
    else {
      this.template('client/app/scripts/react/components/js/index.js', 'client/app/index/index.js');

      // Modules
      this.template('client/app/scripts/react/components/js/modules/link.js', 'client/app/modules/link/link.js');

      // Layouts
      this.template(
        'client/app/scripts/react/components/js/layouts/default.js', 'client/app/layout/base.js'
      );
    }
  }
  else if (this.jsFramework === 'angular') {
    this.template('client/app/scripts/angular/main/main.js', 'client/app/main.js');

    // Modules
    this.template('client/app/scripts/angular/app/index/index.html', 'client/app/index/index.html');
    this.template('client/app/scripts/angular/app/index/index.js', 'client/app/index/index.js');
    this.template('client/app/scripts/angular/app/index/index.controller.js', 'client/app/index/index.controller.js');
  }
};

module.exports = scriptFiles;
