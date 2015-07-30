/**
 * Generate files specific to unit testing
 */

'use strict';

var testingFiles = function testingFiles() {
  if (this.testFramework !== 'none') {
    this.template('test/karma/karma.conf.js', 'karma.conf.js');
    this.template('test/karma/phantomjs-shims.js', 'phantomjs-shims.js');
  }
};

module.exports = testingFiles;
