/**
 * Generate files specific to root folder extras
 */

'use strict';

var extraFiles = function extraFiles() {
    this.copy('client/robots.txt', 'client/robots.txt');
    this.copy('client/humans.txt', 'client/humans.txt');
    this.copy('client/favicon.ico', 'client/favicon.ico');
};

module.exports = extraFiles;