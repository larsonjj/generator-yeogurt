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
      }

      if (this.jsOption === 'browserify') {
        this.template('test/spec/backbone/browserify/routes.spec.js', 'test/spec/routes.spec.js');
        this.template('test/spec/backbone/browserify/views/index.spec.js', 'test/spec/views/index.spec.js');
      }

      if (this.jsOption === 'none') {
        this.template('test/spec/backbone/js/routes.spec.js', 'test/spec/routes.spec.js');
        this.template('test/spec/backbone/js/views/index.spec.js', 'test/spec/views/index.spec.js');
      }
    }
    else if (this.jsFramework === 'react') {
      this.template('test/helpers/phantomjs-shims.js', 'test/helpers/phantomjs-shims.js');

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
    }
    else if (this.jsFramework === 'angular') {
      this.template('client/scripts/angular/app/index/index.spec.js', 'client/app/index/index.spec.js');
    }
    else {
      this.template('test/spec/main.spec.js', 'test/spec/main.spec.js');
    }
  }

  if (this.useE2e) {
    this.template('protractor.conf.js', 'protractor.conf.js');

    this.template('test/e2e/index/index.po.js', 'e2e/index/index.po.js');
    this.template('test/e2e/index/index.spec.js', 'e2e/index/index.spec.js');
  }

  if (this.useServerTesting) {
    this.template('server/app/index/index.spec.js', 'server/app/index/index.spec.js');
  }
};

module.exports = testingFiles;
