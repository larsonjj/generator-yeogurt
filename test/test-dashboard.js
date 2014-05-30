/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('yeogurt generator Dashboard', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('yeogurt:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // add files and folders you expect to exist here.
            'grunt/',
            'grunt/config',
            'grunt/config/dashboard.js',
            'grunt/config/ftpush.js',
            'grunt/tasks/deploy.js',
            'dev/',
            'dev/dashboard/',
            'dev/dashboard/images/',
            'dev/dashboard/images/yeogurt-logo.png'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'SVN',
            htmlOption: 'Jade',
            cssOption: 'SASS',
            ieSupport: true,
            responsive: true,
            useGA: true,
            useFTP: true,
            jshint: true,
            extras: ['htaccess', 'useBootstrap', 'useFontAwesome', 'useDashboard']
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });
});
