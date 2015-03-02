/**
 * Generate files specific to unit testing
 */

'use strict';

var testingFiles = function testingFiles() {
  if (this.useTesting) {
    if (this.jsOption === 'requirejs') {
      this.copy('test/karma/requirejs/main.karma.js', 'client/app/main.karma.js');
    }
    this.template('test/karma/karma.conf.js', 'karma.conf.js');

    if (this.jsFramework === 'backbone') {
      if (this.jsOption === 'requirejs') {
        this.template('client/app/backbone/requirejs/routes/__tests__/routes.spec.js', 'client/app/__tests__/routes.spec.js');
        this.template('client/app/backbone/requirejs/index/__tests__/index.spec.js', 'client/app/index/__tests__/index.spec.js');
      }

      if (this.jsOption === 'browserify') {
        this.template('client/app/backbone/browserify/routes/__tests__/routes.spec.js', 'client/app/__tests__/routes.spec.js');
        this.template('client/app/backbone/browserify/index/__tests__/index.spec.js', 'client/app/index/__tests__/index.spec.js');
      }

      if (this.jsOption === 'none') {
        this.template('client/app/backbone/js/routes/__tests__/routes.spec.js', 'client/app/__tests__/routes.spec.js');
        this.template('client/app/backbone/js/index/__tests__/index.spec.js', 'client/app/index/__tests__/index.spec.js');
      }
    }
    else if (this.jsFramework === 'react') {
      this.template('test/karma/phantomjs-shims.js', 'client/app/vendor/phantomjs-shims.js');

      // Router
      this.template('client/app/react/routes/__tests__/routes.spec.js', 'client/app/__tests__/routes.spec.js');

      // Components
      this.template('client/app/react/index/__tests__/index.spec.js', 'client/app/index/__tests__/index.spec.js');
      this.template('client/app/react/layout/__tests__/base.spec.js', 'client/app/layout/__tests__/base.spec.js');

      this.template('client/app/react/main/__tests__/main.spec.js', 'client/app/__tests__/main.spec.js');

      this.template('client/app/react/modules/link/__tests__/link.spec.js', 'client/app/modules/__tests__/link.spec.js');

      // Stores
      this.template('client/app/react/lib/store/__tests__/store.spec.js', 'client/app/lib/__tests__/store.spec.js');

    }
    else if (this.jsFramework === 'angular') {
      this.template('client/app/angular/index/__tests__/index.spec.js', 'client/app/index/__tests__/index.spec.js');
    }
  }

  if (this.useE2e) {
    this.template('test/e2e/protractor.conf.js', 'protractor.conf.js');

    this.template('test/e2e/index/index.po.js', 'e2e/index/index.po.js');
    this.template('test/e2e/index/index.spec.js', 'e2e/index/index.spec.js');
  }

  if (this.useServerTesting) {
    this.template('server/app/index/__tests__/index.spec.js', 'server/app/index/__tests__/index.spec.js');
  }
};

module.exports = testingFiles;
