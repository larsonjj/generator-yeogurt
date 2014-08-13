/**
 * Generate files specific to needed images
 */

'use strict';

var imageFiles = function imageFiles() {
    this.mkdir('client/images');
    // client/images
    this.copy('client/images/yeogurt-swirl.png', 'client/images/yeogurt-swirl.png');
};

module.exports = imageFiles;