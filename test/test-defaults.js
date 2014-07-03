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
            'dev/',
            'dev/templates',
            'dev/templates/layouts',
            'dev/templates/components',
            'dev/templates/components/h1.jade',
            'dev/templates/index.jade',
            'dev/templates/layouts/base.jade',
            'dev/styles',
            'dev/styles/base',
            'dev/scripts',
            'dev/scripts/vendor',
            'dev/scripts/main.js',
            'dev/scripts/app.js',
            'test',
            'karma.conf.js',
            'dev/images',
            '.editorconfig',
            'Gruntfile.js',
            'bower.json',
            'package.json',
            '.bowerrc',
            '.gitignore',
            '.gitattributes',
            '.editorconfig',
            'dev/robots.txt',
            'dev/humans.txt',
            'dev/favicon.ico',
            'dev/images/yeogurt-swirl.png',
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
            versionControl: 'Git',
            htmlOption: 'Jade',
            cssOption: 'SASS',
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
