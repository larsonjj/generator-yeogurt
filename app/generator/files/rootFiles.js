/**
 * Generate files specific to the root directory
 */

'use strict';

var rootFiles = function rootFiles() {
    // Create needed Directories

    // root (/)
    this.template('Gruntfile.js', 'Gruntfile.js');
    this.template('_bower.json', 'bower.json');
    this.template('_package.json', 'package.json');
    this.template('README.md', 'README.md');

    if (this.useFTP) {
        this.copy('.ftppass', '.ftppass');
    }

    if (this.versionControl === 'SVN') {
        this.copy('svn-init.sh', 'svn-init.sh');
        this.copy('svn-init.bat', 'svn-init.bat');
    }

    this.copy('bowerrc', '.bowerrc');
    if (this.versionControl === 'Git') {
        this.copy('gitignore', '.gitignore');
        this.copy('gitattributes', '.gitattributes');
    } else if (this.versionControl === 'SVN') {
        this.copy('svnignore', '.svnignore');
    }

    // client/
    this.mkdir('client');
};

module.exports = rootFiles;