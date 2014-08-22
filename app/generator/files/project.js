/**
 * Generate files specific to the needed project configuration
 */

'use strict';

var projectFiles = function projectFiles() {
    this.copy('editorconfig', '.editorconfig');
    if (this.jshint) {
        this.template('jshintrc', '.jshintrc');
    }
};

module.exports = projectFiles;