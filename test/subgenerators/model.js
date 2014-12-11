/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;


describe('Model sub-generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

            done();
        }.bind(this));
    });

    describe('Does not create any model files when using Static Site', function () {
        it('Handles defaults', function(done) {
            // Filename
            var model = 'mymodel';
            var filesToTest = [
                'test/spec/models/' + model + '.js',
                'client/scripts/models/' + model + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: false,
                singlePageApplication: false,
                htmlOption: 'swig'
            });
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/',
                    testFile: 'test/spec/models/'
                }, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Does not create any model files when using React', function () {
        it('Handles defaults', function(done) {
            // Filename
            var model = 'mymodel';
            var filesToTest = [
                'test/spec/models/' + model + '.js',
                'client/scripts/models/' + model + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'react'
            });
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/',
                    testFile: 'test/spec/models/'
                }, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            helpers.mockPrompt(this.app, {
                jsFramework: 'react'
            });
            // Filename
            var model = 'mymodel';
            var folder = 'folder/';
            var filesToTest = [
                'test/spec/models/' + folder + model + '.js',
                'client/scripts/models/' + folder + model + '.js'
            ];
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/' + folder,
                    testFile: 'test/spec/models/' + folder
                }, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            helpers.mockPrompt(this.app, {
                jsFramework: 'react'
            });
            // Filename
            var model = 'mymodel';
            var folder = '/////folder/////';
            var filesToTest = [
                'test/spec/models/folder/' + model + '.js',
                'client/scripts/models/folder/' + model + '.js'
            ];
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/' + folder,
                    testFile: 'test/spec/models/' + folder
                }, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Does not create any model files when using Static Jade', function () {
        it('Handles defaults', function(done) {
            // Filename
            var model = 'mymodel';
            var filesToTest = [
                'test/spec/models/' + model + '.js',
                'client/scripts/models/' + model + '.js'
            ];

            helpers.mockPrompt(this.app, {
                htmlOption: 'jade',
                singlePageApplication: false
            });
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/',
                    testFile: 'test/spec/models/'
                }, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'jade',
                singlePageApplication: false
            });
            // Filename
            var model = 'mymodel';
            var folder = 'folder/';
            var filesToTest = [
                'test/spec/models/' + folder + model + '.js',
                'client/scripts/models/' + folder + model + '.js'
            ];
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/' + folder,
                    testFile: 'test/spec/models/' + folder
                }, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'jade',
                singlePageApplication: false
            });
            // Filename
            var model = 'mymodel';
            var folder = '/////folder/////';
            var filesToTest = [
                'test/spec/models/folder/' + model + '.js',
                'client/scripts/models/folder/' + model + '.js'
            ];
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/' + folder,
                    testFile: 'test/spec/models/' + folder
                }, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Does not create any model files when using Static Swig', function() {
        it('Handles defaults', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'swig',
                singlePageApplication: false
            });
            // Filename
            var model = 'mymodel';
            var filesToTest = [
                'test/spec/models/' + model + '.js',
                'client/scripts/models/' + model + '.js'
            ];
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/',
                    testFile: 'test/spec/models/'
                }, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'swig',
                singlePageApplication: false
            });
            // Filename
            var model = 'mymodel';
            var folder = 'folder/';
            var filesToTest = [
                'test/spec/models/' + folder + model + '.js',
                'client/scripts/models/' + folder + model + '.js'
            ];
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/' + folder,
                    testFile: 'test/spec/models/' + folder
                }, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'swig',
                singlePageApplication: false
            });
            // Filename
            var model = 'mymodel';
            var folder = '/////folder/////';
            var filesToTest = [
                'test/spec/models/folder/' + model + '.js',
                'client/scripts/models/folder/' + model + '.js'
            ];
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/' + folder,
                    testFile: 'test/spec/models/' + folder
                }, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Create model files when using Backbone', function () {
        it('Handles defaults', function(done) {
            // Filename
            var model = 'mymodel';
            var filesToTest = [
                'test/spec/models/' + model + '-spec.js',
                'client/scripts/models/' + model + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'underscore',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/',
                    testFile: 'test/spec/models/'
                }, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles defaults with no testing', function(done) {
            // Filename
            var model = 'mymodel';
            var filesToTest = [
                'client/scripts/models/' + model + '.js'
            ];
            var filesNotCreated = [
                'test/spec/models/' + model + '-spec.js',
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                useTesting: false,
                jsTemplate: 'underscore',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/',
                    testFile: 'test/spec/models/'
                }, function() {
                    assert.file(filesToTest);
                    assert.noFile(filesNotCreated);
                    done();
                });
            });
        });
        it('Handles defaults with Browserify', function(done) {
            // Filename
            var model = 'mymodel';
            var fileContentToTest = [
                ['test/spec/models/' + model + '-spec.js', /describe/i],
                ['client/scripts/models/' + model + '.js', /module\.exports/i]
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'underscore',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/',
                    testFile: 'test/spec/models/'
                }, function() {
                    assert.fileContent(fileContentToTest);
                    done();
                });
            });
        });
        it('Handles defaults with RequireJS', function(done) {
            // Filename
            var model = 'mymodel';
            var fileContentToTest = [
                ['test/spec/models/' + model + '-spec.js', /define\(function\(require\)/i],
                ['client/scripts/models/' + model + '.js', /define\(function\(require\)/i]
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'underscore',
                jsOption: 'requirejs',
                testFramework: 'jasmine'
            });
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/',
                    testFile: 'test/spec/models/'
                }, function() {
                    assert.fileContent(fileContentToTest);
                    done();
                });
            });
        });
        it('Handles defaults with Mocha', function(done) {
            // Filename
            var model = 'mymodel';
            var fileContentToTest = [
                ['test/spec/models/' + model + '-spec.js', /jshint expr/i],
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'underscore',
                jsOption: 'requirejs',
                testFramework: 'mocha'
            });
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/',
                    testFile: 'test/spec/models/'
                }, function() {
                    assert.fileContent(fileContentToTest);
                    done();
                });
            });
        });
        it('Handles defaults with Jasmine', function(done) {
            // Filename
            var model = 'mymodel';
            var fileContentToTest = [
                ['test/spec/models/' + model + '-spec.js', /jshint expr/i],
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'underscore',
                jsOption: 'requirejs',
                testFramework: 'jasmine'
            });
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/',
                    testFile: 'test/spec/models/'
                }, function() {
                    assert.noFileContent(fileContentToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            // Filename
            var model = 'mymodel';
            var folder = 'folder/';
            var filesToTest = [
                'test/spec/models/' + folder + model + '-spec.js',
                'client/scripts/models/' + folder + model + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'underscore',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/' + folder,
                    testFile: 'test/spec/models/' + folder
                }, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            // Filename
            var model = 'mymodel';
            var folder = '/////folder/////';
            var filesToTest = [
                'test/spec/models/folder/' + model + '-spec.js',
                'client/scripts/models/folder/' + model + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'underscore',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run([], function() {
                createSubGenerator('model', model, {}, {
                    // mock prompt data
                    modelFile: 'client/scripts/models/' + folder,
                    testFile: 'test/spec/models/' + folder
                }, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
    });
});
