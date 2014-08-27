/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var Output  = require( '../helpers/mute' );

describe('View sub-generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('yeogurt:app', [
                '../../../app'
            ]);

            this.app.options['skip-install'] = true;

            // Prevent Yeoman writes while the generator runs
            // and reenable them when it's finished to see the test results
            this.app.on('start', Output.mute);
            this.app.on('end', Output.unmute);
            done();
        }.bind(this));
    });

    describe('Does not create any view files when using React', function () {
        it('Handles defaults', function(done) {
            // Filename
            var view = 'myview';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'client/scripts/views/' + view + '.js',
                'test/spec/views/' + view + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'react',
                singlePageApplication: true
            });
            this.app.run({}, function() {
                var viewGen = helpers.createGenerator(
                    'yeogurt:view', [
                        '../../../view'
                    ],
                    [view]
                );
                viewGen.on( 'start', Output.mute );
                viewGen.on( 'end', Output.unmute );
                viewGen.run({}, function() {
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
                // add files and folders you expect to NOT exist here.
                'test/spec/views/' + folder + view + '.js',
                'client/scripts/views/' + folder + view + '.js'
            ];
            this.app.run({}, function() {
                var viewGen = helpers.createGenerator(
                    'yeogurt:view', [
                        '../../../view'
                    ],
                    [view],
                    {
                        folder: folder
                    }
                );
                viewGen.on( 'start', Output.mute );
                viewGen.on( 'end', Output.unmute );
                viewGen.run({}, function() {
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
                // add files and folders you expect to NOT exist here.
                'test/spec/views/folder/' + view + '.js',
                'client/scripts/views/folder/' + view + '.js'
            ];
            this.app.run({}, function() {
                var viewGen = helpers.createGenerator(
                    'yeogurt:view', [
                        '../../../view'
                    ],
                    [view],
                    {
                        folder: folder
                    }
                );
                viewGen.on( 'start', Output.mute );
                viewGen.on( 'end', Output.unmute );
                viewGen.run({}, function() {
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
                // add files and folders you expect to NOT exist here.
                'client/scripts/views/' + view + '.js',
                'test/spec/views/' + view + '.js'
            ];

            helpers.mockPrompt(this.app, {
                htmlOption: 'jade'
            });
            this.app.run({}, function() {
                var viewGen = helpers.createGenerator(
                    'yeogurt:view', [
                        '../../../view'
                    ],
                    [view]
                );
                viewGen.on( 'start', Output.mute );
                viewGen.on( 'end', Output.unmute );
                viewGen.run({}, function() {
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
            var view = 'myview';
            var folder = 'folder/';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/views/' + folder + view + '.js',
                'client/scripts/views/' + folder + view + '.js'
            ];
            this.app.run({}, function() {
                var viewGen = helpers.createGenerator(
                    'yeogurt:view', [
                        '../../../view'
                    ],
                    [view],
                    {
                        folder: folder
                    }
                );
                viewGen.on( 'start', Output.mute );
                viewGen.on( 'end', Output.unmute );
                viewGen.run({}, function() {
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
            var view = 'myview';
            var folder = '/////folder/////';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/views/folder/' + view + '.js',
                'client/scripts/views/folder/' + view + '.js'
            ];
            this.app.run({}, function() {
                var viewGen = helpers.createGenerator(
                    'yeogurt:view', [
                        '../../../view'
                    ],
                    [view],
                    {
                        folder: folder
                    }
                );
                viewGen.on( 'start', Output.mute );
                viewGen.on( 'end', Output.unmute );
                viewGen.run({}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Does not create any view files when using Static Swig', function() {
        it('Handles defaults', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'swig'
            });
            // Filename
            var view = 'myview';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'client/scripts/views/' + view + '.js',
                'test/spec/views/' + view + '.js'
            ];
            this.app.run({}, function() {
                var viewGen = helpers.createGenerator(
                    'yeogurt:view', [
                        '../../../view'
                    ],
                    [view]
                );
                viewGen.on( 'start', Output.mute );
                viewGen.on( 'end', Output.unmute );
                viewGen.run({}, function() {
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
            var view = 'myview';
            var folder = 'folder/';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/views/' + folder + view + '.js',
                'client/scripts/views/' + folder + view + '.js'
            ];
            this.app.run({}, function() {
                var viewGen = helpers.createGenerator(
                    'yeogurt:view', [
                        '../../../view'
                    ],
                    [view],
                    {
                        folder: folder
                    }
                );
                viewGen.on( 'start', Output.mute );
                viewGen.on( 'end', Output.unmute );
                viewGen.run({}, function() {
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
            var view = 'myview';
            var folder = '/////folder/////';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/views/folder/' + view + '.js',
                'client/scripts/views/folder/' + view + '.js'
            ];
            this.app.run({}, function() {
                var viewGen = helpers.createGenerator(
                    'yeogurt:view', [
                        '../../../view'
                    ],
                    [view],
                    {
                        folder: folder
                    }
                );
                viewGen.on( 'start', Output.mute );
                viewGen.on( 'end', Output.unmute );
                viewGen.run({}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Create view files when using Backbone', function () {
        it('Handles defaults with Lo-dash', function(done) {
            // Filename
            var view = 'myview';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/views/' + view + '-spec.js',
                'client/scripts/views/' + view + '.js',
                'client/templates/' + view + '.jst'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'lodash',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run({}, function() {
                var viewGen = helpers.createGenerator(
                    'yeogurt:view', [
                        '../../../view'
                    ],
                    [view]
                );
                viewGen.on( 'start', Output.mute );
                viewGen.on( 'end', Output.unmute );
                viewGen.run({}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles defaults with Handlebars', function(done) {
            // Filename
            var view = 'myview';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/views/' + view + '-spec.js',
                'client/scripts/views/' + view + '.js',
                'client/templates/' + view + '.hbs'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'handlebars',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run({}, function() {
                var viewGen = helpers.createGenerator(
                    'yeogurt:view', [
                        '../../../view'
                    ],
                    [view]
                );
                viewGen.on( 'start', Output.mute );
                viewGen.on( 'end', Output.unmute );
                viewGen.run({}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles defaults with Jade', function(done) {
            // Filename
            var view = 'myview';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/views/' + view + '-spec.js',
                'client/scripts/views/' + view + '.js',
                'client/templates/' + view + '.jade'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'jade',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run({}, function() {
                var viewGen = helpers.createGenerator(
                    'yeogurt:view', [
                        '../../../view'
                    ],
                    [view]
                );
                viewGen.on( 'start', Output.mute );
                viewGen.on( 'end', Output.unmute );
                viewGen.run({}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            // Filename
            var view = 'myview';
            var folder = 'folder/';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
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
            this.app.run({}, function() {
                var viewGen = helpers.createGenerator(
                    'yeogurt:view', [
                        '../../../view'
                    ],
                    [view],
                    {
                        folder: folder
                    }
                );
                viewGen.on( 'start', Output.mute );
                viewGen.on( 'end', Output.unmute );
                viewGen.run({}, function() {
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
                // add files and folders you expect to NOT exist here.
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
            this.app.run({}, function() {
                var viewGen = helpers.createGenerator(
                    'yeogurt:view', [
                        '../../../view'
                    ],
                    [view],
                    {
                        folder: folder
                    }
                );
                viewGen.on( 'start', Output.mute );
                viewGen.on( 'end', Output.unmute );
                viewGen.run({}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
    });
});
