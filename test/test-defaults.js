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
            'dev/views',
            'dev/views/templates',
            'dev/views/components',
            'dev/views/components/header.jade',
            'dev/views/components/footer.jade',
            'dev/views/components/heading.jade',
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
