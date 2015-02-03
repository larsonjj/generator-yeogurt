/**
 * Generate files specific to the scripts folder
 */

'use strict';

var scriptFiles = function scriptFiles() {
  // client/scripts

  if (!this.jsFramework) {
    if (this.jsOption === 'requirejs') {
      this.template('client/app/noframework/requirejs/main.js', 'client/app/main.js');
    }

    if (this.jsOption === 'browserify') {
      this.template('client/app/noframework/browserify/main.js', 'client/app/main.js');
    }

    if (this.jsOption === 'none') {
      this.template('client/app/noframework/js/main.js', 'client/app/main.js');
    }
  }

  if (this.jsFramework === 'backbone') {
    if (this.jsOption === 'requirejs') {
      this.template('client/app/backbone/requirejs/main/main.js', 'client/app/main.js');
      this.template('client/app/backbone/requirejs/routes/routes.js', 'client/app/routes.js');
      this.template('client/app/backbone/requirejs/index/index.js', 'client/app/index/index.js');
    }

    if (this.jsOption === 'browserify') {
      this.template('client/app/backbone/browserify/main/main.js', 'client/app/main.js');
      this.template('client/app/backbone/browserify/routes/routes.js', 'client/app/routes.js');
      this.template('client/app/backbone/browserify/index/index.js', 'client/app/index/index.js');
    }

    if (this.jsOption === 'none') {
      this.template('client/app/backbone/js/main/main.js', 'client/app/main.js');
      this.template('client/app/backbone/js/routes/routes.js', 'client/app/routes.js');
      this.template('client/app/backbone/js/index/index.js', 'client/app/index/index.js');
    }

    if (this.jsTemplate === 'underscore') {
      this.template('client/app/backbone/templates/underscore/index.jst', 'client/app/index/index.jst');
    }
    else if (this.jsTemplate === 'handlebars') {
      this.template('client/app/backbone/templates/handlebars/index.hbs', 'client/app/index/index.hbs');
    }
    else if (this.jsTemplate === 'jade') {
      this.template('client/app/backbone/templates/jade/index.jade', 'client/app/index/index.jade');
    }

  }
  else if (this.jsFramework === 'react') {
    this.template('client/app/react/routes/routes.js', 'client/app/routes.js');
    this.template('client/app/react/main/main.js', 'client/app/main.js');

    // Constants
    this.template('client/app/react/modules/page/page.constant.js', 'client/modules/page/page.constant.js');
    this.template('client/app/react/modules/route/route.constant.js', 'client/modules/route/route.constant.js');
    this.template(
      'client/app/react/common/constants/default.js',
      'client/common/constants/default.js'
    );
    this.template(
      'client/app/react/common/constants/payload-sources.js',
      'client/common/constants/payload-sources.js'
    );

    // Stores
    this.template('client/app/react/common/core/store.js', 'client/common/core/store.js');
    this.template('client/app/react/modules/page/page.store.js', 'client/modules/page/page.store.js');

    // Distpatcher
    this.template('client/app/react/common/core/dispatcher.js', 'client/common/core/dispatcher.js');

    // Actions
    this.template('client/app/react/modules/route/route.action.js', 'client/modules/route/route.action.js');
    this.template('client/app/react/modules/page/page.action.js', 'client/modules/page/page.action.js');

    if (this.useJsx) {
      this.template('client/app/react/index/jsx/index.jsx', 'client/app/index/index.jsx');

      // Modules
      if (this.useServer) {
        this.template(
          'client/app/react/modules/link/jsx/link.jsx', 'client/modules/link/link.jsx'
        );
      }

      // Layouts
      this.template(
        'client/app/react/layout/jsx/base.jsx', 'client/app/layout/base.jsx'
      );
    }
    else {
      this.template('client/app/react/index/js/index.js', 'client/app/index/index.js');

      // Modules
      this.template('client/app/react/modules/link/js/link.js', 'client/modules/link/link.js');

      // Layouts
      this.template(
        'client/app/react/layout/js/base.js', 'client/app/layout/base.js'
      );
    }
  }
  else if (this.jsFramework === 'angular') {
    this.template('client/app/angular/main/main.js', 'client/app/main.js');

    // Modules
    this.template('client/app/angular/index/index.html', 'client/app/index/index.html');
    this.template('client/app/angular/index/index.js', 'client/app/index/index.js');
    this.template('client/app/angular/index/index.controller.js', 'client/app/index/index.controller.js');
  }
};

module.exports = scriptFiles;
