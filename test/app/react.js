/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;


describe('Yeogurt generator using React', function() {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

            done();
        }.bind(this));
    });

    describe('On the Client', function() {
        describe('With Browserify', function() {
            describe('With Defaults', function() {
                it ('Creates expected files', function(done) {
                    var expected = [
                        'client/scripts',
                        'client/scripts/main.js',
                        'client/scripts/routes.js',
                        'client/scripts/constants/page.js',
                        'client/scripts/constants/routes.js',
                        'client/scripts/constants/defaults.js',
                        'client/scripts/constants/payload-sources.js',
                        'client/scripts/stores/default.js',
                        'client/scripts/dispatchers/default.js',
                        'client/scripts/stores/user.js'
                    ];

                    var fileContentToTest = [
                        ['client/scripts/routes.js', /module\.exports/i],
                        ['client/index.html', /app\-wrapper/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        singlePageApplication: true,
                        jsFramework: 'react',
                        jsTemplate: false,
                        jsOption: 'browserify',
                        useServer: false,
                    });

                    this.app.run([], function() {
                        assert.file(expected);
                        assert.fileContent(fileContentToTest);
                        done();
                    });
                });
            });
            describe('Using Jasmine', function() {
                describe('Using JSX', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/components/index.jsx',
                            'client/scripts/components/modules/link.jsx',
                            'client/scripts/components/layouts/default.jsx'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/components/index.jsx', /<div/i],
                            ['package.json', /node-jsx/i],
                            ['client/scripts/routes.js', /jsx/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'react',
                            jsTemplate: false,
                            jsOption: 'browserify',
                            useServer: false,
                            testFramework: 'jasmine'
                        });

                        this.app.run([], function() {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using JS', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/components/index.js',
                        ];
                        var fileContentToTest = [
                            ['client/scripts/components/index.js', /React\.createElement/i],
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

                        this.app.run([], function() {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            assert.noFileContent(fileContentNotThere);
                            done();
                        });
                    });
                });
            });
            describe('Using Mocha', function() {
                describe('Using JSX', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/components/index.jsx',
                            'client/scripts/components/modules/link.jsx',
                            'client/scripts/components/layouts/default.jsx'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/components/index.jsx', /<div/i],
                            ['package.json', /node-jsx/i],
                            ['client/scripts/routes.js', /jsx/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'react',
                            jsTemplate: false,
                            jsOption: 'browserify',
                            useServer: false,
                            testFramework: 'mocha'
                        });

                        this.app.run([], function() {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using JS', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/components/index.js',
                        ];
                        var fileContentToTest = [
                            ['client/scripts/components/index.js', /React\.createElement/i],
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
                            testFramework: 'mocha'
                        });

                        this.app.run([], function() {
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
    describe('On the Server', function() {
        describe('With Browserify', function() {
            describe('Without Auth', function() {
                it('Creates default files', function(done) {
                    var expected = [
                        'client/scripts/stores/page.js',
                        'client/scripts/stores/default.js',
                        'client/scripts/dispatchers/default.js',
                        'client/scripts/actions/page.js',
                        'client/scripts/actions/routes.js',
                        'client/scripts/constants/page.js',
                        'client/scripts/constants/routes.js',
                        'client/scripts/constants/defaults.js',
                        'client/scripts/constants/payload-sources.js'
                    ];
                    helpers.mockPrompt(this.app, {
                        useAuth: false,
                        singlePageApplication: true,
                        jsFramework: 'react',
                        jsTemplate: false,
                        jsOption: 'browserify',
                        useServer: true,
                        testFramework: 'jasmine'
                    });

                    this.app.run([], function() {
                        assert.file(expected);
                        done();
                    });
                });
                describe('Using Jasmine', function() {
                    describe('Using JSX', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/components/index.jsx',
                                'client/scripts/components/modules/link.jsx',
                                'client/scripts/components/layouts/default.jsx'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/components/index.jsx', /<div/i],
                                ['package.json', /node-jsx/i],
                                ['client/scripts/routes.js', /jsx/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'react',
                                jsTemplate: false,
                                jsOption: 'browserify',
                                useServer: true,
                                testFramework: 'jasmine'
                            });

                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                    describe('Using JS', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/components/index.js',
                            ];
                            var fileContentToTest = [
                                ['client/scripts/components/index.js', /React\.createElement/i],
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
                                useServer: true,
                                testFramework: 'jasmine'
                            });

                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                assert.noFileContent(fileContentNotThere);
                                done();
                            });
                        });
                    });
                });
                describe('Using Mocha', function() {
                    describe('Using JSX', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/components/index.jsx',
                                'client/scripts/components/modules/link.jsx',
                                'client/scripts/components/layouts/default.jsx'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/components/index.jsx', /<div/i],
                                ['package.json', /node-jsx/i],
                                ['client/scripts/routes.js', /jsx/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'react',
                                useJsx: true,
                                jsTemplate: false,
                                jsOption: 'browserify',
                                useServer: true,
                                testFramework: 'jasmine'
                            });

                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                    describe('Using JS', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/components/index.js',
                            ];
                            var fileContentToTest = [
                                ['client/scripts/components/index.js', /React\.createElement/i],
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
                                useServer: true,
                                testFramework: 'jasmine'
                            });

                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                assert.noFileContent(fileContentNotThere);
                                done();
                            });
                        });
                    });
                });
            });
            describe('With Auth', function() {
                it('Creates default files', function(done) {
                    var expected = [
                        'client/scripts/stores/messages.js',
                        'client/scripts/stores/user.js',
                        'client/scripts/stores/page.js',
                        'client/scripts/stores/default.js',
                        'client/scripts/dispatchers/default.js',
                        'client/scripts/actions/user.js',
                        'client/scripts/actions/messages.js',
                        'client/scripts/actions/page.js',
                        'client/scripts/actions/routes.js',
                        'client/scripts/constants/page.js',
                        'client/scripts/constants/routes.js',
                        'client/scripts/constants/defaults.js',
                        'client/scripts/constants/payload-sources.js',
                    ];
                    helpers.mockPrompt(this.app, {
                        useAuth: true,
                        singlePageApplication: true,
                        jsFramework: 'react',
                        jsTemplate: false,
                        jsOption: 'browserify',
                        useServer: true,
                        testFramework: 'jasmine'
                    });

                    this.app.run([], function() {
                        assert.file(expected);
                        done();
                    });
                });
                describe('Using Jasmine', function() {
                    describe('Using JSX', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/components/index.jsx',
                                'client/scripts/components/modules/link.jsx',
                                'client/scripts/components/modules/messages.jsx',
                                'client/scripts/components/modules/navbar.jsx',
                                'client/scripts/components/layouts/default.jsx',
                                'client/scripts/components/account/forgot.jsx',
                                'client/scripts/components/account/login.jsx',
                                'client/scripts/components/account/reset.jsx',
                                'client/scripts/components/account/settings.jsx',
                                'client/scripts/components/account/signup.jsx'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/components/index.jsx', /<div/i],
                                ['package.json', /node-jsx/i],
                                ['client/scripts/routes.js', /jsx/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                useAuth: true,
                                singlePageApplication: true,
                                jsFramework: 'react',
                                jsTemplate: false,
                                jsOption: 'browserify',
                                useServer: true,
                                testFramework: 'jasmine'
                            });

                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                    describe('Using JS', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/components/index.js',
                                'client/scripts/components/modules/link.js',
                                'client/scripts/components/modules/messages.js',
                                'client/scripts/components/modules/navbar.js',
                                'client/scripts/components/layouts/default.js',
                                'client/scripts/components/account/forgot.js',
                                'client/scripts/components/account/login.js',
                                'client/scripts/components/account/reset.js',
                                'client/scripts/components/account/settings.js',
                                'client/scripts/components/account/signup.js'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/components/index.js', /React\.createElement/i],
                            ];
                            var fileContentNotThere = [
                                ['package.json', /node-jsx/i],
                                ['client/scripts/routes.js', /jsx/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                useAuth: true,
                                singlePageApplication: true,
                                jsFramework: 'react',
                                useJsx: false,
                                jsTemplate: false,
                                jsOption: 'browserify',
                                useServer: true,
                                testFramework: 'jasmine'
                            });

                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                assert.noFileContent(fileContentNotThere);
                                done();
                            });
                        });
                    });
                });
                describe('Using Mocha', function() {
                    describe('Using JSX', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/components/index.jsx',
                                'client/scripts/components/modules/link.jsx',
                                'client/scripts/components/modules/messages.jsx',
                                'client/scripts/components/modules/navbar.jsx',
                                'client/scripts/components/layouts/default.jsx',
                                'client/scripts/components/account/forgot.jsx',
                                'client/scripts/components/account/login.jsx',
                                'client/scripts/components/account/reset.jsx',
                                'client/scripts/components/account/settings.jsx',
                                'client/scripts/components/account/signup.jsx'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/components/index.jsx', /<div/i],
                                ['package.json', /node-jsx/i],
                                ['client/scripts/routes.js', /jsx/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                useAuth: true,
                                singlePageApplication: true,
                                jsFramework: 'react',
                                useJsx: true,
                                jsTemplate: false,
                                jsOption: 'browserify',
                                useServer: true,
                                testFramework: 'jasmine'
                            });

                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                    describe('Using JS', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/components/index.js',
                                'client/scripts/components/modules/link.js',
                                'client/scripts/components/modules/messages.js',
                                'client/scripts/components/modules/navbar.js',
                                'client/scripts/components/layouts/default.js',
                                'client/scripts/components/account/forgot.js',
                                'client/scripts/components/account/login.js',
                                'client/scripts/components/account/reset.js',
                                'client/scripts/components/account/settings.js',
                                'client/scripts/components/account/signup.js'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/components/index.js', /React\.createElement/i],
                            ];
                            var fileContentNotThere = [
                                ['package.json', /node-jsx/i],
                                ['client/scripts/routes.js', /jsx/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                useAuth: true,
                                singlePageApplication: true,
                                jsFramework: 'react',
                                useJsx: false,
                                jsTemplate: false,
                                jsOption: 'browserify',
                                useServer: true,
                                testFramework: 'jasmine'
                            });

                            this.app.run([], function() {
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
});
