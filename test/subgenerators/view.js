/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;

describe('View sub-generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

            done();
        }.bind(this));
    });

    describe('Does not create any view files when using React', function () {
        it('Handles defaults', function(done) {
            // Filename
            var view = 'myview';
            var filesToTest = [
                'client/scripts/views/' + view + '.js',
                'test/spec/views/' + view + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'react',
                singlePageApplication: true
            });

            this.app.run([], function() {
                createSubGenerator('view', view, {}, {
                    // mock prompt data
                    viewFile: 'client/scripts/views/',
                    templateFile: 'client/templates',
                    testFile: 'test/spec/views'
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
            var view = 'myview';
            var folder = 'folder/';
            var filesToTest = [
                'test/spec/views/' + folder + view + '.js',
                'client/scripts/views/' + folder + view + '.js'
            ];

            this.app.run([], function() {
                createSubGenerator('view', view, {}, {
                    // mock prompt data
                    viewFile: 'client/scripts/views/' + folder,
                    templateFile: 'client/templates/' + folder,
                    testFile: 'test/spec/views/' + folder
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
            var view = 'myview';
            var folder = '/////folder/////';
            var filesToTest = [
                'test/spec/views/folder/' + view + '.js',
                'client/scripts/views/folder/' + view + '.js'
            ];

            this.app.run([], function() {
                createSubGenerator('view', view, {}, {
                    // mock prompt data
                    viewFile: 'client/scripts/views/' + folder,
                    templateFile: 'client/templates/' + folder,
                    testFile: 'test/spec/views/' + folder
                }, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Does not create any view files when using Static Jade', function () {
        it('Handles defaults', function(done) {
            // Filename
            var view = 'myview';
            var filesToTest = [
                'client/scripts/views/' + view + '.js',
                'test/spec/views/' + view + '.js'
            ];

            helpers.mockPrompt(this.app, {
                htmlOption: 'jade',
                singlePageApplication: false
            });

            this.app.run([], function() {
                createSubGenerator('view', view, {}, {
                    // mock prompt data
                    viewFile: 'client/scripts/views/',
                    templateFile: 'client/templates',
                    testFile: 'test/spec/views'
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
            var view = 'myview';
            var folder = 'folder/';
            var filesToTest = [
                'test/spec/views/' + folder + view + '.js',
                'client/scripts/views/' + folder + view + '.js'
            ];

            this.app.run([], function() {
                createSubGenerator('view', view, {}, {
                    // mock prompt data
                    viewFile: 'client/scripts/views/' + folder,
                    templateFile: 'client/templates/' + folder,
                    testFile: 'test/spec/views/' + folder
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
            var view = 'myview';
            var folder = '/////folder/////';
            var filesToTest = [
                'test/spec/views/folder/' + view + '.js',
                'client/scripts/views/folder/' + view + '.js'
            ];

            this.app.run([], function() {
                createSubGenerator('view', view, {}, {
                    // mock prompt data
                    viewFile: 'client/scripts/views/' + folder,
                    templateFile: 'client/templates/' + folder,
                    testFile: 'test/spec/views/' + folder
                }, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Does not create any view files when using Static Swig', function() {
        it('Handles defaults', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'swig',
                singlePageApplication: false
            });
            // Filename
            var view = 'myview';
            var filesToTest = [
                'client/scripts/views/' + view + '.js',
                'test/spec/views/' + view + '.js'
            ];

            this.app.run([], function() {
                createSubGenerator('view', view, {}, {
                    // mock prompt data
                    viewFile: 'client/scripts/views/',
                    templateFile: 'client/templates',
                    testFile: 'test/spec/views'
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
            var view = 'myview';
            var folder = 'folder/';
            var filesToTest = [
                'test/spec/views/' + folder + view + '.js',
                'client/scripts/views/' + folder + view + '.js'
            ];

            this.app.run([], function() {
                createSubGenerator('view', view, {}, {
                    // mock prompt data
                    viewFile: 'client/scripts/views/' + folder,
                    templateFile: 'client/templates/' + folder,
                    testFile: 'test/spec/views/' + folder
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
            var view = 'myview';
            var folder = '/////folder/////';
            var filesToTest = [
                'test/spec/views/folder/' + view + '.js',
                'client/scripts/views/folder/' + view + '.js'
            ];

            this.app.run([], function() {
                createSubGenerator('view', view, {}, {
                    // mock prompt data
                    viewFile: 'client/scripts/views/' + folder,
                    templateFile: 'client/templates/' + folder,
                    testFile: 'test/spec/views/' + folder
                }, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Create view files when using Backbone', function () {
        it('Without testing', function(done) {
            // Filename
            var view = 'myview';
            var filesNotCreated = [
                'test/spec/views/' + view + '-spec.js',
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                useTesting: false,
                jsTemplate: 'lodash',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run([], function() {
                createSubGenerator('view', view, {}, {
                    // mock prompt data
                    viewFile: 'client/scripts/views/',
                    templateFile: 'client/templates',
                    testFile: 'test/spec/views'
                }, function() {
                    assert.noFile(filesNotCreated);
                    done();
                });
            });
        });
        describe('Handles defaults with Lo-dash', function () {
            describe('Using Browserify', function() {
                it('Using Jasmine', function(done) {
                    // Filename
                    var view = 'myview';
                    var filesToTest = [
                        'test/spec/views/' + view + '-spec.js',
                        'client/scripts/views/' + view + '.js',
                        'client/templates/' + view + '.jst'
                    ];
                    var fileContentToTest = [
                        ['client/templates/' + view + '.jst', /<div>/i],
                        ['client/scripts/views/' + view + '.js', /module\.exports/i],
                        ['test/spec/views/' + view + '-spec.js', /describe/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        jsFramework: 'backbone',
                        singlePageApplication: true,
                        jsTemplate: 'lodash',
                        jsOption: 'browserify',
                        testFramework: 'jasmine'
                    });
                    this.app.run([], function() {
                        createSubGenerator('view', view, {}, {
                            // mock prompt data
                            viewFile: 'client/scripts/views/',
                            templateFile: 'client/templates',
                            testFile: 'test/spec/views'
                        }, function() {
                            assert.file(filesToTest);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                it('Using Mocha', function(done) {
                    // Filename
                    var view = 'myview';
                    var filesToTest = [
                        'test/spec/views/' + view + '-spec.js',
                        'client/scripts/views/' + view + '.js',
                        'client/templates/' + view + '.jst'
                    ];
                    var fileContentToTest = [
                        ['client/templates/' + view + '.jst', /<div>/i],
                        ['client/scripts/views/' + view + '.js', /module\.exports/i],
                        ['test/spec/views/' + view + '-spec.js', /describe/i],
                        ['test/spec/views/' + view + '-spec.js', /jshint expr/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        jsFramework: 'backbone',
                        singlePageApplication: true,
                        jsTemplate: 'lodash',
                        jsOption: 'browserify',
                        testFramework: 'mocha'
                    });
                    this.app.run([], function() {
                        createSubGenerator('view', view, {}, {
                            // mock prompt data
                            viewFile: 'client/scripts/views/',
                            templateFile: 'client/templates',
                            testFile: 'test/spec/views'
                        }, function() {
                            assert.file(filesToTest);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
            describe('Using RequireJS', function() {
                it('Using Jasmine', function(done) {
                    // Filename
                    var view = 'myview';
                    var filesToTest = [
                        'test/spec/views/' + view + '-spec.js',
                        'client/scripts/views/' + view + '.js',
                        'client/templates/' + view + '.jst'
                    ];
                    var fileContentToTest = [
                        ['client/templates/' + view + '.jst', /<div>/i],
                        ['client/scripts/views/' + view + '.js', /define\(function\(require\)/i],
                        ['test/spec/views/' + view + '-spec.js', /define\(function\(require\)/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        jsFramework: 'backbone',
                        singlePageApplication: true,
                        jsTemplate: 'lodash',
                        jsOption: 'requirejs',
                        testFramework: 'jasmine'
                    });
                    this.app.run([], function() {
                        createSubGenerator('view', view, {}, {
                            // mock prompt data
                            viewFile: 'client/scripts/views/',
                            templateFile: 'client/templates',
                            testFile: 'test/spec/views'
                        }, function() {
                            assert.file(filesToTest);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                it('Using Mocha', function(done) {
                    // Filename
                    var view = 'myview';
                    var filesToTest = [
                        'test/spec/views/' + view + '-spec.js',
                        'client/scripts/views/' + view + '.js',
                        'client/templates/' + view + '.jst'
                    ];
                    var fileContentToTest = [
                        ['client/templates/' + view + '.jst', /<div>/i],
                        ['client/scripts/views/' + view + '.js', /define\(function\(require\)/i],
                        ['test/spec/views/' + view + '-spec.js', /define\(function\(require\)/i],
                        ['test/spec/views/' + view + '-spec.js', /jshint expr/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        jsFramework: 'backbone',
                        singlePageApplication: true,
                        jsTemplate: 'lodash',
                        jsOption: 'requirejs',
                        testFramework: 'mocha'
                    });
                    this.app.run([], function() {
                        createSubGenerator('view', view, {}, {
                            // mock prompt data
                            viewFile: 'client/scripts/views/',
                            templateFile: 'client/templates',
                            testFile: 'test/spec/views'
                        }, function() {
                            assert.file(filesToTest);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
        });
        describe('Handles defaults with Handlebars', function() {
            describe('Using Browserify', function() {
                it('Using Jasmine', function(done) {
                    // Filename
                    var view = 'myview';
                    var filesToTest = [
                        'test/spec/views/' + view + '-spec.js',
                        'client/scripts/views/' + view + '.js',
                        'client/templates/' + view + '.hbs'
                    ];
                    var fileContentToTest = [
                        ['client/templates/' + view + '.hbs', /<div>/i],
                        ['client/scripts/views/' + view + '.js', /module\.exports/i],
                        ['test/spec/views/' + view + '-spec.js', /describe/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        jsFramework: 'backbone',
                        singlePageApplication: true,
                        jsTemplate: 'handlebars',
                        jsOption: 'browserify',
                        testFramework: 'jasmine'
                    });
                    this.app.run([], function() {
                        createSubGenerator('view', view, {}, {
                            // mock prompt data
                            viewFile: 'client/scripts/views/',
                            templateFile: 'client/templates',
                            testFile: 'test/spec/views'
                        }, function() {
                            assert.file(filesToTest);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                it('Using Mocha', function(done) {
                    // Filename
                    var view = 'myview';
                    var filesToTest = [
                        'test/spec/views/' + view + '-spec.js',
                        'client/scripts/views/' + view + '.js',
                        'client/templates/' + view + '.hbs'
                    ];
                    var fileContentToTest = [
                        ['client/templates/' + view + '.hbs', /<div>/i],
                        ['client/scripts/views/' + view + '.js', /module\.exports/i],
                        ['test/spec/views/' + view + '-spec.js', /describe/i],
                        ['test/spec/views/' + view + '-spec.js', /jshint expr/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        jsFramework: 'backbone',
                        singlePageApplication: true,
                        jsTemplate: 'handlebars',
                        jsOption: 'browserify',
                        testFramework: 'mocha'
                    });
                    this.app.run([], function() {
                        createSubGenerator('view', view, {}, {
                            // mock prompt data
                            viewFile: 'client/scripts/views/',
                            templateFile: 'client/templates',
                            testFile: 'test/spec/views'
                        }, function() {
                            assert.file(filesToTest);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
            describe('Using RequireJS', function() {
                it('Using Jasmine', function(done) {
                    // Filename
                    var view = 'myview';
                    var filesToTest = [
                        'test/spec/views/' + view + '-spec.js',
                        'client/scripts/views/' + view + '.js',
                        'client/templates/' + view + '.hbs'
                    ];
                    var fileContentToTest = [
                        ['client/templates/' + view + '.hbs', /<div>/i],
                        ['client/scripts/views/' + view + '.js', /define\(function\(require\)/i],
                        ['test/spec/views/' + view + '-spec.js', /define\(function\(require\)/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        jsFramework: 'backbone',
                        singlePageApplication: true,
                        jsTemplate: 'handlebars',
                        jsOption: 'requirejs',
                        testFramework: 'jasmine'
                    });
                    this.app.run([], function() {
                        createSubGenerator('view', view, {}, {
                            // mock prompt data
                            viewFile: 'client/scripts/views/',
                            templateFile: 'client/templates',
                            testFile: 'test/spec/views'
                        }, function() {
                            assert.file(filesToTest);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
                it('Using Mocha', function(done) {
                    // Filename
                    var view = 'myview';
                    var filesToTest = [
                        'test/spec/views/' + view + '-spec.js',
                        'client/scripts/views/' + view + '.js',
                        'client/templates/' + view + '.hbs'
                    ];
                    var fileContentToTest = [
                        ['client/templates/' + view + '.hbs', /<div>/i],
                        ['client/scripts/views/' + view + '.js', /define\(function\(require\)/i],
                        ['test/spec/views/' + view + '-spec.js', /define\(function\(require\)/i],
                        ['test/spec/views/' + view + '-spec.js', /jshint expr/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        jsFramework: 'backbone',
                        singlePageApplication: true,
                        jsTemplate: 'handlebars',
                        jsOption: 'requirejs',
                        testFramework: 'mocha'
                    });
                    this.app.run([], function() {
                        createSubGenerator('view', view, {}, {
                            // mock prompt data
                            viewFile: 'client/scripts/views/',
                            templateFile: 'client/templates',
                            testFile: 'test/spec/views'
                        }, function() {
                            assert.file(filesToTest);
                            assert.fileContent(fileContentToTest);
                            done();
                        });
                    });
                });
            });
        });
        describe('Handles defaults with Jade', function() {
            describe('Using Browserify', function() {
                it('Using Jasmine', function(done) {
                    // Filename
                    var view = 'myview';
                    var filesToTest = [
                        'test/spec/views/' + view + '-spec.js',
                        'client/scripts/views/' + view + '.js',
                        'client/templates/' + view + '.jade'
                    ];
                    var fileContentToTest = [
                        ['client/scripts/views/' + view + '.js', /module\.exports/i],
                        ['test/spec/views/' + view + '-spec.js', /describe/i]
                    ];
                    var fileContentToNotFind = [
                        ['client/templates/' + view + '.jade', /<div>/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        jsFramework: 'backbone',
                        singlePageApplication: true,
                        jsTemplate: 'jade',
                        jsOption: 'browserify',
                        testFramework: 'jasmine'
                    });
                    this.app.run([], function() {
                        createSubGenerator('view', view, {}, {
                            // mock prompt data
                            viewFile: 'client/scripts/views/',
                            templateFile: 'client/templates',
                            testFile: 'test/spec/views'
                        }, function() {
                            assert.file(filesToTest);
                            assert.fileContent(fileContentToTest);
                            assert.noFileContent(fileContentToNotFind);
                            done();
                        });
                    });
                });
                it('Using Mocha', function(done) {
                    // Filename
                    var view = 'myview';
                    var filesToTest = [
                        'test/spec/views/' + view + '-spec.js',
                        'client/scripts/views/' + view + '.js',
                        'client/templates/' + view + '.jade'
                    ];
                    var fileContentToTest = [
                        ['client/scripts/views/' + view + '.js', /module\.exports/i],
                        ['test/spec/views/' + view + '-spec.js', /describe/i],
                        ['test/spec/views/' + view + '-spec.js', /jshint expr/i]
                    ];
                    var fileContentToNotFind = [
                        ['client/templates/' + view + '.jade', /<div>/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        jsFramework: 'backbone',
                        singlePageApplication: true,
                        jsTemplate: 'jade',
                        jsOption: 'browserify',
                        testFramework: 'mocha'
                    });
                    this.app.run([], function() {
                        createSubGenerator('view', view, {}, {
                            // mock prompt data
                            viewFile: 'client/scripts/views/',
                            templateFile: 'client/templates',
                            testFile: 'test/spec/views'
                        }, function() {
                            assert.file(filesToTest);
                            assert.fileContent(fileContentToTest);
                            assert.noFileContent(fileContentToNotFind);
                            done();
                        });
                    });
                });
            });
            describe('Using RequireJS', function() {
                it('Using Jasmine', function(done) {
                    // Filename
                    var view = 'myview';
                    var filesToTest = [
                        'test/spec/views/' + view + '-spec.js',
                        'client/scripts/views/' + view + '.js',
                        'client/templates/' + view + '.jade'
                    ];
                    var fileContentToTest = [
                        ['client/scripts/views/' + view + '.js', /define\(function\(require\)/i],
                        ['test/spec/views/' + view + '-spec.js', /define\(function\(require\)/i]
                    ];
                    var fileContentToNotFind = [
                        ['client/templates/' + view + '.jade', /<div>/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        jsFramework: 'backbone',
                        singlePageApplication: true,
                        jsTemplate: 'jade',
                        jsOption: 'requirejs',
                        testFramework: 'jasmine'
                    });
                    this.app.run([], function() {
                        createSubGenerator('view', view, {}, {
                            // mock prompt data
                            viewFile: 'client/scripts/views/',
                            templateFile: 'client/templates',
                            testFile: 'test/spec/views'
                        }, function() {
                            assert.file(filesToTest);
                            assert.fileContent(fileContentToTest);
                            assert.noFileContent(fileContentToNotFind);
                            done();
                        });
                    });
                });
                it('Using Mocha', function(done) {
                    // Filename
                    var view = 'myview';
                    var filesToTest = [
                        'test/spec/views/' + view + '-spec.js',
                        'client/scripts/views/' + view + '.js',
                        'client/templates/' + view + '.jade'
                    ];
                    var fileContentToTest = [
                        ['client/scripts/views/' + view + '.js', /define\(function\(require\)/i],
                        ['test/spec/views/' + view + '-spec.js', /define\(function\(require\)/i],
                        ['test/spec/views/' + view + '-spec.js', /jshint expr/i]
                    ];
                    var fileContentToNotFind = [
                        ['client/templates/' + view + '.jade', /<div>/i]
                    ];

                    helpers.mockPrompt(this.app, {
                        jsFramework: 'backbone',
                        singlePageApplication: true,
                        jsTemplate: 'jade',
                        jsOption: 'requirejs',
                        testFramework: 'mocha'
                    });
                    this.app.run([], function() {
                        createSubGenerator('view', view, {}, {
                            // mock prompt data
                            viewFile: 'client/scripts/views/',
                            templateFile: 'client/templates',
                            testFile: 'test/spec/views'
                        }, function() {
                            assert.file(filesToTest);
                            assert.fileContent(fileContentToTest);
                            assert.noFileContent(fileContentToNotFind);
                            done();
                        });
                    });
                });
            });
        });
        it('Handles folder option', function(done) {
            // Filename
            var view = 'myview';
            var folder = 'folder/';
            var filesToTest = [
                'test/spec/views/' + folder + view + '-spec.js',
                'client/scripts/views/' + folder + view + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'lodash',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });

            this.app.run([], function() {
                createSubGenerator('view', view, {}, {
                    // mock prompt data
                    viewFile: 'client/scripts/views/' + folder,
                    templateFile: 'client/templates/' + folder,
                    testFile: 'test/spec/views/' + folder
                }, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            // Filename
            var view = 'myview';
            var folder = '/////folder/////';
            var filesToTest = [
                'test/spec/views/folder/' + view + '-spec.js',
                'client/scripts/views/folder/' + view + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'lodash',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });

            this.app.run([], function() {
                createSubGenerator('view', view, {}, {
                    // mock prompt data
                    viewFile: 'client/scripts/views/' + folder,
                    templateFile: 'client/templates/' + folder,
                    testFile: 'test/spec/views/' + folder
                }, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
    });
});
