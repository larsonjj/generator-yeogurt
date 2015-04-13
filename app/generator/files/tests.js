/**
 * Generate files specific to unit testing
 */

'use strict';

var testingFiles = function testingFiles() {
  if (this.useTesting) {
    if (this.jsOption === 'requirejs') {
      this.copy('test/karma/requirejs/main.karma.js', 'src/main.karma.js');
    }
    this.template('test/karma/karma.conf.js', 'karma.conf.js');

    if (this.jsFramework === 'backbone') {
      if (this.jsOption === 'requirejs') {
        this.template(
          'src/backbone/requirejs/routes/__tests__/routes.spec.js', 'src/__tests__/routes.spec.js'
        );
        this.template(
          'src/backbone/requirejs/index/__tests__/index.spec.js', 'src/index/__tests__/index.spec.js'
        );
      }

      if (this.jsOption === 'browserify') {
        this.template(
          'src/backbone/browserify/routes/__tests__/routes.spec.js', 'src/__tests__/routes.spec.js'
        );
        this.template(
          'src/backbone/browserify/index/__tests__/index.spec.js', 'src/index/__tests__/index.spec.js'
        );
      }

      if (this.jsOption === 'none') {
        this.template('src/backbone/js/routes/__tests__/routes.spec.js', 'src/__tests__/routes.spec.js');
        this.template(
          'src/backbone/js/index/__tests__/index.spec.js', 'src/index/__tests__/index.spec.js'
        );
      }
    }
    else if (this.jsFramework === 'react') {
      this.template('test/karma/phantomjs-shims.js', 'src/vendor/phantomjs-shims.js');

      // Router
      this.template('src/react/routes/__tests__/routes.spec.js', 'src/__tests__/routes.spec.js');

      // Components
      this.template('src/react/index/__tests__/index.spec.js', 'src/index/__tests__/index.spec.js');
      this.template('src/react/layout/__tests__/base.spec.js', 'src/layout/__tests__/base.spec.js');

      this.template('src/react/main/__tests__/main.spec.js', 'src/__tests__/main.spec.js');

      this.template(
        'src/react/modules/link/__tests__/link.spec.js', 'src/modules/__tests__/link.spec.js'
      );

      // Stores
      this.template('src/react/lib/store/__tests__/store.spec.js', 'src/lib/__tests__/store.spec.js');

    }
    else if (this.jsFramework === 'angular') {
      this.template('src/angular/index/__tests__/index.spec.js', 'src/index/__tests__/index.spec.js');
    }
  }

  if (this.useE2e) {
    this.template('test/e2e/protractor.conf.js', 'protractor.conf.js');

    this.template('test/e2e/index/index.po.js', 'e2e/index/index.po.js');
    this.template('test/e2e/index/index.spec.js', 'e2e/index/index.spec.js');
  }

  if (this.useServer && this.useServerTesting) {
    this.template('server/index/__tests__/index.spec.js', 'server/index/__tests__/index.spec.js');
  }
};

module.exports = testingFiles;
