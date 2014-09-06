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
                'server/controllers/main.js',
                'server/config/express.js',
                'server/config/env',
                'server/config/env/default.js',
                'server/config/env/development.js',
                'server/config/env/production.js',
                'server/routes.js',
                'server.js'
            ];

            helpers.mockPrompt(this.app, {
                useServer: true,
                dbOption: 'none'
            });
            this.app.run([], function () {
                assert.file(expected);
                done();
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
                ['server/config/express.js', /sequelize/i]
            ];

            helpers.mockPrompt(this.app, {
                dbOption: 'mysql',
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
                ['server/routes.js', /app\.get\('\/'/i]
            ];

            helpers.mockPrompt(this.app, {
                useSinglePageApplication: false,
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
                ['server/routes.js', /app\.get\('\/'/i]
            ];

            helpers.mockPrompt(this.app, {
                useSinglePageApplication: false,
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
                    'server/templates/index.html'
                ];

                helpers.mockPrompt(this.app, {
                    useSinglePageApplication: true,
                    useServer: true
                });
                this.app.run([], function () {
                    assert.file(expected);
                    done();
                });
            });
        });
        describe('With React', function () {
            it('Creates expected files', function (done) {
                var expected = [
                    'server/modules/react-render.js',
                    'server/modules'
                ];

                helpers.mockPrompt(this.app, {
                    useSinglePageApplication: true,
                    useServer: true,
                    useServerTemplates: true,
                    jsFramework: 'react'
                });
                this.app.run([], function () {
                    assert.file(expected);
                    done();
                });
            });
        });
        describe('With Server templates', function () {
            it('Creates expected files', function (done) {
                var fileContentToTest = [
                    ['server/templates/index.html', /<\%\- body \%\>/i],
                    ['server/controllers/main.js', /reactRender/i]
                ];

                helpers.mockPrompt(this.app, {
                    useSinglePageApplication: true,
                    useServer: true,
                    useServerTemplates: true,
                    jsFramework: 'react'
                });
                this.app.run([], function () {
                    assert.fileContent(fileContentToTest);
                    done();
                });
            });
        });
        describe('Without Server templates', function () {
            it('Creates expected files', function (done) {
                var expectedContent = [
                    ['server/routes.js', /app\.get\('\*'/i]
                ];
                var fileContentToTest = [
                    ['server/templates/index.html', /<\%\- body \%\>/i],
                    ['server/controllers/main.js', /reactRender/i]
                ];

                helpers.mockPrompt(this.app, {
                    useSinglePageApplication: true,
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
                useSession: true
            });
            this.app.run([], function () {
                assert.file(expected);
                assert.fileContent(fileContentToTest);
                done();
            });
        });
    });
});
