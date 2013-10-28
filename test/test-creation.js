/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('yeogurt generator', function () {
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
            'dev/',
            'dev/markup',
            'dev/markup/templates',
            'dev/markup/pages',
            'dev/markup/components',
            'dev/markup/mixins',
            'dev/markup/components/c000-head.jade',
            'dev/markup/components/c001-header.jade',
            'dev/markup/components/c002-footer.jade',
            'dev/markup/mixins/m000-all-mixins.jade',
            'dev/markup/mixins/m001-heading.jade',
            'dev/markup/pages/p000-homepage.jade',
            'dev/markup/templates/t000-one-column.jade',
            'dev/styles',
            'dev/scripts',
            'dev/scripts/components',
            'dev/scripts/vendor',
            'dev/scripts/main.js',
            'dev/scripts/app.js',
            'dev/scripts/components/example.js',
            'ftppass.json',
            'dev/images',
            'dev/fonts',
            'docs',
            '.editorconfig',
            'Gruntfile.js',
            'dev/index.html',
            'bower.json',
            'config.json',
            'package.json',
            '.bowerrc',
            'dev/robots.txt',
            'dev/404.html',
            'dev/favicon.ico'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'Git',
            htmlOption: 'Jade',
            cssOption: 'LESS',
            linters: ['JSHint'],
            jshint: 'y',
            useFTP: 'y'
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
