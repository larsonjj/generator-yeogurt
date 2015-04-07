/**
 * Generate files specific to the scripts folder
 */

'use strict';

var scriptFiles = function scriptFiles() {
  // client/scripts

  if (!this.jsFramework) {
    if (this.jsOption === 'requirejs') {
      this.template('client/noframework/requirejs/main.js', 'client/main.js');
    }

    if (this.jsOption === 'browserify') {
      this.template('client/noframework/browserify/main.js', 'client/main.js');
    }

    if (this.jsOption === 'none') {
      this.template('client/noframework/js/main.js', 'client/main.js');
    }
  }

  if (this.jsFramework === 'backbone') {
    if (this.jsOption === 'requirejs') {
      this.template('client/backbone/requirejs/main/main.js', 'client/main.js');
      this.template('client/backbone/requirejs/routes/routes.js', 'client/routes.js');
      this.template('client/backbone/requirejs/index/index.js', 'client/index/index.js');
    }

    if (this.jsOption === 'browserify') {
      this.template('client/backbone/browserify/main/main.js', 'client/main.js');
      this.template('client/backbone/browserify/routes/routes.js', 'client/routes.js');
      this.template('client/backbone/browserify/index/index.js', 'client/index/index.js');
    }

    if (this.jsOption === 'none') {
      this.template('client/backbone/js/main/main.js', 'client/main.js');
      this.template('client/backbone/js/routes/routes.js', 'client/routes.js');
      this.template('client/backbone/js/index/index.js', 'client/index/index.js');
    }

    if (this.jsTemplate === 'underscore') {
      this.template('client/backbone/templates/underscore/index.jst', 'client/index/index.jst');
    }
    else if (this.jsTemplate === 'handlebars') {
      this.template('client/backbone/templates/handlebars/index.hbs', 'client/index/index.hbs');
    }
    else if (this.jsTemplate === 'jade') {
      this.template('client/backbone/templates/jade/index.jade', 'client/index.jade');
    }

  }
  else if (this.jsFramework === 'react') {
    this.template('client/react/routes/routes.js', 'client/routes.js');

    this.template('client/react/main/main.js', 'client/main.js');
    this.template('client/react/main/main.actions.js', 'client/main.actions.js');
    this.template('client/react/main/main.constants.js', 'client/main.constants.js');
    this.template('client/react/main/main.store.js', 'client/main.store.js');
    this.template('client/react/main/main.dispatcher.js', 'client/main.dispatcher.js');

    // Stores
    this.template('client/react/lib/store/store.js', 'client/lib/store.js');

    if (this.useJsx) {
      this.template('client/react/index/jsx/index.jsx', 'client/index/index.jsx');

      // Modules
      this.template(
        'client/react/modules/link/jsx/link.jsx', 'client/modules/link/link.jsx'
      );

      // Layouts
      this.template(
        'client/react/layout/jsx/base.jsx', 'client/layout/base.jsx'
      );
    }
    else {
      this.template('client/react/index/js/index.js', 'client/index/index.js');

      // Modules
      this.template('client/react/modules/link/js/link.js', 'client/modules/link/link.js');

      // Layouts
      this.template(
        'client/react/layout/js/base.js', 'client/layout/base.js'
      );
    }
  }
  else if (this.jsFramework === 'angular') {
    this.template('client/angular/main/main.js', 'client/main.js');

    // Modules
    this.template('client/angular/index/index.html', 'client/index/index.html');
    this.template('client/angular/index/index.js', 'client/index/index.js');
    this.template('client/angular/index/index.controller.js', 'client/index/index.controller.js');
  }
};

module.exports = scriptFiles;
