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
            'dev/styles',
            'dev/scripts',
            'dev/scripts/components',
            'dev/scripts/global',
            'dev/scripts/vendor',
            'dev/scripts/main.js',
            'dev/scripts/app.js',
            'dev/scripts/components/example.js',
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
            jshint: 'y'
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
