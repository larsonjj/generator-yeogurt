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

            helpers.mockPrompt(this.app, {
                cssOption: 'sass'
            });
            this.app.run([], function () {
                assert.file(expected);
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

            helpers.mockPrompt(this.app, {
                cssOption: 'less'
            });
            this.app.run([], function () {
                assert.file(expected);
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
});
