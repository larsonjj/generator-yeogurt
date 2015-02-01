/**
 * Generate files specific to unit testing
 */

'use strict';

var testingFiles = function testingFiles() {
  if (this.useTesting) {
    if (this.jsOption === 'requirejs') {
      this.copy('test/main.test.js', 'client/app/main.test.js');
    }
    this.template('karma.conf.js', 'karma.conf.js');

    if (this.jsFramework === 'backbone') {
      if (this.jsOption === 'requirejs') {
        this.template('test/spec/backbone/requirejs/routes.spec.js', 'client/app/routes.spec.js');
        this.template('test/spec/backbone/requirejs/views/index.spec.js', 'client/app/index/index.spec.js');
      }

      if (this.jsOption === 'browserify') {
        this.template('test/spec/backbone/browserify/routes.spec.js', 'client/app/routes.spec.js');
        this.template('test/spec/backbone/browserify/views/index.spec.js', 'client/app/index/index.spec.js');
      }

      if (this.jsOption === 'none') {
        this.template('test/spec/backbone/js/routes.spec.js', 'client/app/routes.spec.js');
        this.template('test/spec/backbone/js/views/index.spec.js', 'client/app/index/index.spec.js');
      }
    }
    else if (this.jsFramework === 'react') {
      this.template('test/helpers/phantomjs-shims.js', 'client/common/scripts/helpers/phantomjs-shims.js');

      // Router
      this.template('test/spec/react/routes.spec.js', 'client/app/routes.spec.js');

      // Components
      this.template('test/spec/react/components/index.spec.js', 'client/app/index/index.spec.js');

      // Dispatchers
      this.template('test/spec/react/dispatchers/default.spec.js', 'client/common/scripts/core/dispatcher.spec.js');

      // Stores
      this.template('test/spec/react/stores/page.spec.js', 'client/modules/page/page.spec.js');
      this.template('test/spec/react/stores/default.spec.js', 'client/common/scripts/core/store.spec.js');

      // Actions
      this.template('test/spec/react/actions/page.spec.js', 'client/modules/page/page.action.spec.js');
      this.template('test/spec/react/actions/routes.spec.js', 'client/modules/route/routes.action.spec.js');
    }
    else if (this.jsFramework === 'angular') {
      this.template('client/app/scripts/angular/app/index/index.spec.js', 'client/app/index/index.spec.js');
    }
    else {
      this.template('test/spec/main.spec.js', 'client/app/main.spec.js');
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
