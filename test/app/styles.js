/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;


describe('Yeogurt generator using Styles', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

            done();
        }.bind(this));
    });
    describe('With CSS', function () {
        it('Creates expected files', function (done) {
            var expected = [
                'client/styles/main.css',
                'grunt/config/optimize/cssmin.js'
            ];

            helpers.mockPrompt(this.app, {
                cssOption: 'css'
            });
            this.app.run([], function () {
                assert.file(expected);
                done();
            });
        });
    });
    describe('With Sass', function () {
        it('Creates expected files', function (done) {
            var expected = [
                'client/',
                'client/styles',
                'client/styles/main.scss',
                'grunt/',
                'grunt/config',
                'grunt/config/compile/sass.js'
            ];
            var fileContentToTest = [
                ['client/styles/main.scss', /sass/i]
            ];

            helpers.mockPrompt(this.app, {
                cssOption: 'sass'
            });
            this.app.run([], function () {
                assert.file(expected);
                assert.fileContent(fileContentToTest);
                done();
            });
        });
        describe('With Bourbon', function () {
            it('Creates expected content', function (done) {
                var fileContentToTest = [
                    ['bower.json', /bourbon/i]
                ];

                helpers.mockPrompt(this.app, {
                    cssOption: 'sass',
                    useBourbon: true
                });
                this.app.run([], function () {
                    assert.fileContent(fileContentToTest);
                    done();
                });
            });
        });
        describe('With Sass (not Scss) syntax', function () {
            it('Creates expected content', function (done) {
                var expected = [
                    'client/',
                    'client/styles',
                    'client/styles/main.sass',
                    'grunt/',
                    'grunt/config',
                    'grunt/config/compile/sass.js'
                ];
                var fileContentToTest = [
                    ['grunt/config/compile/sass.js', /\.sass/i],
                    ['grunt/config/doc/kss.js', /main\.sass/i]
                ];

                helpers.mockPrompt(this.app, {
                    cssOption: 'sass',
                    sassSyntax: 'sass',
                });
                this.app.run([], function () {
                    assert.file(expected);
                    assert.fileContent(fileContentToTest);
                    done();
                });
            });
        });
    });
    describe('With Less', function () {
        it('Creates expected files', function (done) {
            var expected = [
                'client/',
                'client/styles',
                'client/styles/main.less',
                'grunt/',
                'grunt/config',
                'grunt/config/compile/less.js'
            ];
            var fileContentToTest = [
                ['client/styles/main.less', /less/i]
            ];

            helpers.mockPrompt(this.app, {
                cssOption: 'less'
            });
            this.app.run([], function () {
                assert.file(expected);
                assert.fileContent(fileContentToTest);
                done();
            });
        });
        describe('With Lesshat', function () {
            it('Creates expected content', function (done) {
                var fileContentToTest = [
                    ['bower.json', /lesshat/i]
                ];

                helpers.mockPrompt(this.app, {
                    cssOption: 'less',
                    useLesshat: true
                });
                this.app.run([], function () {
                    assert.fileContent(fileContentToTest);
                    done();
                });
            });
        });
    });
    describe('With Stylus', function () {
        it('Creates expected files', function (done) {
            var expected = [
                'client/',
                'client/styles',
                'client/styles/main.styl',
                'grunt/',
                'grunt/config',
                'grunt/config/compile/stylus.js'
            ];
            var fileContentToTest = [
                ['client/styles/main.styl', /nib/i]
            ];

            helpers.mockPrompt(this.app, {
                cssOption: 'stylus',
                useBootstrap: false,
                useFoundation: false
            });
            this.app.run([], function () {
                assert.file(expected);
                assert.fileContent(fileContentToTest);
                done();
            });
        });
    });
});
