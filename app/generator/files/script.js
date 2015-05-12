/**
 * Generate files specific to the scripts folder
 */

'use strict';

var scriptFiles = function scriptFiles() {
  // src/scripts

  if (!this.jsFramework) {
    if (this.jsOption === 'requirejs') {
      this.template('src/noframework/requirejs/main.js', 'src/_scripts/main.js');
    }

    if (this.jsOption === 'browserify') {
      this.template('src/noframework/browserify/main.js', 'src/_scripts/main.js');
    }

    if (this.jsOption === 'none') {
      this.template('src/noframework/js/main.js', 'src/scripts/main.js');
    }
  }

  if (this.jsFramework === 'backbone') {

    if (this.jsOption === 'browserify') {
      this.template('src/backbone/browserify/main/main.js', 'src/_scripts/main.js');
      this.template('src/backbone/browserify/app/app.js', 'src/_scripts/app.js');
      this.template('src/backbone/browserify/templates/templates.js', 'src/_scripts/templates.js');
      this.template('src/backbone/browserify/routes/routes.js', 'src/_scripts/routes.js');
      this.template('src/backbone/browserify/index/index.js', 'src/_screens/index/index.js');
      this.template('src/backbone/browserify/layouts/base.js', 'src/_layouts/base.js');
    }

    if (this.jsTemplate === 'underscore') {
      this.template('src/backbone/templates/underscore/index.jst', 'src/_screens/index/index.jst');
      this.template('src/backbone/templates/underscore/base.jst', 'src/_layouts/base.jst');
    }
    else if (this.jsTemplate === 'handlebars') {
      this.template('src/backbone/templates/handlebars/index.hbs', 'src/_screens/index/index.hbs');
      this.template('src/backbone/templates/handlebars/base.hbs', 'src/_layouts/base.hbs');
    }

  }
  else if (this.jsFramework === 'react') {
    this.template('src/react/routes/routes.jsx', 'src/_scripts/routes.jsx');

    this.template('src/react/main/main.jsx', 'src/_scripts/main.jsx');
    this.template('src/react/actions/main.actions.js', 'src/_scripts/actions/main.actions.js');
    this.template('src/react/stores/main.store.js', 'src/_scripts/stores/main.store.js');

    this.template('src/react/index/jsx/index.jsx', 'src/_screens/index/index.jsx');

    // Layouts
    this.template(
      'src/react/layouts/jsx/base.jsx', 'src/_layouts/base.jsx'
    );
  }
  else if (this.jsFramework === 'angular') {
    this.template('src/angular/main/main.js', 'src/_scripts/main.js');

    // Modules
    this.template('src/angular/index/index.html', 'src/_screens/index/index.html');
    this.template('src/angular/index/index.js', 'src/_screens/index/index.js');
    this.template('src/angular/index/index.controller.js', 'src/_screens/index/index.controller.js');
  }
};

module.exports = scriptFiles;
