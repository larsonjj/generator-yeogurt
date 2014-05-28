/**
 * Build a production ready version of your site and zip it up
 */
'use strict';

module.exports = function(grunt) {
    grunt.registerTask('ftpinfo', 'Grab FTP info for deployment; If valid, then deploy to FTP server', function() {
        var ftpJSON = grunt.file.readJSON('.ftppass');
        if (ftpJSON.host === '') {
            grunt.log.error('ERROR: Deploy will not work until you fill out FTP server info in the ".ftppass" file!');
        } else {
            grunt.config.set('secret', ftpJSON);
            grunt.task.run(['ftpush']);
        }
    });

    grunt.registerTask('deploy', 'Build a production ready version of your site and deploy it to a desired FTP server.', [
        'zip',
        'ftpinfo'
    ]);
};