/**
 * Generate files specific to unit testing
 */

'use strict';

var testingFiles = function testingFiles() {
  if (this.useTesting) {
    this.template('test/karma/karma.conf.js', 'karma.conf.js');
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
