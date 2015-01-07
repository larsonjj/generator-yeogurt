/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;


describe('Yeogurt generator using Backbone', function() {
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
        describe('With Vanilla JS', function() {
            describe('With Handlebars', function() {
                describe('Using Jasmine', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.hbs',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /app/i],
                            ['client/templates/index.hbs', /<\/div>/i],
                            ['client/scripts/routes.js', /app/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            projectName: 'app',
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'handlebars',
                            jsOption: 'none',
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
                describe('Using Mocha', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.hbs',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /app/i],
                            ['client/templates/index.hbs', /<\/div>/i],
                            ['client/scripts/routes.js', /app/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            projectName: 'app',
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'handlebars',
                            jsOption: 'none',
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
            });
            describe('With Underscore', function() {
                describe('Using Jasmine', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.jst',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /app/i],
                            ['client/templates/index.jst', /<\/div>/i],
                            ['client/scripts/routes.js', /app/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            projectName: 'app',
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'underscore',
                            jsOption: 'none',
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
                describe('Using Mocha', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.jst',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /app/i],
                            ['client/templates/index.jst', /<\/div>/i],
                            ['client/scripts/routes.js', /app/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            projectName: 'app',
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'underscore',
                            jsOption: 'none',
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
            });
            describe('With Jade', function() {
                describe('Using Jasmine', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.jade',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /app/i],
                            ['client/templates/index.jade', /code\.version/i],
                            ['client/scripts/routes.js', /app/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            projectName: 'app',
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'jade',
                            jsOption: 'none',
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
                describe('Using Mocha', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.jade',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /app/i],
                            ['client/templates/index.jade', /code\.version/i],
                            ['client/scripts/routes.js', /app/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            projectName: 'app',
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'jade',
                            jsOption: 'none',
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
            });
        });
        describe('With Browserify', function() {
            describe('With Handlebars', function() {
                describe('Using Jasmine', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.hbs',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /module\.exports/i],
                            ['client/templates/index.hbs', /<\/div>/i],
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
                        this.app.run([], function() {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using Mocha', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.hbs',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /module\.exports/i],
                            ['client/templates/index.hbs', /<\/div>/i],
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
                        this.app.run([], function() {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
            describe('With Underscore', function() {
                describe('Using Jasmine', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.jst',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /module\.exports/i],
                            ['client/templates/index.jst', /<\/div>/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'underscore',
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
                describe('Using Mocha', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.jst',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /module\.exports/i],
                            ['client/templates/index.jst', /<\/div>/i],
                            ['client/scripts/routes.js', /module\.exports/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'underscore',
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
            });
            describe('With Jade', function() {
                describe('Using Jasmine', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.jade',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /module\.exports/i],
                            ['client/templates/index.jade', /code\.version/i],
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
                        this.app.run([], function() {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using Mocha', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.jade',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /module\.exports/i],
                            ['client/templates/index.jade', /code\.version/i],
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
                        this.app.run([], function() {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
        });
        describe('With RequireJS', function() {
            describe('With Handlebars', function() {
                describe('Using Jasmine', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.hbs',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /define\(function/i],
                            ['client/templates/index.hbs', /<\/div>/i],
                            ['client/scripts/routes.js', /define\(function/i],
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
                        this.app.run([], function() {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using Mocha', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.hbs',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /define\(function/i],
                            ['client/templates/index.hbs', /<\/div>/i],
                            ['client/scripts/routes.js', /define\(function/i],
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
                        this.app.run([], function() {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
            describe('With Underscore', function() {
                describe('Using Jasmine', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.jst',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /define\(function/i],
                            ['client/templates/index.jst', /<\/div>/i],
                            ['client/scripts/routes.js', /define\(function/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'underscore',
                            jsOption: 'requirejs',
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
                describe('Using Mocha', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.jst',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /define\(function/i],
                            ['client/templates/index.jst', /<\/div>/i],
                            ['client/scripts/routes.js', /define\(function/i],
                            ['client/index.html', /app\-wrapper/i]
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'underscore',
                            jsOption: 'requirejs',
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
            });
            describe('With Jade', function() {
                describe('Using Jasmine', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.jade',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /define\(function/i],
                            ['client/templates/index.jade', /code\.version/i],
                            ['client/scripts/routes.js', /define\(function/i],
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
                        this.app.run([], function() {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                describe('Using Mocha', function() {
                    it ('Creates expected files with expected content', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/index.js',
                            'client/templates/index.jade',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];
                        var fileContentToTest = [
                            ['client/scripts/views/index.js', /define\(function/i],
                            ['client/templates/index.jade', /code\.version/i],
                            ['client/scripts/routes.js', /define\(function/i],
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
                        this.app.run([], function() {
                            assert.file(expected);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
        });
    });
    describe('On the Server', function() {
        describe('With Browserify', function() {
            describe('With Handlebars', function() {
                describe('Using Jasmine', function() {
                    describe('Without Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/templates/index.hbs',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /module\.exports/i],
                                ['client/templates/index.hbs', /<\/div>/i],
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
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                    describe('With Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/scripts/views/account/forgot.js',
                                'client/scripts/views/account/login.js',
                                'client/scripts/views/account/reset.js',
                                'client/scripts/views/account/settings.js',
                                'client/scripts/views/account/signup.js',
                                'client/scripts/views/layouts/default.js',
                                'client/scripts/views/modules/messages.js',
                                'client/scripts/views/modules/navbar.js',
                                'client/scripts/controllers/account.js',
                                'client/scripts/controllers/index.js',
                                'client/scripts/models/user.js',
                                'client/scripts/models/messages.js',
                                'client/templates/index.hbs',
                                'client/templates/account/forgot.hbs',
                                'client/templates/account/login.hbs',
                                'client/templates/account/reset.hbs',
                                'client/templates/account/settings.hbs',
                                'client/templates/account/signup.hbs',
                                'client/templates/layouts/default.hbs',
                                'client/templates/modules/messages.hbs',
                                'client/templates/modules/navbar.hbs',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /module\.exports/i],
                                ['client/scripts/views/account/forgot.js',/module\.exports/i],
                                ['client/scripts/views/account/login.js',/module\.exports/i],
                                ['client/scripts/views/account/reset.js',/module\.exports/i],
                                ['client/scripts/views/account/settings.js',/module\.exports/i],
                                ['client/scripts/views/account/signup.js',/module\.exports/i],
                                ['client/scripts/views/layouts/default.js',/module\.exports/i],
                                ['client/scripts/views/modules/messages.js',/module\.exports/i],
                                ['client/scripts/views/modules/navbar.js',/module\.exports/i],
                                ['client/scripts/controllers/account.js',/module\.exports/i],
                                ['client/scripts/controllers/index.js',/module\.exports/i],
                                ['client/scripts/models/user.js',/module\.exports/i],
                                ['client/scripts/models/messages.js',/module\.exports/i],
                                ['client/templates/index.hbs', /<\/div>/i],
                                ['client/templates/account/forgot.hbs',/<\/form>/i],
                                ['client/templates/account/login.hbs',/<\/form>/i],
                                ['client/templates/account/reset.hbs',/<\/form>/i],
                                ['client/templates/account/settings.hbs',/\{\{/i],
                                ['client/templates/account/signup.hbs',/<\/form>/i],
                                ['client/templates/layouts/default.hbs',/<\/div>/i],
                                ['client/templates/modules/messages.hbs',/\{\{/i],
                                ['client/templates/modules/navbar.hbs',/\{\{/i],
                                ['client/scripts/routes.js', /module\.exports/i],
                                ['client/index.html', /app\-wrapper/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'backbone',
                                jsTemplate: 'handlebars',
                                jsOption: 'browserify',
                                useServer: true,
                                useAuth: true,
                                testFramework: 'jasmine'
                            });
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                });
                describe('Using Mocha', function() {
                    describe('Without Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/templates/index.hbs',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /module\.exports/i],
                                ['client/templates/index.hbs', /<\/div>/i],
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
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                    describe('With Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/scripts/views/account/forgot.js',
                                'client/scripts/views/account/login.js',
                                'client/scripts/views/account/reset.js',
                                'client/scripts/views/account/settings.js',
                                'client/scripts/views/account/signup.js',
                                'client/scripts/views/layouts/default.js',
                                'client/scripts/views/modules/messages.js',
                                'client/scripts/views/modules/navbar.js',
                                'client/scripts/controllers/account.js',
                                'client/scripts/controllers/index.js',
                                'client/scripts/models/user.js',
                                'client/scripts/models/messages.js',
                                'client/templates/index.hbs',
                                'client/templates/account/forgot.hbs',
                                'client/templates/account/login.hbs',
                                'client/templates/account/reset.hbs',
                                'client/templates/account/settings.hbs',
                                'client/templates/account/signup.hbs',
                                'client/templates/layouts/default.hbs',
                                'client/templates/modules/messages.hbs',
                                'client/templates/modules/navbar.hbs',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /module\.exports/i],
                                ['client/scripts/views/account/forgot.js',/module\.exports/i],
                                ['client/scripts/views/account/login.js',/module\.exports/i],
                                ['client/scripts/views/account/reset.js',/module\.exports/i],
                                ['client/scripts/views/account/settings.js',/module\.exports/i],
                                ['client/scripts/views/account/signup.js',/module\.exports/i],
                                ['client/scripts/views/layouts/default.js',/module\.exports/i],
                                ['client/scripts/views/modules/messages.js',/module\.exports/i],
                                ['client/scripts/views/modules/navbar.js',/module\.exports/i],
                                ['client/scripts/controllers/account.js',/module\.exports/i],
                                ['client/scripts/controllers/index.js',/module\.exports/i],
                                ['client/scripts/models/user.js',/module\.exports/i],
                                ['client/scripts/models/messages.js',/module\.exports/i],
                                ['client/templates/index.hbs', /<\/div>/i],
                                ['client/templates/account/forgot.hbs',/<\/form>/i],
                                ['client/templates/account/login.hbs',/<\/form>/i],
                                ['client/templates/account/reset.hbs',/<\/form>/i],
                                ['client/templates/account/settings.hbs',/\{\{/i],
                                ['client/templates/account/signup.hbs',/<\/form>/i],
                                ['client/templates/layouts/default.hbs',/<\/div>/i],
                                ['client/templates/modules/messages.hbs',/\{\{/i],
                                ['client/templates/modules/navbar.hbs',/\{\{/i],
                                ['client/scripts/routes.js', /module\.exports/i],
                                ['client/index.html', /app\-wrapper/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'backbone',
                                jsTemplate: 'handlebars',
                                jsOption: 'browserify',
                                useServer: true,
                                useAuth: true,
                                testFramework: 'mocha'
                            });
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                });
            });
            describe('With Underscore', function() {
                describe('Using Jasmine', function() {
                    describe('Without Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/templates/index.jst',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /module\.exports/i],
                                ['client/templates/index.jst', /<\/div>/i],
                                ['client/scripts/routes.js', /module\.exports/i],
                                ['client/index.html', /app\-wrapper/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'backbone',
                                jsTemplate: 'underscore',
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
                    describe('With Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/scripts/views/account/forgot.js',
                                'client/scripts/views/account/login.js',
                                'client/scripts/views/account/reset.js',
                                'client/scripts/views/account/settings.js',
                                'client/scripts/views/account/signup.js',
                                'client/scripts/views/layouts/default.js',
                                'client/scripts/views/modules/messages.js',
                                'client/scripts/views/modules/navbar.js',
                                'client/scripts/controllers/account.js',
                                'client/scripts/controllers/index.js',
                                'client/scripts/models/user.js',
                                'client/scripts/models/messages.js',
                                'client/templates/index.jst',
                                'client/templates/account/forgot.jst',
                                'client/templates/account/login.jst',
                                'client/templates/account/reset.jst',
                                'client/templates/account/settings.jst',
                                'client/templates/account/signup.jst',
                                'client/templates/layouts/default.jst',
                                'client/templates/modules/messages.jst',
                                'client/templates/modules/navbar.jst',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /module\.exports/i],
                                ['client/scripts/views/account/forgot.js',/module\.exports/i],
                                ['client/scripts/views/account/login.js',/module\.exports/i],
                                ['client/scripts/views/account/reset.js',/module\.exports/i],
                                ['client/scripts/views/account/settings.js',/module\.exports/i],
                                ['client/scripts/views/account/signup.js',/module\.exports/i],
                                ['client/scripts/views/layouts/default.js',/module\.exports/i],
                                ['client/scripts/views/modules/messages.js',/module\.exports/i],
                                ['client/scripts/views/modules/navbar.js',/module\.exports/i],
                                ['client/scripts/controllers/account.js',/module\.exports/i],
                                ['client/scripts/controllers/index.js',/module\.exports/i],
                                ['client/scripts/models/user.js',/module\.exports/i],
                                ['client/scripts/models/messages.js',/module\.exports/i],
                                ['client/templates/index.jst', /<\/div>/i],
                                ['client/templates/account/forgot.jst',/<\/form>/i],
                                ['client/templates/account/login.jst',/<\/form>/i],
                                ['client/templates/account/reset.jst',/<\/form>/i],
                                ['client/templates/account/settings.jst',/<\%/i],
                                ['client/templates/account/signup.jst',/<\/form>/i],
                                ['client/templates/layouts/default.jst',/<\/div>/i],
                                ['client/templates/modules/messages.jst',/<\%/i],
                                ['client/templates/modules/navbar.jst',/<\%/i],
                                ['client/scripts/routes.js', /module\.exports/i],
                                ['client/index.html', /app\-wrapper/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'backbone',
                                jsTemplate: 'underscore',
                                jsOption: 'browserify',
                                useServer: true,
                                testFramework: 'jasmine',
                                useAuth: true
                            });
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                });
                describe('Using Mocha', function() {
                    describe('Without Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/templates/index.jst',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /module\.exports/i],
                                ['client/templates/index.jst', /<\/div>/i],
                                ['client/scripts/routes.js', /module\.exports/i],
                                ['client/index.html', /app\-wrapper/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'backbone',
                                jsTemplate: 'underscore',
                                jsOption: 'browserify',
                                useServer: true,
                                testFramework: 'mocha'
                            });
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                    describe('With Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/scripts/views/account/forgot.js',
                                'client/scripts/views/account/login.js',
                                'client/scripts/views/account/reset.js',
                                'client/scripts/views/account/settings.js',
                                'client/scripts/views/account/signup.js',
                                'client/scripts/views/layouts/default.js',
                                'client/scripts/views/modules/messages.js',
                                'client/scripts/views/modules/navbar.js',
                                'client/scripts/controllers/account.js',
                                'client/scripts/controllers/index.js',
                                'client/scripts/models/user.js',
                                'client/scripts/models/messages.js',
                                'client/templates/index.jst',
                                'client/templates/account/forgot.jst',
                                'client/templates/account/login.jst',
                                'client/templates/account/reset.jst',
                                'client/templates/account/settings.jst',
                                'client/templates/account/signup.jst',
                                'client/templates/layouts/default.jst',
                                'client/templates/modules/messages.jst',
                                'client/templates/modules/navbar.jst',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /module\.exports/i],
                                ['client/scripts/views/account/forgot.js',/module\.exports/i],
                                ['client/scripts/views/account/login.js',/module\.exports/i],
                                ['client/scripts/views/account/reset.js',/module\.exports/i],
                                ['client/scripts/views/account/settings.js',/module\.exports/i],
                                ['client/scripts/views/account/signup.js',/module\.exports/i],
                                ['client/scripts/views/layouts/default.js',/module\.exports/i],
                                ['client/scripts/views/modules/messages.js',/module\.exports/i],
                                ['client/scripts/views/modules/navbar.js',/module\.exports/i],
                                ['client/scripts/controllers/account.js',/module\.exports/i],
                                ['client/scripts/controllers/index.js',/module\.exports/i],
                                ['client/scripts/models/user.js',/module\.exports/i],
                                ['client/scripts/models/messages.js',/module\.exports/i],
                                ['client/templates/index.jst', /<\/div>/i],
                                ['client/templates/account/forgot.jst',/<\/form>/i],
                                ['client/templates/account/login.jst',/<\/form>/i],
                                ['client/templates/account/reset.jst',/<\/form>/i],
                                ['client/templates/account/settings.jst',/<\%/i],
                                ['client/templates/account/signup.jst',/<\/form>/i],
                                ['client/templates/layouts/default.jst',/<\/div>/i],
                                ['client/templates/modules/messages.jst',/<\%/i],
                                ['client/templates/modules/navbar.jst',/<\%/i],
                                ['client/scripts/routes.js', /module\.exports/i],
                                ['client/index.html', /app\-wrapper/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'backbone',
                                jsTemplate: 'underscore',
                                jsOption: 'browserify',
                                useServer: true,
                                testFramework: 'mocha',
                                useAuth: true
                            });
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                });
            });
            describe('With Jade', function() {
                describe('Using Jasmine', function() {
                    describe('Without Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/templates/index.jade',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /module\.exports/i],
                                ['client/templates/index.jade', /code\.version/i],
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
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                    describe('With Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/scripts/views/account/forgot.js',
                                'client/scripts/views/account/login.js',
                                'client/scripts/views/account/reset.js',
                                'client/scripts/views/account/settings.js',
                                'client/scripts/views/account/signup.js',
                                'client/scripts/views/layouts/default.js',
                                'client/scripts/views/modules/messages.js',
                                'client/scripts/views/modules/navbar.js',
                                'client/scripts/controllers/account.js',
                                'client/scripts/controllers/index.js',
                                'client/scripts/models/user.js',
                                'client/scripts/models/messages.js',
                                'client/templates/index.jade',
                                'client/templates/account/forgot.jade',
                                'client/templates/account/login.jade',
                                'client/templates/account/reset.jade',
                                'client/templates/account/settings.jade',
                                'client/templates/account/signup.jade',
                                'client/templates/layouts/default.jade',
                                'client/templates/modules/messages.jade',
                                'client/templates/modules/navbar.jade',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /module\.exports/i],
                                ['client/scripts/views/account/forgot.js',/module\.exports/i],
                                ['client/scripts/views/account/login.js',/module\.exports/i],
                                ['client/scripts/views/account/reset.js',/module\.exports/i],
                                ['client/scripts/views/account/settings.js',/module\.exports/i],
                                ['client/scripts/views/account/signup.js',/module\.exports/i],
                                ['client/scripts/views/layouts/default.js',/module\.exports/i],
                                ['client/scripts/views/modules/messages.js',/module\.exports/i],
                                ['client/scripts/views/modules/navbar.js',/module\.exports/i],
                                ['client/scripts/controllers/account.js',/module\.exports/i],
                                ['client/scripts/controllers/index.js',/module\.exports/i],
                                ['client/scripts/models/user.js',/module\.exports/i],
                                ['client/scripts/models/messages.js',/module\.exports/i],
                                ['client/templates/index.jade', /code\.version/i],
                                ['client/templates/account/forgot.jade',/h3 /i],
                                ['client/templates/account/login.jade',/h3 /i],
                                ['client/templates/account/reset.jade',/h3 /i],
                                ['client/templates/account/settings.jade',/user\./i],
                                ['client/templates/account/signup.jade',/h3 /i],
                                ['client/templates/layouts/default.jade',/.one/i],
                                ['client/templates/modules/messages.jade',/messages\./i],
                                ['client/templates/modules/navbar.jade',/user\./i],
                                ['client/scripts/routes.js', /module\.exports/i],
                                ['client/index.html', /app\-wrapper/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'backbone',
                                jsTemplate: 'jade',
                                jsOption: 'browserify',
                                useServer: true,
                                testFramework: 'jasmine',
                                useAuth: true
                            });
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                });
                describe('Using Mocha', function() {
                    describe('Without Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/templates/index.jade',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /module\.exports/i],
                                ['client/templates/index.jade', /code\.version/i],
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
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                    describe('With Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/scripts/views/account/forgot.js',
                                'client/scripts/views/account/login.js',
                                'client/scripts/views/account/reset.js',
                                'client/scripts/views/account/settings.js',
                                'client/scripts/views/account/signup.js',
                                'client/scripts/views/layouts/default.js',
                                'client/scripts/views/modules/messages.js',
                                'client/scripts/views/modules/navbar.js',
                                'client/scripts/controllers/account.js',
                                'client/scripts/controllers/index.js',
                                'client/scripts/models/user.js',
                                'client/scripts/models/messages.js',
                                'client/templates/index.jade',
                                'client/templates/account/forgot.jade',
                                'client/templates/account/login.jade',
                                'client/templates/account/reset.jade',
                                'client/templates/account/settings.jade',
                                'client/templates/account/signup.jade',
                                'client/templates/layouts/default.jade',
                                'client/templates/modules/messages.jade',
                                'client/templates/modules/navbar.jade',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /module\.exports/i],
                                ['client/scripts/views/account/forgot.js',/module\.exports/i],
                                ['client/scripts/views/account/login.js',/module\.exports/i],
                                ['client/scripts/views/account/reset.js',/module\.exports/i],
                                ['client/scripts/views/account/settings.js',/module\.exports/i],
                                ['client/scripts/views/account/signup.js',/module\.exports/i],
                                ['client/scripts/views/layouts/default.js',/module\.exports/i],
                                ['client/scripts/views/modules/messages.js',/module\.exports/i],
                                ['client/scripts/views/modules/navbar.js',/module\.exports/i],
                                ['client/scripts/controllers/account.js',/module\.exports/i],
                                ['client/scripts/controllers/index.js',/module\.exports/i],
                                ['client/scripts/models/user.js',/module\.exports/i],
                                ['client/scripts/models/messages.js',/module\.exports/i],
                                ['client/templates/index.jade', /code\.version/i],
                                ['client/templates/account/forgot.jade',/h3 /i],
                                ['client/templates/account/login.jade',/h3 /i],
                                ['client/templates/account/reset.jade',/h3 /i],
                                ['client/templates/account/settings.jade',/user\./i],
                                ['client/templates/account/signup.jade',/h3 /i],
                                ['client/templates/layouts/default.jade',/.one/i],
                                ['client/templates/modules/messages.jade',/messages\./i],
                                ['client/templates/modules/navbar.jade',/user\./i],
                                ['client/scripts/routes.js', /module\.exports/i],
                                ['client/index.html', /app\-wrapper/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'backbone',
                                jsTemplate: 'jade',
                                jsOption: 'browserify',
                                useServer: true,
                                testFramework: 'mocha',
                                useAuth: true
                            });
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                });
            });
        });
        describe('With RequireJS', function() {
            describe('With Handlebars', function() {
                describe('Using Jasmine', function() {
                    describe('Without Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/templates/index.hbs',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /define\(function/i],
                                ['client/templates/index.hbs', /<\/div>/i],
                                ['client/scripts/routes.js', /define\(function/i],
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
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                    describe('With Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/scripts/views/account/forgot.js',
                                'client/scripts/views/account/login.js',
                                'client/scripts/views/account/reset.js',
                                'client/scripts/views/account/settings.js',
                                'client/scripts/views/account/signup.js',
                                'client/scripts/views/layouts/default.js',
                                'client/scripts/views/modules/messages.js',
                                'client/scripts/views/modules/navbar.js',
                                'client/scripts/controllers/account.js',
                                'client/scripts/controllers/index.js',
                                'client/scripts/models/user.js',
                                'client/scripts/models/messages.js',
                                'client/templates/index.hbs',
                                'client/templates/account/forgot.hbs',
                                'client/templates/account/login.hbs',
                                'client/templates/account/reset.hbs',
                                'client/templates/account/settings.hbs',
                                'client/templates/account/signup.hbs',
                                'client/templates/layouts/default.hbs',
                                'client/templates/modules/messages.hbs',
                                'client/templates/modules/navbar.hbs',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /define/i],
                                ['client/scripts/views/account/forgot.js',/define/i],
                                ['client/scripts/views/account/login.js',/define/i],
                                ['client/scripts/views/account/reset.js',/define/i],
                                ['client/scripts/views/account/settings.js',/define/i],
                                ['client/scripts/views/account/signup.js',/define/i],
                                ['client/scripts/views/layouts/default.js',/define/i],
                                ['client/scripts/views/modules/messages.js',/define/i],
                                ['client/scripts/views/modules/navbar.js',/define/i],
                                ['client/scripts/controllers/account.js',/define/i],
                                ['client/scripts/controllers/index.js',/define/i],
                                ['client/scripts/models/user.js',/define/i],
                                ['client/scripts/models/messages.js',/define/i],
                                ['client/templates/index.hbs', /<\/div>/i],
                                ['client/templates/account/forgot.hbs',/<\/form>/i],
                                ['client/templates/account/login.hbs',/<\/form>/i],
                                ['client/templates/account/reset.hbs',/<\/form>/i],
                                ['client/templates/account/settings.hbs',/\{\{/i],
                                ['client/templates/account/signup.hbs',/<\/form>/i],
                                ['client/templates/layouts/default.hbs',/<\/div>/i],
                                ['client/templates/modules/messages.hbs',/\{\{/i],
                                ['client/templates/modules/navbar.hbs',/\{\{/i],
                                ['client/scripts/routes.js', /define/i],
                                ['client/index.html', /app\-wrapper/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'backbone',
                                jsTemplate: 'handlebars',
                                jsOption: 'requirejs',
                                useServer: true,
                                testFramework: 'jasmine',
                                useAuth: true
                            });
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                });
                describe('Using Mocha', function() {
                    describe('Without Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/templates/index.hbs',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /define\(function/i],
                                ['client/templates/index.hbs', /<\/div>/i],
                                ['client/scripts/routes.js', /define\(function/i],
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
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                    describe('With Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/scripts/views/account/forgot.js',
                                'client/scripts/views/account/login.js',
                                'client/scripts/views/account/reset.js',
                                'client/scripts/views/account/settings.js',
                                'client/scripts/views/account/signup.js',
                                'client/scripts/views/layouts/default.js',
                                'client/scripts/views/modules/messages.js',
                                'client/scripts/views/modules/navbar.js',
                                'client/scripts/controllers/account.js',
                                'client/scripts/controllers/index.js',
                                'client/scripts/models/user.js',
                                'client/scripts/models/messages.js',
                                'client/templates/index.hbs',
                                'client/templates/account/forgot.hbs',
                                'client/templates/account/login.hbs',
                                'client/templates/account/reset.hbs',
                                'client/templates/account/settings.hbs',
                                'client/templates/account/signup.hbs',
                                'client/templates/layouts/default.hbs',
                                'client/templates/modules/messages.hbs',
                                'client/templates/modules/navbar.hbs',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /define/i],
                                ['client/scripts/views/account/forgot.js',/define/i],
                                ['client/scripts/views/account/login.js',/define/i],
                                ['client/scripts/views/account/reset.js',/define/i],
                                ['client/scripts/views/account/settings.js',/define/i],
                                ['client/scripts/views/account/signup.js',/define/i],
                                ['client/scripts/views/layouts/default.js',/define/i],
                                ['client/scripts/views/modules/messages.js',/define/i],
                                ['client/scripts/views/modules/navbar.js',/define/i],
                                ['client/scripts/controllers/account.js',/define/i],
                                ['client/scripts/controllers/index.js',/define/i],
                                ['client/scripts/models/user.js',/define/i],
                                ['client/scripts/models/messages.js',/define/i],
                                ['client/templates/index.hbs', /<\/div>/i],
                                ['client/templates/account/forgot.hbs',/<\/form>/i],
                                ['client/templates/account/login.hbs',/<\/form>/i],
                                ['client/templates/account/reset.hbs',/<\/form>/i],
                                ['client/templates/account/settings.hbs',/\{\{/i],
                                ['client/templates/account/signup.hbs',/<\/form>/i],
                                ['client/templates/layouts/default.hbs',/<\/div>/i],
                                ['client/templates/modules/messages.hbs',/\{\{/i],
                                ['client/templates/modules/navbar.hbs',/\{\{/i],
                                ['client/scripts/routes.js', /define/i],
                                ['client/index.html', /app\-wrapper/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'backbone',
                                jsTemplate: 'handlebars',
                                jsOption: 'requirejs',
                                useServer: true,
                                testFramework: 'mocha',
                                useAuth: true
                            });
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                });
            });
            describe('With Underscore', function() {
                describe('Using Jasmine', function() {
                    describe('Without Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/templates/index.jst',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /define\(function/i],
                                ['client/templates/index.jst', /<\/div>/i],
                                ['client/scripts/routes.js', /define\(function/i],
                                ['client/index.html', /app\-wrapper/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'backbone',
                                jsTemplate: 'underscore',
                                jsOption: 'requirejs',
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
                    describe('With Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/scripts/views/account/forgot.js',
                                'client/scripts/views/account/login.js',
                                'client/scripts/views/account/reset.js',
                                'client/scripts/views/account/settings.js',
                                'client/scripts/views/account/signup.js',
                                'client/scripts/views/layouts/default.js',
                                'client/scripts/views/modules/messages.js',
                                'client/scripts/views/modules/navbar.js',
                                'client/scripts/controllers/account.js',
                                'client/scripts/controllers/index.js',
                                'client/scripts/models/user.js',
                                'client/scripts/models/messages.js',
                                'client/templates/index.jst',
                                'client/templates/account/forgot.jst',
                                'client/templates/account/login.jst',
                                'client/templates/account/reset.jst',
                                'client/templates/account/settings.jst',
                                'client/templates/account/signup.jst',
                                'client/templates/layouts/default.jst',
                                'client/templates/modules/messages.jst',
                                'client/templates/modules/navbar.jst',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /define/i],
                                ['client/scripts/views/account/forgot.js',/define/i],
                                ['client/scripts/views/account/login.js',/define/i],
                                ['client/scripts/views/account/reset.js',/define/i],
                                ['client/scripts/views/account/settings.js',/define/i],
                                ['client/scripts/views/account/signup.js',/define/i],
                                ['client/scripts/views/layouts/default.js',/define/i],
                                ['client/scripts/views/modules/messages.js',/define/i],
                                ['client/scripts/views/modules/navbar.js',/define/i],
                                ['client/scripts/controllers/account.js',/define/i],
                                ['client/scripts/controllers/index.js',/define/i],
                                ['client/scripts/models/user.js',/define/i],
                                ['client/scripts/models/messages.js',/define/i],
                                ['client/templates/index.jst', /<\/div>/i],
                                ['client/templates/account/forgot.jst',/<\/form>/i],
                                ['client/templates/account/login.jst',/<\/form>/i],
                                ['client/templates/account/reset.jst',/<\/form>/i],
                                ['client/templates/account/settings.jst',/<\%/i],
                                ['client/templates/account/signup.jst',/<\/form>/i],
                                ['client/templates/layouts/default.jst',/<\/div>/i],
                                ['client/templates/modules/messages.jst',/<\%/i],
                                ['client/templates/modules/navbar.jst',/<\%/i],
                                ['client/scripts/routes.js', /define/i],
                                ['client/index.html', /app\-wrapper/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'backbone',
                                jsTemplate: 'underscore',
                                jsOption: 'requirejs',
                                useServer: true,
                                testFramework: 'jasmine',
                                useAuth: true
                            });
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                });
                describe('Using Mocha', function() {
                    describe('Without Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/templates/index.jst',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /define\(function/i],
                                ['client/templates/index.jst', /<\/div>/i],
                                ['client/scripts/routes.js', /define\(function/i],
                                ['client/index.html', /app\-wrapper/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'backbone',
                                jsTemplate: 'underscore',
                                jsOption: 'requirejs',
                                useServer: true,
                                testFramework: 'mocha'
                            });
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                    describe('With Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/scripts/views/account/forgot.js',
                                'client/scripts/views/account/login.js',
                                'client/scripts/views/account/reset.js',
                                'client/scripts/views/account/settings.js',
                                'client/scripts/views/account/signup.js',
                                'client/scripts/views/layouts/default.js',
                                'client/scripts/views/modules/messages.js',
                                'client/scripts/views/modules/navbar.js',
                                'client/scripts/controllers/account.js',
                                'client/scripts/controllers/index.js',
                                'client/scripts/models/user.js',
                                'client/scripts/models/messages.js',
                                'client/templates/index.jst',
                                'client/templates/account/forgot.jst',
                                'client/templates/account/login.jst',
                                'client/templates/account/reset.jst',
                                'client/templates/account/settings.jst',
                                'client/templates/account/signup.jst',
                                'client/templates/layouts/default.jst',
                                'client/templates/modules/messages.jst',
                                'client/templates/modules/navbar.jst',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /define/i],
                                ['client/scripts/views/account/forgot.js',/define/i],
                                ['client/scripts/views/account/login.js',/define/i],
                                ['client/scripts/views/account/reset.js',/define/i],
                                ['client/scripts/views/account/settings.js',/define/i],
                                ['client/scripts/views/account/signup.js',/define/i],
                                ['client/scripts/views/layouts/default.js',/define/i],
                                ['client/scripts/views/modules/messages.js',/define/i],
                                ['client/scripts/views/modules/navbar.js',/define/i],
                                ['client/scripts/controllers/account.js',/define/i],
                                ['client/scripts/controllers/index.js',/define/i],
                                ['client/scripts/models/user.js',/define/i],
                                ['client/scripts/models/messages.js',/define/i],
                                ['client/templates/index.jst', /<\/div>/i],
                                ['client/templates/account/forgot.jst',/<\/form>/i],
                                ['client/templates/account/login.jst',/<\/form>/i],
                                ['client/templates/account/reset.jst',/<\/form>/i],
                                ['client/templates/account/settings.jst',/<\%/i],
                                ['client/templates/account/signup.jst',/<\/form>/i],
                                ['client/templates/layouts/default.jst',/<\/div>/i],
                                ['client/templates/modules/messages.jst',/<\%/i],
                                ['client/templates/modules/navbar.jst',/<\%/i],
                                ['client/scripts/routes.js', /define/i],
                                ['client/index.html', /app\-wrapper/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'backbone',
                                jsTemplate: 'underscore',
                                jsOption: 'requirejs',
                                useServer: true,
                                testFramework: 'mocha',
                                useAuth: true
                            });
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                });
            });
            describe('With Jade', function() {
                describe('Using Jasmine', function() {
                    describe('Without Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/templates/index.jade',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /define\(function/i],
                                ['client/templates/index.jade', /code\.version/i],
                                ['client/scripts/routes.js', /define\(function/i],
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
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                    describe('With Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/scripts/views/account/forgot.js',
                                'client/scripts/views/account/login.js',
                                'client/scripts/views/account/reset.js',
                                'client/scripts/views/account/settings.js',
                                'client/scripts/views/account/signup.js',
                                'client/scripts/views/layouts/default.js',
                                'client/scripts/views/modules/messages.js',
                                'client/scripts/views/modules/navbar.js',
                                'client/scripts/controllers/account.js',
                                'client/scripts/controllers/index.js',
                                'client/scripts/models/user.js',
                                'client/scripts/models/messages.js',
                                'client/templates/index.jade',
                                'client/templates/account/forgot.jade',
                                'client/templates/account/login.jade',
                                'client/templates/account/reset.jade',
                                'client/templates/account/settings.jade',
                                'client/templates/account/signup.jade',
                                'client/templates/layouts/default.jade',
                                'client/templates/modules/messages.jade',
                                'client/templates/modules/navbar.jade',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /define/i],
                                ['client/scripts/views/account/forgot.js',/define/i],
                                ['client/scripts/views/account/login.js',/define/i],
                                ['client/scripts/views/account/reset.js',/define/i],
                                ['client/scripts/views/account/settings.js',/define/i],
                                ['client/scripts/views/account/signup.js',/define/i],
                                ['client/scripts/views/layouts/default.js',/define/i],
                                ['client/scripts/views/modules/messages.js',/define/i],
                                ['client/scripts/views/modules/navbar.js',/define/i],
                                ['client/scripts/controllers/account.js',/define/i],
                                ['client/scripts/controllers/index.js',/define/i],
                                ['client/scripts/models/user.js',/define/i],
                                ['client/scripts/models/messages.js',/define/i],
                                ['client/templates/index.jade', /code\.version/i],
                                ['client/templates/account/forgot.jade',/h3 /i],
                                ['client/templates/account/login.jade',/h3 /i],
                                ['client/templates/account/reset.jade',/h3 /i],
                                ['client/templates/account/settings.jade',/user\./i],
                                ['client/templates/account/signup.jade',/h3 /i],
                                ['client/templates/layouts/default.jade',/.one/i],
                                ['client/templates/modules/messages.jade',/messages\./i],
                                ['client/templates/modules/navbar.jade',/user\./i],
                                ['client/scripts/routes.js', /define/i],
                                ['client/index.html', /app\-wrapper/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'backbone',
                                jsTemplate: 'jade',
                                jsOption: 'requirejs',
                                useServer: true,
                                testFramework: 'jasmine',
                                useAuth: true
                            });
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                });
                describe('Using Mocha', function() {
                    describe('Without Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/templates/index.jade',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /define\(function/i],
                                ['client/templates/index.jade', /code\.version/i],
                                ['client/scripts/routes.js', /define\(function/i],
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
                            this.app.run([], function() {
                                assert.file(expected);
                                assert.fileContent(fileContentToTest);
                                done();
                            });
                        });
                    });
                    describe('With Auth', function() {
                        it ('Creates expected files with expected content', function(done) {
                            var expected = [
                                // add files and folders you expect to exist here.
                                'client/scripts/views/index.js',
                                'client/scripts/views/account/forgot.js',
                                'client/scripts/views/account/login.js',
                                'client/scripts/views/account/reset.js',
                                'client/scripts/views/account/settings.js',
                                'client/scripts/views/account/signup.js',
                                'client/scripts/views/layouts/default.js',
                                'client/scripts/views/modules/messages.js',
                                'client/scripts/views/modules/navbar.js',
                                'client/scripts/controllers/account.js',
                                'client/scripts/controllers/index.js',
                                'client/scripts/models/user.js',
                                'client/scripts/models/messages.js',
                                'client/templates/index.jade',
                                'client/templates/account/forgot.jade',
                                'client/templates/account/login.jade',
                                'client/templates/account/reset.jade',
                                'client/templates/account/settings.jade',
                                'client/templates/account/signup.jade',
                                'client/templates/layouts/default.jade',
                                'client/templates/modules/messages.jade',
                                'client/templates/modules/navbar.jade',
                                'client/scripts/routes.js',
                                'client/templates',
                                'client/scripts/views',
                                'client/index.html'
                            ];
                            var fileContentToTest = [
                                ['client/scripts/views/index.js', /define/i],
                                ['client/scripts/views/account/forgot.js',/define/i],
                                ['client/scripts/views/account/login.js',/define/i],
                                ['client/scripts/views/account/reset.js',/define/i],
                                ['client/scripts/views/account/settings.js',/define/i],
                                ['client/scripts/views/account/signup.js',/define/i],
                                ['client/scripts/views/layouts/default.js',/define/i],
                                ['client/scripts/views/modules/messages.js',/define/i],
                                ['client/scripts/views/modules/navbar.js',/define/i],
                                ['client/scripts/controllers/account.js',/define/i],
                                ['client/scripts/controllers/index.js',/define/i],
                                ['client/scripts/models/user.js',/define/i],
                                ['client/scripts/models/messages.js',/define/i],
                                ['client/templates/index.jade', /code\.version/i],
                                ['client/templates/account/forgot.jade',/h3 /i],
                                ['client/templates/account/login.jade',/h3 /i],
                                ['client/templates/account/reset.jade',/h3 /i],
                                ['client/templates/account/settings.jade',/user\./i],
                                ['client/templates/account/signup.jade',/h3 /i],
                                ['client/templates/layouts/default.jade',/.one/i],
                                ['client/templates/modules/messages.jade',/messages\./i],
                                ['client/templates/modules/navbar.jade',/user\./i],
                                ['client/scripts/routes.js', /define/i],
                                ['client/index.html', /app\-wrapper/i]
                            ];

                            helpers.mockPrompt(this.app, {
                                singlePageApplication: true,
                                jsFramework: 'backbone',
                                jsTemplate: 'jade',
                                jsOption: 'requirejs',
                                useServer: true,
                                testFramework: 'mocha',
                                useAuth: true
                            });
                            this.app.run([], function() {
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
});
