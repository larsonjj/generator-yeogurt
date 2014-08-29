/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;

describe('Template sub-generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

            done();
        }.bind(this));
    });

    describe('Does not create any template files when using React', function () {
        it('Handles defaults', function(done) {
            // Filename
            var template = 'mytemplate';
            var filesToTest = [
                'client/scripts/components/' + template + '.jsx',
                'test/spec/components/' + template + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'react',
                singlePageApplication: true
            });
            this.app.run([], function() {
                createSubGenerator('template', template, {}, function() {
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
            var template = 'mytemplate';
            var folder = 'folder/';
            var filesToTest = [
                'test/spec/components/' + folder + template + '.js',
                'client/scripts/components/' + folder + template + '.jsx'
            ];
            this.app.run([], function() {
                createSubGenerator('template', template, {folder: folder}, function() {
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
            var template = 'mytemplate';
            var folder = '/////folder/////';
            var filesToTest = [
                'test/spec/components/folder/' + template + '.js',
                'client/scripts/components/folder/' + template + '.jsx'
            ];
            this.app.run([], function() {
                createSubGenerator('template', template, {folder: folder}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Create template files when using Static Jade', function () {
        describe('Client templates', function () {
            it('Handles defaults with type: Page', function(done) {
                // Filename
                var template = 'mytemplate';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'client/templates/' + template + '.jade',
                ];
                var fileContentToTest = [
                    ['client/templates/' + template + '.jade', /page/i]
                ];

                helpers.mockPrompt(this.app, {
                    htmlOption: 'jade',
                    singlePageApplication: false,
                    useServer: false
                });
                this.app.run([], function() {
                    createSubGenerator('template', template, {}, function() {
                        assert.file(filesToTest);
                        assert.fileContent(fileContentToTest);
                        done();
                    });
                });
            });
            it('Handles defaults with type: Module', function(done) {
                // Filename
                var template = 'mytemplate';
                var type = 'module';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'client/templates/modules/' + template + '.jade',
                ];
                var fileContentToTest = [
                    ['client/templates/modules/' + template + '.jade', /include client\/templates/i]
                ];

                helpers.mockPrompt(this.app, {
                    htmlOption: 'jade',
                    singlePageApplication: false,
                    useServer: false
                });
                this.app.run([], function() {
                        createSubGenerator('template', template, {type: type}, function() {
                        assert.file(filesToTest);
                        assert.fileContent(fileContentToTest);
                        done();
                    });
                });
            });
            it('Handles defaults with type: Template', function(done) {
                // Filename
                var template = 'mytemplate';
                var type = 'layout';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'client/templates/layouts/' + template + '.jade',
                ];
                var fileContentToTest = [
                    ['client/templates/layouts/' + template + '.jade', /extend base/i]
                ];

                helpers.mockPrompt(this.app, {
                    htmlOption: 'jade',
                    singlePageApplication: false,
                    useServer: false
                });
                this.app.run([], function() {
                    createSubGenerator('template', template, {type: type}, function() {
                        assert.file(filesToTest);
                        assert.fileContent(fileContentToTest);
                        done();
                    });
                });
            });
            it('Handles folder option', function(done) {
                helpers.mockPrompt(this.app, {
                    htmlOption: 'jade',
                    singlePageApplication: false,
                    useServer: false
                });
                // Filename
                var template = 'mytemplate';
                var folder = 'folder/';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'client/templates/' + folder + template + '.jade'
                ];
                this.app.run([], function() {
                    createSubGenerator('template', template, {folder: folder}, function() {
                    assert.file(filesToTest);
                    done();
                });
                });
            });
            it('Handles folder option with funky path', function(done) {
                helpers.mockPrompt(this.app, {
                    htmlOption: 'jade',
                    singlePageApplication: false,
                    useServer: false
                });
                // Filename
                var template = 'mytemplate';
                var folder = '/////folder/////';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'client/templates/folder/' + template + '.jade'
                ];
                this.app.run([], function() {
                    createSubGenerator('template', template, {folder: folder}, function() {
                    assert.file(filesToTest);
                    done();
                });
                });
            });
        });
        describe('Server templates', function () {
            it('Handles defaults with type: Page', function(done) {
                // Filename
                var template = 'mytemplate';
                var type = 'page';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'server/templates/' + template + '.jade',
                ];

                helpers.mockPrompt(this.app, {
                    htmlOption: 'jade',
                    singlePageApplication: false,
                    useServer: true
                });
                this.app.run([], function() {
                    createSubGenerator('template', template, {type: type}, function() {
                    assert.file(filesToTest);
                    done();
                });
                });
            });
            it('Handles defaults with type: Module', function(done) {
                // Filename
                var template = 'mytemplate';
                var type = 'module';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'server/templates/modules/' + template + '.jade',
                ];

                helpers.mockPrompt(this.app, {
                    htmlOption: 'jade',
                    singlePageApplication: false,
                    useServer: true
                });
                this.app.run([], function() {
                    createSubGenerator('template', template, {type: type}, function() {
                    assert.file(filesToTest);
                    done();
                });
                });
            });
            it('Handles defaults with type: Template', function(done) {
                // Filename
                var template = 'mytemplate';
                var type = 'layout';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'server/templates/layouts/' + template + '.jade',
                ];

                helpers.mockPrompt(this.app, {
                    htmlOption: 'jade',
                    singlePageApplication: false,
                    useServer: true
                });
                this.app.run([], function() {
                    createSubGenerator('template', template, {type: type}, function() {
                    assert.file(filesToTest);
                    done();
                });
                });
            });
            it('Handles folder option', function(done) {
                helpers.mockPrompt(this.app, {
                    htmlOption: 'jade',
                    singlePageApplication: false,
                    useServer: true
                });
                // Filename
                var template = 'mytemplate';
                var folder = 'folder/';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'server/templates/' + folder + template + '.jade'
                ];
                this.app.run([], function() {
                    createSubGenerator('template', template, {folder: folder}, function() {
                        assert.file(filesToTest);
                        done();
                    });
                });
            });
            it('Handles folder option with funky path', function(done) {
                helpers.mockPrompt(this.app, {
                    htmlOption: 'jade',
                    singlePageApplication: false,
                    useServer: true
                });
                // Filename
                var template = 'mytemplate';
                var folder = '/////folder/////';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'server/templates/folder/' + template + '.jade'
                ];
                this.app.run([], function() {
                    createSubGenerator('template', template, {folder: folder}, function() {
                        assert.file(filesToTest);
                        done();
                    });
                });
            });
        });
    });

    describe('Does not create any template files when using Static Swig', function() {
        describe('Client templates', function () {
            it('Handles defaults with type: Page', function(done) {
                // Filename
                var template = 'mytemplate';
                var type = 'page';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'client/templates/' + template + '.swig',
                ];

                helpers.mockPrompt(this.app, {
                    htmlOption: 'swig',
                    singlePageApplication: false,
                    useServer: false
                });
                this.app.run([], function() {
                    createSubGenerator('template', template, {type: type}, function() {
                        assert.file(filesToTest);
                        done();
                    });
                });
            });
            it('Handles defaults with type: Module', function(done) {
                // Filename
                var template = 'mytemplate';
                var type = 'module';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'client/templates/modules/' + template + '.swig',
                ];

                helpers.mockPrompt(this.app, {
                    htmlOption: 'swig',
                    singlePageApplication: false,
                    useServer: false
                });
                this.app.run([], function() {
                    createSubGenerator('template', template, {type: type}, function() {
                        assert.file(filesToTest);
                        done();
                    });
                });
            });
            it('Handles defaults with type: Template', function(done) {
                // Filename
                var template = 'mytemplate';
                var type = 'layout';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'client/templates/layouts/' + template + '.swig',
                ];

                helpers.mockPrompt(this.app, {
                    htmlOption: 'swig',
                    singlePageApplication: false,
                    useServer: false
                });
                this.app.run([], function() {
                        createSubGenerator('template', template, {type: type}, function() {
                        assert.file(filesToTest);
                        done();
                    });
                });
            });
            it('Handles folder option', function(done) {
                helpers.mockPrompt(this.app, {
                    htmlOption: 'swig',
                    singlePageApplication: false,
                    useServer: false
                });
                // Filename
                var template = 'mytemplate';
                var folder = 'folder/';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'client/templates/' + folder + template + '.swig'
                ];
                this.app.run([], function() {
                    createSubGenerator('template', template, {folder: folder}, function() {
                        assert.file(filesToTest);
                        done();
                    });
                });
            });
            it('Handles folder option with funky path', function(done) {
                helpers.mockPrompt(this.app, {
                    htmlOption: 'swig',
                    singlePageApplication: false,
                    useServer: false
                });
                // Filename
                var template = 'mytemplate';
                var folder = '/////folder/////';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'client/templates/folder/' + template + '.swig'
                ];
                this.app.run([], function() {
                    createSubGenerator('template', template, {folder: folder}, function() {
                        assert.file(filesToTest);
                        done();
                    });
                });
            });
        });
        describe('Server templates', function () {
            it('Handles defaults with type: Page', function(done) {
                // Filename
                var template = 'mytemplate';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'server/templates/' + template + '.swig',
                ];

                helpers.mockPrompt(this.app, {
                    htmlOption: 'swig',
                    singlePageApplication: false,
                    useServer: true
                });
                this.app.run([], function() {
                    createSubGenerator('template', template, {}, function() {
                        assert.file(filesToTest);
                        done();
                    });
                });
            });
            it('Handles defaults with type: Module', function(done) {
                // Filename
                var template = 'mytemplate';
                var type = 'module';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'server/templates/modules/' + template + '.swig',
                ];

                helpers.mockPrompt(this.app, {
                    htmlOption: 'swig',
                    singlePageApplication: false,
                    useServer: true
                });
                this.app.run([], function() {
                    createSubGenerator('template', template, {type: type}, function() {
                        assert.file(filesToTest);
                        done();
                    });
                });
            });
            it('Handles defaults with type: Template', function(done) {
                // Filename
                var template = 'mytemplate';
                var type = 'layout';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'server/templates/layouts/' + template + '.swig',
                ];

                helpers.mockPrompt(this.app, {
                    htmlOption: 'swig',
                    singlePageApplication: false,
                    useServer: true
                });
                this.app.run([], function() {
                    createSubGenerator('template', template, {type: type}, function() {
                        assert.file(filesToTest);
                        done();
                    });
                });
            });
            it('Handles folder option', function(done) {
                helpers.mockPrompt(this.app, {
                    htmlOption: 'swig',
                    singlePageApplication: false,
                    useServer: true
                });
                // Filename
                var template = 'mytemplate';
                var folder = 'folder/';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'server/templates/' + folder + template + '.swig'
                ];
                this.app.run([], function() {
                    createSubGenerator('template', template, {folder: folder}, function() {
                        assert.file(filesToTest);
                        done();
                    });
                });
            });
            it('Handles folder option with funky path', function(done) {
                helpers.mockPrompt(this.app, {
                    htmlOption: 'swig',
                    singlePageApplication: false,
                    useServer: true
                });
                // Filename
                var template = 'mytemplate';
                var folder = '/////folder/////';
                var filesToTest = [
                    // add files and folders you expect to NOT exist here.
                    'server/templates/folder/' + template + '.swig'
                ];
                this.app.run([], function() {
                    createSubGenerator('template', template, {folder: folder}, function() {
                        assert.file(filesToTest);
                        done();
                    });
                });
            });
        });
    });

    describe('Create template files when using Backbone', function () {
        it('Handles defaults with Lo-dash', function(done) {
            // Filename
            var template = 'mytemplate';
            var filesToTest = [
                'client/templates/' + template + '.jst'
            ];
            var fileContentToTest = [
                ['client/templates/' + template + '.jst', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'lodash',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run([], function() {
                createSubGenerator('template', template, {}, function() {
                    assert.file(filesToTest);
                    assert.fileContent(fileContentToTest);
                    done();
                });
            });
        });
        it('Handles defaults with Handlebars', function(done) {
            // Filename
            var template = 'mytemplate';
            var filesToTest = [
                'client/templates/' + template + '.hbs'
            ];
            var fileContentToTest = [
                ['client/templates/' + template + '.hbs', /<div>/i]
            ];


            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'handlebars',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run([], function() {
                createSubGenerator('template', template, {}, function() {
                    assert.file(filesToTest);
                    assert.fileContent(fileContentToTest);
                    done();
                });
            });
        });
        it('Handles defaults with Jade', function(done) {
            // Filename
            var template = 'mytemplate';
            var filesToTest = [
                'client/templates/' + template + '.jade'
            ];
            var fileContentToTest = [
                ['client/templates/' + template + '.jade', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'jade',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run([], function() {
                createSubGenerator('template', template, {}, function() {
                    assert.file(filesToTest);
                    assert.noFileContent(fileContentToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            // Filename
            var template = 'mytemplate';
            var folder = 'folder/';
            var filesToTest = [
                'client/templates/folder/' + template + '.jst'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'lodash',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run([], function() {
                createSubGenerator('template', template, {folder: folder}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            // Filename
            var template = 'mytemplate';
            var folder = '/////folder/////';
            var filesToTest = [
                'client/templates/folder/' + template + '.jst'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'lodash',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run([], function() {
                createSubGenerator('template', template, {folder: folder}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
    });
});
