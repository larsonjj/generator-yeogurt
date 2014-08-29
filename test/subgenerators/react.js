/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;


describe('React sub-generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

            done();
        }.bind(this));
    });

    describe('Does not create any react files when using Backbone', function () {
        it('Handles defaults', function(done) {
            // Filename
            var react = 'myreact';
            var filesToTest = [
                'test/spec/components/' + react + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'lodash',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run([], function() {
                createSubGenerator('react', react, {}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'lodash',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            // Filename
            var react = 'myreact';
            var folder = 'folder/';
            var filesToTest = [
                'test/spec/components/' + folder + react + '.jsx'
            ];
            this.app.run([], function() {
                createSubGenerator('react', react, {folder: folder}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'lodash',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            // Filename
            var react = 'myreact';
            var folder = '/////folder/////';
            var filesToTest = [
                'test/spec/components/folder/' + react + '.jsx'
            ];
            this.app.run([], function() {
                createSubGenerator('react', react, {folder: folder}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Does not create any react files when using Static Jade', function () {
        it('Handles defaults', function(done) {
            // Filename
            var react = 'myreact';
            var filesToTest = [
                'test/spec/components/' + react + '.js'
            ];

            helpers.mockPrompt(this.app, {
                htmlOption: 'jade'
            });
            this.app.run([], function() {
                createSubGenerator('react', react, {}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'jade'
            });
            // Filename
            var react = 'myreact';
            var folder = 'folder/';
            var filesToTest = [
                'test/spec/components/' + folder + react + '.jsx'
            ];
            this.app.run([], function() {
                createSubGenerator('react', react, {folder: folder}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'jade'
            });
            // Filename
            var react = 'myreact';
            var folder = '/////folder/////';
            var filesToTest = [
                'test/spec/components/folder/' + react + '.jsx'
            ];
            this.app.run([], function() {
                createSubGenerator('react', react, {folder: folder}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Does not create any react files when using Static Swig', function() {
        it('Handles defaults', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'swig'
            });
            // Filename
            var react = 'myreact';
            var filesToTest = [
                'test/spec/components/' + react + '.js'
            ];
            this.app.run([], function() {
                createSubGenerator('react', react, {}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'swig'
            });
            // Filename
            var react = 'myreact';
            var folder = 'folder/';
            var filesToTest = [
                'test/spec/components/' + folder + react + '.jsx'
            ];
            this.app.run([], function() {
                createSubGenerator('react', react, {folder: folder}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'swig'
            });
            // Filename
            var react = 'myreact';
            var folder = '/////folder/////';
            var filesToTest = [
                'test/spec/components/folder/' + react + '.jsx'
            ];
            this.app.run([], function() {
                createSubGenerator('react', react, {folder: folder}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Create react files when using React', function () {
        it('Handles defaults', function(done) {
            // Filename
            var react = 'myreact';
            var filesToTest = [
                'test/spec/components/' + react + '-spec.js',
                'client/scripts/components/' + react + '.jsx'
            ];
            var fileContentToTest = [
                ['test/spec/components/' + react + '-spec.js', /\@jsx React\.DOM /i],
                ['client/scripts/components/' + react + '.jsx', /\@jsx React\.DOM /i]
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'react'
            });
            this.app.run([], function() {
                createSubGenerator('react', react, {}, function() {
                    assert.file(filesToTest);
                    assert.fileContent(fileContentToTest);
                    done();
                });
            });
        });
        it('Handles defaults with Mocha', function(done) {
            // Filename
            var react = 'myreact';
            var fileContentToTest = [
                ['test/spec/components/' + react + '-spec.js', /jshint expr/i],
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'react',
                testFramework: 'mocha'
            });
            this.app.run([], function() {
                createSubGenerator('react', react, {}, function() {
                    assert.fileContent(fileContentToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            // Filename
            var react = 'myreact';
            var folder = 'folder/';
            var filesToTest = [
                'test/spec/components/' + folder + react + '-spec.js',
                'client/scripts/components/' + folder + react + '.jsx'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'react'
            });
            this.app.run([], function() {
                createSubGenerator('react', react, {folder: folder}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            // Filename
            var react = 'myreact';
            var folder = '/////folder/////';
            var filesToTest = [
                'test/spec/components/folder/' + react + '-spec.js',
                'client/scripts/components/folder/' + react + '.jsx'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'react'
            });
            this.app.run([], function() {
                createSubGenerator('react', react, {folder: folder}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
    });
});
