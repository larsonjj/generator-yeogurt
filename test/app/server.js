/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;


describe('Yeogurt generator using Server', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

            done();
        }.bind(this));
    });
    describe('With Defaults', function () {
        it('Creates expected files', function (done) {
            var expected = [
                'grunt/config/util/open.js',
                'grunt/config/server/express.js',
                'grunt/config/server/env.js',
                'server/controllers/index.js',
                'server/config/express.js',
                'server/config/env',
                'server/config/env/default.js',
                'server/config/env/development.js',
                'server/config/env/production.js',
                'server/routes',
                'server/routes/index.js',
                'server.js'
            ];

            helpers.mockPrompt(this.app, {
                useServer: true,
                dbOption: 'none',
                useAuth: false
            });
            this.app.run([], function () {
                assert.file(expected);
                done();
            });
        });
    });
    describe('With Authentication', function () {
        describe('With Jade', function () {
            it('Creates expected files', function (done) {
                var expected = [
                    'server/templates/account/forgot.jade',
                    'server/templates/account/login.jade',
                    'server/templates/account/profile.jade',
                    'server/templates/account/reset.jade',
                    'server/templates/account/signup.jade',
                    'server/templates/partials/navbar.jade',
                    'server/templates/partials/messages.jade',
                    'server/templates/layouts/one-column.jade'
                ];

                helpers.mockPrompt(this.app, {
                    useServer: true,
                    htmlOption: 'jade',
                    dbOption: 'mongodb',
                    useAuth: true
                });
                this.app.run([], function () {
                    assert.file(expected);
                    done();
                });
            });
        });
        describe('With Swig', function () {
            it('Creates expected files', function (done) {
                var expected = [
                    'server/templates/account/forgot.swig',
                    'server/templates/account/login.swig',
                    'server/templates/account/profile.swig',
                    'server/templates/account/reset.swig',
                    'server/templates/account/signup.swig',
                    'server/templates/partials/navbar.swig',
                    'server/templates/partials/messages.swig',
                    'server/templates/layouts/one-column.swig'
                ];

                helpers.mockPrompt(this.app, {
                    useServer: true,
                    htmlOption: 'swig',
                    dbOption: 'mongodb',
                    useAuth: true
                });
                this.app.run([], function () {
                    assert.file(expected);
                    done();
                });
            });
        });
        describe('With MongoDB', function () {
            describe('With Defaults', function () {
                it('Creates expected files', function (done) {
                    var expected = [
                        'server/controllers/user.js',
                        'server/controllers/account.js',
                        'server/routes/user.js',
                        'server/routes/account.js',
                        'server/auth/index.js',
                    ];

                    helpers.mockPrompt(this.app, {
                        useServer: true,
                        dbOption: 'mongodb',
                        useAuth: true
                    });
                    this.app.run([], function () {
                        assert.file(expected);
                        done();
                    });
                });
            });
            describe('With Local Authentication', function () {
                it('Creates expected files', function (done) {
                    var expected = [
                        'server/auth/strategies/local.js',
                    ];
                    var fileContentToTest = [
                        ['server/auth/strategies/local.js', /findOne/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        useServer: true,
                        dbOption: 'mongodb',
                        useAuth: true,
                        authTypes: ['local']
                    });
                    this.app.run([], function () {
                        assert.file(expected);
                        assert.fileContent(fileContentToTest);
                        done();
                    });
                });
            });
            describe('With Twitter Authentication', function () {
                it('Creates expected files', function (done) {
                    var expected = [
                        'server/auth/strategies/twitter.js',
                    ];
                    var fileContentToTest = [
                        ['server/auth/strategies/twitter.js', /findOne/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        useServer: true,
                        dbOption: 'mongodb',
                        useAuth: true,
                        authTypes: ['twitter']
                    });
                    this.app.run([], function () {
                        assert.file(expected);
                        assert.fileContent(fileContentToTest);
                        done();
                    });
                });
            });
            describe('With Facebook Authentication', function () {
                it('Creates expected files', function (done) {
                    var expected = [
                        'server/auth/strategies/facebook.js',
                    ];
                    var fileContentToTest = [
                        ['server/auth/strategies/facebook.js', /findOne/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        useServer: true,
                        dbOption: 'mongodb',
                        useAuth: true,
                        authTypes: ['facebook']
                    });
                    this.app.run([], function () {
                        assert.file(expected);
                        assert.fileContent(fileContentToTest);
                        done();
                    });
                });
            });
        });
        describe('With MySQL', function () {
            describe('With Defaults', function () {
                it('Creates expected files', function (done) {
                    var expected = [
                        'server/controllers/user.js',
                        'server/controllers/account.js',
                        'server/routes/user.js',
                        'server/routes/account.js',
                        'server/auth/index.js',
                    ];

                    helpers.mockPrompt(this.app, {
                        useServer: true,
                        dbOption: 'mysql',
                        useAuth: true
                    });
                    this.app.run([], function () {
                        assert.file(expected);
                        done();
                    });
                });
            });
            describe('With Local Authentication', function () {
                it('Creates expected files', function (done) {
                    var expected = [
                        'server/auth/strategies/local.js',
                    ];
                    var fileContentToTest = [
                        ['server/auth/strategies/local.js', /\.success/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        useServer: true,
                        dbOption: 'mysql',
                        useAuth: true,
                        authTypes: ['local']
                    });
                    this.app.run([], function () {
                        assert.file(expected);
                        assert.fileContent(fileContentToTest);
                        done();
                    });
                });
            });
            describe('With Twitter Authentication', function () {
                it('Creates expected files', function (done) {
                    var expected = [
                        'server/auth/strategies/twitter.js',
                    ];
                    var fileContentToTest = [
                        ['server/auth/strategies/twitter.js', /\.success/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        useServer: true,
                        dbOption: 'mysql',
                        useAuth: true,
                        authTypes: ['twitter']
                    });
                    this.app.run([], function () {
                        assert.file(expected);
                        assert.fileContent(fileContentToTest);
                        done();
                    });
                });
            });
            describe('With Facebook Authentication', function () {
                it('Creates expected files', function (done) {
                    var expected = [
                        'server/auth/strategies/facebook.js',
                    ];
                    var fileContentToTest = [
                        ['server/auth/strategies/facebook.js', /\.success/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        useServer: true,
                        dbOption: 'mysql',
                        useAuth: true,
                        authTypes: ['facebook']
                    });
                    this.app.run([], function () {
                        assert.file(expected);
                        assert.fileContent(fileContentToTest);
                        done();
                    });
                });
            });
            describe('With JWT', function () {
                it('Creates expected files', function (done) {
                    var fileContentToTest = [
                        ['server/auth/index.js', /express\-jwt/i],
                        ['server/auth/index.js', /signToken/i],
                        ['server/auth/index.js', /setTokenCookie/i],
                        ['server/controllers/user.js', /\!req.xhr/i],
                        ['server/controllers/account.js', /\!req.xhr/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        useServer: true,
                        dbOption: 'mysql',
                        useAuth: true,
                        authTypes: ['facebook']
                    });
                    this.app.run([], function () {
                        assert.fileContent(fileContentToTest);
                        done();
                    });
                });
            });
        });
    });
    describe('With MongoDB Database', function () {
        it('Creates expected files', function (done) {
            var expected = [
                'server/config/database.js'
            ];
            var fileContentToTest = [
                ['server/config/database.js', /mongoose/i]
            ];

            helpers.mockPrompt(this.app, {
                dbOption: 'mongodb',
                useServer: true
            });
            this.app.run([], function () {
                assert.file(expected);
                assert.fileContent(fileContentToTest);
                done();
            });
        });
    });
    describe('With MySQL Database', function () {
        it('Creates expected files', function (done) {
            var expected = [
                'server/config/database.js'
            ];
            var fileContentToTest = [
                ['server/config/database.js', /sequelize/i],
            ];

            helpers.mockPrompt(this.app, {
                dbOption: 'mysql',
                useServer: true
            });
            this.app.run([], function () {
                assert.file(expected);
                assert.fileContent(fileContentToTest);
                done();
            });
        });
    });
    describe('With Static Jade', function () {
        it('Creates expected files', function (done) {
            var expected = [
                'server/templates/layouts/base.jade',
                'server/templates/index.jade',
            ];
            var expectedContent = [
                ['server/routes/index.js', /app\.get\('\/'/i]
            ];

            helpers.mockPrompt(this.app, {
                singlePageApplication: false,
                htmlOption: 'jade',
                useServer: true
            });
            this.app.run([], function () {
                assert.file(expected);
                assert.fileContent(expectedContent);
                done();
            });
        });
    });
    describe('With Static Swig', function () {
        it('Creates expected files', function (done) {
            var expected = [
                'server/templates/layouts/base.swig',
                'server/templates/index.swig',
            ];
            var expectedContent = [
                ['server/routes/index.js', /app\.get\('\/'/i]
            ];

            helpers.mockPrompt(this.app, {
                singlePageApplication: false,
                htmlOption: 'swig',
                useServer: true
            });
            this.app.run([], function () {
                assert.file(expected);
                assert.fileContent(expectedContent);
                done();
            });
        });
    });
    describe('With Single Page Application', function () {
        describe('With Defaults', function () {
            it('Creates expected files', function (done) {
                var expected = [
                    'client/index.html'
                ];
                var fileContentToTest = [
                    ['server/auth/index.js', /express\-jwt/i],
                    ['server/auth/index.js', /signToken/i],
                    ['server/auth/index.js', /setTokenCookie/i]
                ]

                helpers.mockPrompt(this.app, {
                    singlePageApplication: true,
                    useServer: true
                });
                this.app.run([], function () {
                    assert.file(expected);
                    assert.fileContent(fileContentToTest);
                    done();
                });
            });
        });
        describe('Without Server templates', function () {
            it('Creates expected files', function (done) {
                var expectedContent = [
                    ['server/routes/index.js', /app\.get\('\/\*'/i]
                ];
                var fileContentToTest = [
                    ['client/index.html', /<\%\- body \%\>/i],
                    ['server/controllers/index.js', /reactRender/i]
                ];

                helpers.mockPrompt(this.app, {
                    singlePageApplication: true,
                    useServer: true,
                    useServerTemplates: false,
                    jsFramework: 'react'
                });
                this.app.run([], function () {
                    assert.noFileContent(fileContentToTest);
                    assert.fileContent(expectedContent);
                    done();
                });
            });
        });
    });
    describe('With Paypal\'s Lucsa Security Module', function () {
        it('Creates expected files', function (done) {
            var expected = [
                'server/config/security.js'
            ];
            var fileContentToTest = [
                ['server/config/express.js', /lusca/i],
                ['server/config/env/default.js', /security/i]
            ];

            helpers.mockPrompt(this.app, {
                useServer: true,
                useSecurity: true
            });
            this.app.run([], function () {
                assert.file(expected);
                assert.fileContent(fileContentToTest);
                done();
            });
        });
    });
    describe('With Cookie Sessions', function () {
        it('Creates expected files', function (done) {
            var expected = [
                'server/config/secrets.js'
            ];
            var fileContentToTest = [
                ['server/config/express.js', /app.use\(session\(\{/i],
            ];

            helpers.mockPrompt(this.app, {
                useServer: true,
                useAuth: true
            });
            this.app.run([], function () {
                assert.file(expected);
                assert.fileContent(fileContentToTest);
                done();
            });
        });
    });
});
