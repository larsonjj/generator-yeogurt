/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;


describe('Yeogurt generator using React', function () {
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
            describe('With Flux', function() {
                it ('Creates expected files', function(done) {
                    var expected = [
                        'client/scripts/flux',
                        'client/scripts/flux/legal',
                        'client/scripts/flux/dispatchers/app.js'
                    ];

                    helpers.mockPrompt(this.app, {
                        singlePageApplication: true,
                        jsFramework: 'react',
                        useFlux: true,
                        jsTemplate: false,
                        jsOption: 'browserify',
                        useServer: false,
                    });

                    this.app.run([], function () {
                        assert.file(expected);
                        done();
                    });
                });
            });
            describe('Using Jasmine', function () {
                describe('Using JSX', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/components/main.jsx',
                            'client/scripts/routes.js',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/components/main.jsx', /<div>/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'react',
                            jsTemplate: false,
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
                describe('Using JS', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/components/main.js',
                            'client/scripts/routes.js',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/components/main.js', /React\.DOM/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];
                        var fileContentNotThere = [
                            ['package.json', /node-jsx/i],
                            ['client/scripts/routes.js', /jsx/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'react',
                            useJsx: false,
                            jsTemplate: false,
                            jsOption: 'browserify',
                            useServer: false,
                            testFramework: 'jasmine'
                        });

                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            assert.noFileContent(fileContentNotThere);
                            done();
                        });
                    });
                });
            });
            describe('Using Mocha', function () {
                describe('Using JSX', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/components/main.jsx',
                            'client/scripts/routes.js',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/components/main.jsx', /<div>/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'react',
                            jsTemplate: false,
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
                describe('Using JS', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/components/main.js',
                            'client/scripts/routes.js',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/components/main.js', /React\.DOM/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];
                        var fileContentNotThere = [
                            ['package.json', /node-jsx/i],
                            ['client/scripts/routes.js', /jsx/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'react',
                            jsTemplate: false,
                            useJsx: false,
                            jsOption: 'browserify',
                            useServer: false,
                            testFramework: 'mocha'
                        });

                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            assert.noFileContent(fileContentNotThere);
                            done();
                        });
                    });
                });
            });
        });
    });
    describe('On the Server', function () {
        describe('With Browserify', function () {
            describe('Using Jasmine', function () {
                describe('Using JSX', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/components/main.jsx',
                            'server/templates/index.html',
                            'client/scripts/routes.js',
                        ];
                        var fileContentToTest = [
                            ['client/scripts/components/main.jsx', /<div>/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['server/templates/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'react',
                            jsTemplate: false,
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
                describe('Using JS', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/components/main.js',
                            'server/templates/index.html',
                            'client/scripts/routes.js',
                        ];
                        var fileContentToTest = [
                            ['client/scripts/components/main.js', /React\.DOM/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['server/templates/index.html', /app\-wrapper/i]
                        ];
                        var fileContentNotThere = [
                            ['server/modules/react-render.js', /node-jsx/i],
                            ['server/controllers/main.js', /node-jsx/i],
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'react',
                            jsTemplate: false,
                            useJsx: false,
                            jsOption: 'browserify',
                            useServer: true,
                            testFramework: 'jasmine'
                        });

                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            assert.noFileContent(fileContentNotThere);
                            done();
                        });
                    });
                });
            });
            describe('Using Mocha', function () {
                describe('Using JSX', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/components/main.jsx',
                            'server/templates/index.html',
                            'client/scripts/routes.js',
                        ];
                        var fileContentToTest = [
                            ['client/scripts/components/main.jsx', /<div>/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['server/templates/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'react',
                            jsTemplate: false,
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
                describe('Using JS', function () {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/components/main.js',
                            'server/templates/index.html',
                            'client/scripts/routes.js',
                        ];
                        var fileContentToTest = [
                            ['client/scripts/components/main.js', /React\.DOM/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['server/templates/index.html', /app\-wrapper/i]
                        ];
                        var fileContentNotThere = [
                            ['server/modules/react-render.js', /node-jsx/i],
                            ['server/controllers/main.js', /node-jsx/i],
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'react',
                            jsTemplate: false,
                            useJsx: false,
                            jsOption: 'browserify',
                            useServer: true,
                            testFramework: 'mocha'
                        });

                        this.app.run([], function () {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            assert.noFileContent(fileContentNotThere);
                            done();
                        });
                    });
                });
            });
        });
    });
});
