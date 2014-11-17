/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;


describe('Yeogurt generator using Backbone', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

            done();
        }.bind(this));
    });

    describe('On the Client', function () {
        describe('With Browserify', function () {
            describe('With Handlebars', function () {
                describe('Using Jasmine', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.hbs',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /module\.exports/i],
                            ['client/templates/main.hbs', /<\/div>/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'handlebars',
                            jsOption: 'browserify',
                            useServer: false,
                            testFramework: 'jasmine'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using Mocha', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.hbs',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /module\.exports/i],
                            ['client/templates/main.hbs', /<\/div>/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'handlebars',
                            jsOption: 'browserify',
                            useServer: false,
                            testFramework: 'mocha'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
            describe('With Lo-dash', function () {
                describe('Using Jasmine', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jst',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /module\.exports/i],
                            ['client/templates/main.jst', /<\/div>/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'lodash',
                            jsOption: 'browserify',
                            useServer: false,
                            testFramework: 'jasmine'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using Mocha', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jst',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /module\.exports/i],
                            ['client/templates/main.jst', /<\/div>/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'lodash',
                            jsOption: 'browserify',
                            useServer: false,
                            testFramework: 'mocha'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
            describe('With Jade', function () {
                describe('Using Jasmine', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jade',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /module\.exports/i],
                            ['client/templates/main.jade', /.main\-container/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'jade',
                            jsOption: 'browserify',
                            useServer: false,
                            testFramework: 'jasmine'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using Mocha', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jade',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /module\.exports/i],
                            ['client/templates/main.jade', /.main\-container/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'jade',
                            jsOption: 'browserify',
                            useServer: false,
                            testFramework: 'mocha'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
        });
        describe('With RequireJS', function () {
            describe('With Handlebars', function () {
                describe('Using Jasmine', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.hbs',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /define\(function\(require\)/i],
                            ['client/templates/main.hbs', /<\/div>/i],
                            ['client/scripts/routes.js', /define\(function\(require\)/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'handlebars',
                            jsOption: 'requirejs',
                            useServer: false,
                            testFramework: 'jasmine'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using Mocha', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.hbs',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /define\(function\(require\)/i],
                            ['client/templates/main.hbs', /<\/div>/i],
                            ['client/scripts/routes.js', /define\(function\(require\)/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'handlebars',
                            jsOption: 'requirejs',
                            useServer: false,
                            testFramework: 'mocha'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
            describe('With Lo-dash', function () {
                describe('Using Jasmine', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jst',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /define\(function\(require\)/i],
                            ['client/templates/main.jst', /<\/div>/i],
                            ['client/scripts/routes.js', /define\(function\(require\)/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'lodash',
                            jsOption: 'requirejs',
                            useServer: false,
                            testFramework: 'jasmine'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using Mocha', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jst',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /define\(function\(require\)/i],
                            ['client/templates/main.jst', /<\/div>/i],
                            ['client/scripts/routes.js', /define\(function\(require\)/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'lodash',
                            jsOption: 'requirejs',
                            useServer: false,
                            testFramework: 'mocha'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
            describe('With Jade', function () {
                describe('Using Jasmine', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jade',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /define\(function\(require\)/i],
                            ['client/templates/main.jade', /.main\-container/i],
                            ['client/scripts/routes.js', /define\(function\(require\)/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'jade',
                            jsOption: 'requirejs',
                            useServer: false,
                            testFramework: 'jasmine'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using Mocha', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jade',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /define\(function\(require\)/i],
                            ['client/templates/main.jade', /.main\-container/i],
                            ['client/scripts/routes.js', /define\(function\(require\)/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'jade',
                            jsOption: 'requirejs',
                            useServer: false,
                            testFramework: 'mocha'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
        });
    });
    describe('On the Server', function () {
        describe('With Browserify', function () {
            describe('With Handlebars', function () {
                describe('Using Jasmine', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.hbs',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /module\.exports/i],
                            ['client/templates/main.hbs', /<\/div>/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'handlebars',
                            jsOption: 'browserify',
                            useServer: true,
                            testFramework: 'jasmine'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using Mocha', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.hbs',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /module\.exports/i],
                            ['client/templates/main.hbs', /<\/div>/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'handlebars',
                            jsOption: 'browserify',
                            useServer: true,
                            testFramework: 'mocha'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
            describe('With Lo-dash', function () {
                describe('Using Jasmine', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jst',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /module\.exports/i],
                            ['client/templates/main.jst', /<\/div>/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'lodash',
                            jsOption: 'browserify',
                            useServer: true,
                            testFramework: 'jasmine'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using Mocha', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jst',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /module\.exports/i],
                            ['client/templates/main.jst', /<\/div>/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'lodash',
                            jsOption: 'browserify',
                            useServer: true,
                            testFramework: 'mocha'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
            describe('With Jade', function () {
                describe('Using Jasmine', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jade',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /module\.exports/i],
                            ['client/templates/main.jade', /.main\-container/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'jade',
                            jsOption: 'browserify',
                            useServer: true,
                            testFramework: 'jasmine'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using Mocha', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jade',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /module\.exports/i],
                            ['client/templates/main.jade', /.main\-container/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'jade',
                            jsOption: 'browserify',
                            useServer: true,
                            testFramework: 'mocha'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
        });
        describe('With RequireJS', function () {
            describe('With Handlebars', function () {
                describe('Using Jasmine', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.hbs',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /define\(function\(require\)/i],
                            ['client/templates/main.hbs', /<\/div>/i],
                            ['client/scripts/routes.js', /define\(function\(require\)/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'handlebars',
                            jsOption: 'requirejs',
                            useServer: true,
                            testFramework: 'jasmine'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using Mocha', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.hbs',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /define\(function\(require\)/i],
                            ['client/templates/main.hbs', /<\/div>/i],
                            ['client/scripts/routes.js', /define\(function\(require\)/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'handlebars',
                            jsOption: 'requirejs',
                            useServer: true,
                            testFramework: 'mocha'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
            describe('With Lo-dash', function () {
                describe('Using Jasmine', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jst',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /define\(function\(require\)/i],
                            ['client/templates/main.jst', /<\/div>/i],
                            ['client/scripts/routes.js', /define\(function\(require\)/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'lodash',
                            jsOption: 'requirejs',
                            useServer: true,
                            testFramework: 'jasmine'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using Mocha', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jst',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /define\(function\(require\)/i],
                            ['client/templates/main.jst', /<\/div>/i],
                            ['client/scripts/routes.js', /define\(function\(require\)/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'lodash',
                            jsOption: 'requirejs',
                            useServer: true,
                            testFramework: 'mocha'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
            describe('With Jade', function () {
                describe('Using Jasmine', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jade',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /define\(function\(require\)/i],
                            ['client/templates/main.jade', /.main\-container/i],
                            ['client/scripts/routes.js', /define\(function\(require\)/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'jade',
                            jsOption: 'requirejs',
                            useServer: true,
                            testFramework: 'jasmine'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using Mocha', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jade',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/main.js', /define\(function\(require\)/i],
                            ['client/templates/main.jade', /.main\-container/i],
                            ['client/scripts/routes.js', /define\(function\(require\)/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'jade',
                            jsOption: 'requirejs',
                            useServer: true,
                            testFramework: 'mocha'
                        });
                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
        });
    });
});
