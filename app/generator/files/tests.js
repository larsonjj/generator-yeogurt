/**
 * Generate files specific to unit testing
 */

'use strict';

var testingFiles = function testingFiles() {
  if (this.useTesting) {
    if (this.jsOption === 'requirejs') {
      this.copy('test/karma/requirejs/main.test.js', 'karma/main.test.js');
    }
    this.template('test/karma/karma.conf.js', 'karma/karma.conf.js');

    if (this.jsFramework === 'backbone') {
      if (this.jsOption === 'requirejs') {
        this.template('client/app/scripts/backbone/requirejs/routes/routes.spec.js', 'client/app/routes.spec.js');
        this.template('client/app/scripts/backbone/requirejs/index/index.spec.js', 'client/app/index/index.spec.js');
      }

      if (this.jsOption === 'browserify') {
        this.template('client/app/scripts/backbone/browserify/routes/routes.spec.js', 'client/app/routes.spec.js');
        this.template('client/app/scripts/backbone/browserify/index/index.spec.js', 'client/app/index/index.spec.js');
      }

      if (this.jsOption === 'none') {
        this.template('client/app/scripts/backbone/js/routes/routes.spec.js', 'client/app/routes.spec.js');
        this.template('client/app/scripts/backbone/js/index/index.spec.js', 'client/app/index/index.spec.js');
      }
    }
    else if (this.jsFramework === 'react') {
      this.template('test/karma/phantomjs-shims.js', 'karma/phantomjs-shims.js');

      // Router
      this.template('client/app/scripts/react/routes/routes.spec.js', 'client/app/routes.spec.js');

      // Components
      this.template('client/app/scripts/react/index/index.spec.js', 'client/app/index/index.spec.js');

      // Dispatchers
      this.template(
        'client/app/scripts/react/common/core/dispatcher.spec.js',
        'client/common/core/dispatcher.spec.js'
      );

      // Stores
      this.template('client/app/scripts/react/modules/page/page.spec.js', 'client/modules/page/page.spec.js');
      this.template('client/app/scripts/react/common/core/store.spec.js', 'client/common/core/store.spec.js');

      // Actions
      this.template(
        'client/app/scripts/react/modules/route/route.spec.js',
        'client/modules/route/route.spec.js'
      );
    }
    else if (this.jsFramework === 'angular') {
      this.template('client/app/scripts/angular/index/index.spec.js', 'client/app/index/index.spec.js');
    }
    else {
      this.template('client/app/scripts/noframework/main.spec.js', 'client/app/main.spec.js');
    }
  }

  if (this.useE2e) {
    this.template('test/e2e/protractor.conf.js', 'e2e/protractor.conf.js');

    this.template('test/e2e/index/index.po.js', 'e2e/index/index.po.js');
    this.template('test/e2e/index/index.spec.js', 'e2e/index/index.spec.js');
  }

  if (this.useServerTesting) {
    this.template('server/app/index/index.spec.js', 'server/app/index/index.spec.js');
  }
};

module.exports = testingFiles;
