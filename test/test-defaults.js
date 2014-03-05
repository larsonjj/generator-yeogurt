/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('yeogurt generator defaults', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('yeogurt:app', [
                '../../app',
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // add files and folders you expect to exist here.
            '.yo-rc.json',
            'dev/',
            'dev/markup',
            'dev/markup/templates',
            'dev/markup/pages',
            'dev/markup/components',
            'dev/markup/helpers',
            'dev/markup/components/header.jade',
            'dev/markup/components/footer.jade',
            'dev/markup/helpers/heading.jade',
            'dev/markup/pages/index.jade',
            'dev/markup/base.jade',
            'dev/markup/templates/one-column.jade',
            'dev/styles',
            'dev/styles/base',
            'dev/scripts',
            'dev/scripts/modules',
            'dev/scripts/vendor',
            'dev/scripts/main.js',
            'dev/scripts/app.js',
            'dev/scripts/modules/module.js',
            'dev/scripts/modules/inline-module.js',
            'test',
            'karma.conf.js',
            'humans.txt',
            'robots.txt',
            'dev/images',
            'dev/styles/fonts',
            '.editorconfig',
            'Gruntfile.js',
            'bower.json',
            'config.json',
            'package.json',
            '.bowerrc',
            'dev/robots.txt',
            'dev/favicon.ico',
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'Git',
            cssOption: 'SCSS',
            ieSupport: false,
            responsive: false,
            useGA: false,
            useFTP: false,
            jshint: false,
            useDashboard: false,
            extras: []
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
