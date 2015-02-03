/**
 * Generate files specific to unit testing
 */

'use strict';

var testingFiles = function testingFiles() {
  if (this.useTesting) {
    if (this.jsOption === 'requirejs') {
      this.copy('test/karma/requirejs/main.test.js', 'client/app/main.test.js');
    }
    this.template('test/karma/karma.conf.js', 'karma.conf.js');

    if (this.jsFramework === 'backbone') {
      if (this.jsOption === 'requirejs') {
        this.template('client/app/backbone/requirejs/routes/routes.spec.js', 'client/app/routes.spec.js');
        this.template('client/app/backbone/requirejs/index/index.spec.js', 'client/app/index/index.spec.js');
      }

      if (this.jsOption === 'browserify') {
        this.template('client/app/backbone/browserify/routes/routes.spec.js', 'client/app/routes.spec.js');
        this.template('client/app/backbone/browserify/index/index.spec.js', 'client/app/index/index.spec.js');
      }

      if (this.jsOption === 'none') {
        this.template('client/app/backbone/js/routes/routes.spec.js', 'client/app/routes.spec.js');
        this.template('client/app/backbone/js/index/index.spec.js', 'client/app/index/index.spec.js');
      }
    }
    else if (this.jsFramework === 'react') {
      this.template('test/karma/phantomjs-shims.js', 'client/lib/test/phantomjs-shims.js');

      // Router
      this.template('client/app/react/routes/routes.spec.js', 'client/app/routes.spec.js');

      // Components
      this.template('client/app/react/index/index.spec.js', 'client/app/index/index.spec.js');

      // Dispatchers
      this.template(
        'client/app/react/lib/core/dispatcher.spec.js',
        'client/lib/core/dispatcher.spec.js'
      );

      // Stores
      this.template('client/app/react/modules/page/page.spec.js', 'client/modules/page/page.spec.js');
      this.template('client/app/react/lib/core/store.spec.js', 'client/lib/core/store.spec.js');

      // Actions
      this.template(
        'client/app/react/modules/route/route.spec.js',
        'client/modules/route/route.spec.js'
      );
    }
    else if (this.jsFramework === 'angular') {
      this.template('client/app/angular/index/index.spec.js', 'client/app/index/index.spec.js');
    }
    else {
      this.template('client/app/noframework/main.spec.js', 'client/app/main.spec.js');
    }
  }

  if (this.useE2e) {
    this.template('test/e2e/protractor.conf.js', 'protractor.conf.js');

    this.template('test/e2e/index/index.po.js', 'e2e/index/index.po.js');
    this.template('test/e2e/index/index.spec.js', 'e2e/index/index.spec.js');
  }

  if (this.useServerTesting) {
    this.template('server/app/index/index.spec.js', 'server/app/index/index.spec.js');
  }
};

module.exports = testingFiles;
