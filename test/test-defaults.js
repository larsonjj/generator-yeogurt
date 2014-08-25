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
            'grunt/config/util/clean.js',
            'grunt/config/util/copy.js',
            'grunt/config/server/connect.js',
            'grunt/config/util/compress.js',
            'grunt/config/optimize/htmlmin.js',
            'grunt/config/optimize/imagemin.js',
            'grunt/config/optimize/svgmin.js',
            'grunt/config/optimize/uglify.js',
            'grunt/config/optimize/usemin.js',
            'grunt/config/util/watch.js',
            'grunt/config/compile/sass.js',
            'grunt/config/compile/requirejs.js',
            'grunt/config/test/karma.js',
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
