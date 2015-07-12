/**
 * Generate files specific to unit testing
 */

'use strict';

var testingFiles = function testingFiles() {
  if (this.testFramework !== 'none') {
    this.template('test/karma/karma.conf.js', 'karma.conf.js');
  }
};

module.exports = testingFiles;
