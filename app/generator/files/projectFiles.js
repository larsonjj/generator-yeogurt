/**
 * Generate Yeogurt Logo
 */

'use strict';

var projectFiles = function projectFiles() {
    this.copy('editorconfig', '.editorconfig');
    if (this.jshint) {
        this.template('jshintrc', '.jshintrc');
    }
};

module.exports = projectFiles;