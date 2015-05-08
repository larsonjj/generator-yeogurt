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
          'src/backbone/requirejs/routes/__tests__/routes.spec.js', 'src/_scripts/__tests__/routes.spec.js'
        );
        this.template(
          'src/backbone/requirejs/index/__tests__/index.spec.js', 'src/_screens/index/__tests__/index.spec.js'
        );
      }

      if (this.jsOption === 'browserify') {
        this.template(
          'src/backbone/browserify/routes/__tests__/routes.spec.js', 'src/_scripts/__tests__/routes.spec.js'
        );
        this.template(
          'src/backbone/browserify/index/__tests__/index.spec.js', 'src/_screens/index/__tests__/index.spec.js'
        );
      }

      if (this.jsOption === 'none') {
        this.template('src/backbone/js/routes/__tests__/routes.spec.js', 'src/_scripts/__tests__/routes.spec.js');
        this.template(
          'src/backbone/js/index/__tests__/index.spec.js', 'src/_screens/index/__tests__/index.spec.js'
        );
      }
    }
    else if (this.jsFramework === 'react') {
      this.template('test/karma/phantomjs-shims.js', 'src/_vendor/phantomjs-shims.js');

      // Router
      this.template('src/react/routes/__tests__/routes.spec.jsx', 'src/_scripts/__tests__/routes.spec.jsx');

      // Components
      this.template('src/react/index/__tests__/index.spec.jsx', 'src/_screens/index/__tests__/index.spec.jsx');
      this.template('src/react/layouts/__tests__/base.spec.jsx', 'src/_layouts/__tests__/base.spec.jsx');

      this.template('src/react/actions/__tests__/main.actions.spec.js', 'src/_scripts/actions/__tests__/main.actions.spec.js');
      this.template('src/react/actions/__tests__/main.actions.spec.js', 'src/_scripts/actions/__tests__/main.actions.spec.js');
    }
    else if (this.jsFramework === 'angular') {
      this.template('src/angular/index/__tests__/index.spec.js', 'src/_screens/index/__tests__/index.spec.js');
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
