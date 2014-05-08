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
            'dev/views',
            'dev/views/templates',
            'dev/views/components',
            'dev/views/helpers',
            'dev/views/components/header.jade',
            'dev/views/components/footer.jade',
            'dev/views/helpers/heading.jade',
            'dev/views/index.jade',
            'dev/views/templates/base.jade',
            'dev/styles',
            'dev/styles/base',
            'dev/scripts',
            'dev/scripts/modules',
            'dev/scripts/vendor',
            'dev/scripts/main.js',
            'dev/scripts/app.js',
            'dev/scripts/modules/module.js',
            'test',
            'karma.conf.js',
            'dev/images',
            'dev/styles/fonts',
            '.editorconfig',
            'Gruntfile.js',
            'bower.json',
            'package.json',
            '.bowerrc',
            'dev/robots.txt',
            'dev/humans.txt',
            'dev/favicon.ico',
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'Git',
            cssOption: 'SCSS',
            jsOption: 'RequireJS',
            ieSupport: false,
            responsive: false,
            useGA: false,
            useFTP: false,
            jshint: false,
            extras: []
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });
});
