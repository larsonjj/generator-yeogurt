/**
 * Generate files specific to unit testing
 */

'use strict';

var testingFiles = function testingFiles() {
  if (this.testFramework !== 'none') {
    this.template('test/karma/karma.conf.js', 'karma.conf.js');
    if (this.jsPreprocessor === 'none') {
      this.template('src/shared/_modules/link/tests/link.test.js', 'src/_modules/link/tests/link.test.js');
    }
    else {
      this.template('src/shared/_modules/link/tests/link.test.es6.js', 'src/_modules/link/tests/link.test.js');
    }
  }
};

module.exports = testingFiles;
