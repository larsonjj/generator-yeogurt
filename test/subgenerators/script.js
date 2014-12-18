/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;


describe('Script sub-generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

            done();
        }.bind(this));
    });

    describe('Create script files', function () {
        it('Handles defaults', function(done) {
            // Filename
            var script = 'myscript';
            var filesToTest = [
                'test/spec/' + script + '.spec.js',
                'client/scripts/' + script + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsOption: 'none'
            });

            this.app.run([], function() {
                createSubGenerator('script', script, {}, {
                    // mock prompt data
                    scriptFile: 'client/scripts/',
                    testFile: 'test/spec/'
                }, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles defaults without testing', function(done) {
            // Filename
            var script = 'myscript';
            var filesToTest = [
                'client/scripts/' + script + '.js'
            ];
            var filesNotCreated = [
                'test/spec/' + script + '.spec.js',
            ];

            helpers.mockPrompt(this.app, {
                jsOption: 'none',
                useTesting: false
            });

            this.app.run([], function() {
                createSubGenerator('script', script, {}, {
                    // mock prompt data
                    scriptFile: 'client/scripts/',
                    testFile: 'test/spec/'
                }, function() {
                    assert.file(filesToTest);
                    assert.noFile(filesNotCreated);
                    done();
                });
            });
        });
        it('Handles defaults with Browserify', function(done) {
            // Filename
            var script = 'myscript';
            var fileContentToTest = [
                ['test/spec/' + script + '.spec.js', /describe/i],
                ['client/scripts/' + script + '.js', /module\.exports/i]
            ];

            helpers.mockPrompt(this.app, {
                jsOption: 'browserify'
            });
            this.app.run([], function() {
                createSubGenerator('script', script, {}, {
                    // mock prompt data
                    scriptFile: 'client/scripts/',
                    testFile: 'test/spec/'
                }, function() {
                    assert.fileContent(fileContentToTest);
                    done();
                });
            });
        });
        it('Handles defaults with RequireJS', function(done) {
            // Filename
            var script = 'myscript';
            var fileContentToTest = [
                ['test/spec/' + script + '.spec.js', /define\(function\(require\)/i],
                ['client/scripts/' + script + '.js', /define\(function\(require\)/i]
            ];

            helpers.mockPrompt(this.app, {
                jsOption: 'requirejs',
                jsFramework: 'backbone'
            });
            this.app.run([], function() {
                createSubGenerator('script', script, {}, {
                    // mock prompt data
                    scriptFile: 'client/scripts/',
                    testFile: 'test/spec/'
                }, function() {
                    assert.fileContent(fileContentToTest);
                    done();
                });
            });
        });
        it('Handles defaults with Mocha', function(done) {
            // Filename
            var script = 'myscript';
            var fileContentToTest = [
                ['test/spec/' + script + '.spec.js', /jshint expr/i]
            ];

            helpers.mockPrompt(this.app, {
                jsOption: 'none',
                testFramework: 'mocha'
            });
            this.app.run([], function() {
                createSubGenerator('script', script, {}, {
                    // mock prompt data
                    scriptFile: 'client/scripts/',
                    testFile: 'test/spec/'
                }, function() {
                    assert.fileContent(fileContentToTest);
                    done();
                });
            });
        });
        it('Handles defaults with Jasmine', function(done) {
            // Filename
            var script = 'myscript';
            var fileContentToTest = [
                ['test/spec/' + script + '.spec.js', /jshint expr/i]
            ];

            helpers.mockPrompt(this.app, {
                jsOption: 'none',
                testFramework: 'requirejs'
            });
            this.app.run([], function() {
                createSubGenerator('script', script, {}, {
                    // mock prompt data
                    scriptFile: 'client/scripts/',
                    testFile: 'test/spec/'
                }, function() {
                    assert.noFileContent(fileContentToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            // Filename
            var script = 'myscript';
            var folder = 'folder/';
            var filesToTest = [
                'test/spec/' + folder + script + '.spec.js',
                'client/scripts/' + folder + script + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsOption: 'none'
            });
            this.app.run([], function() {
                createSubGenerator('script', script, {}, {
                    // mock prompt data
                    scriptFile: 'client/scripts/' + folder,
                    testFile: 'test/spec/' + folder
                }, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            // Filename
            var script = 'myscript';
            var folder = '/////folder/////';
            var filesToTest = [
                'test/spec/folder/' + script + '.spec.js',
                'client/scripts/folder/' + script + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsOption: 'none'
            });
            this.app.run([], function() {
                createSubGenerator('script', script, {}, {
                    // mock prompt data
                    scriptFile: 'client/scripts/' + folder,
                    testFile: 'test/spec/' + folder
                }, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
    });
});
