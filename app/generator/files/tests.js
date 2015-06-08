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

    this.template('test/e2e/home/home.po.js', 'e2e/home/home.po.js');
    this.template('test/e2e/home/home.spec.js', 'e2e/home/home.spec.js');
  }

};

module.exports = testingFiles;
