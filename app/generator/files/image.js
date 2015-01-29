/**
 * Generate files specific to needed images
 */

'use strict';

var imageFiles = function imageFiles() {
  // client/images
  this.copy('client/images/yeogurt-swirl.png', 'client/assets/images/yeogurt-swirl.png');
};

module.exports = imageFiles;
