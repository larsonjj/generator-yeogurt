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
            describe('Using Jasmine', function () {
                it ('Creates expected files with expected content', function(done) {
                    var expected = [
                        // add files and folders you expect to exist here.
                        'client/scripts/components/main.jsx',
                        'client/scripts/routes.js',
                        'client/index.html'
                    ];
                    var fileContentToTest = [
                        ['client/scripts/components/main.jsx', /className/i],
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
            describe('Using Mocha', function () {
                it ('Creates expected files with expected content', function(done) {
                    var expected = [
                        // add files and folders you expect to exist here.
                        'client/scripts/components/main.jsx',
                        'client/scripts/routes.js',
                        'client/index.html'
                    ];
                    var fileContentToTest = [
                        ['client/scripts/components/main.jsx', /className/i],
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
        });
    });
    describe('On the Server', function () {
        describe('With Browserify', function () {
            describe('Using Jasmine', function () {
                it ('Creates expected files with expected content', function(done) {
                    var expected = [
                        // add files and folders you expect to exist here.
                        'client/scripts/components/main.jsx',
                        'server/templates/index.html',
                        'client/scripts/routes.js',
                    ];
                    var fileContentToTest = [
                        ['client/scripts/components/main.jsx', /className/i],
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
            describe('Using Mocha', function () {
                it ('Creates expected files with expected content', function(done) {
                    var expected = [
                        // add files and folders you expect to exist here.
                        'client/scripts/components/main.jsx',
                        'server/templates/index.html',
                        'client/scripts/routes.js',
                    ];
                    var fileContentToTest = [
                        ['client/scripts/components/main.jsx', /className/i],
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
        });
    });
});
