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
            'README.md',
            'client/',
            'client/templates',
            'client/templates/layouts',
            'client/templates/index.jade',
            'client/templates/layouts/base.jade',
            'client/styles',
            'client/scripts',
            'client/scripts/main.js',
            'client/scripts/app.js',
            'test',
            'karma.conf.js',
            'client/images',
            '.editorconfig',
            'Gruntfile.js',
            'bower.json',
            'package.json',
            '.bowerrc',
            '.gitignore',
            '.gitattributes',
            '.editorconfig',
            'client/robots.txt',
            'client/humans.txt',
            'client/favicon.ico',
            'grunt/',
            'grunt/config',
            'grunt/tasks',
            'grunt/config/clean.js',
            'grunt/config/copy.js',
            'grunt/config/connect.js',
            'grunt/config/compress.js',
            'grunt/config/htmlmin.js',
            'grunt/config/imagemin.js',
            'grunt/config/svgmin.js',
            'grunt/config/uglify.js',
            'grunt/config/usemin.js',
            'grunt/config/watch.js',
            'grunt/config/sass.js',
            'grunt/config/requirejs.js',
            'grunt/config/karma.js',
            'grunt/tasks/build.js',
            'grunt/tasks/default.js',
            'grunt/tasks/serve.js',
            'grunt/tasks/test.js',
            'grunt/tasks/zip.js'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'git',
            htmlOption: 'jade',
            cssOption: 'sass',
            jsOption: 'requirejs',
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
