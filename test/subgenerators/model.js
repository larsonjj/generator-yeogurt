/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var Output  = require( '../helpers/mute' );


describe('Model sub-generator', function () {
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

    describe('Does not create any model files when using React', function () {
        it('Handles defaults', function(done) {
            // Filename
            var model = 'mymodel';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/models/' + model + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'react'
            });
            this.app.run({}, function() {
                var modelGen = helpers.createGenerator(
                    'yeogurt:model', [
                        '../../../model'
                    ],
                    [model]
                );
                modelGen.on( 'start', Output.mute );
                modelGen.on( 'end', Output.unmute );
                modelGen.run({}, function() {
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
                // add files and folders you expect to NOT exist here.
                'test/spec/models/' + folder + model + '.js'
            ];
            this.app.run({}, function() {
                var modelGen = helpers.createGenerator(
                    'yeogurt:model', [
                        '../../../model'
                    ],
                    [model],
                    {
                        folder: folder
                    }
                );
                modelGen.on( 'start', Output.mute );
                modelGen.on( 'end', Output.unmute );
                modelGen.run({}, function() {
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
                // add files and folders you expect to NOT exist here.
                'test/spec/models/folder/' + model + '.js'
            ];
            this.app.run({}, function() {
                var modelGen = helpers.createGenerator(
                    'yeogurt:model', [
                        '../../../model'
                    ],
                    [model],
                    {
                        folder: folder
                    }
                );
                modelGen.on( 'start', Output.mute );
                modelGen.on( 'end', Output.unmute );
                modelGen.run({}, function() {
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
                // add files and folders you expect to NOT exist here.
                'test/spec/models/' + model + '.js'
            ];

            helpers.mockPrompt(this.app, {
                htmlOption: 'jade'
            });
            this.app.run({}, function() {
                var modelGen = helpers.createGenerator(
                    'yeogurt:model', [
                        '../../../model'
                    ],
                    [model]
                );
                modelGen.on( 'start', Output.mute );
                modelGen.on( 'end', Output.unmute );
                modelGen.run({}, function() {
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
            var model = 'mymodel';
            var folder = 'folder/';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/models/' + folder + model + '.js'
            ];
            this.app.run({}, function() {
                var modelGen = helpers.createGenerator(
                    'yeogurt:model', [
                        '../../../model'
                    ],
                    [model],
                    {
                        folder: folder
                    }
                );
                modelGen.on( 'start', Output.mute );
                modelGen.on( 'end', Output.unmute );
                modelGen.run({}, function() {
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
            var model = 'mymodel';
            var folder = '/////folder/////';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/models/folder/' + model + '.js'
            ];
            this.app.run({}, function() {
                var modelGen = helpers.createGenerator(
                    'yeogurt:model', [
                        '../../../model'
                    ],
                    [model],
                    {
                        folder: folder
                    }
                );
                modelGen.on( 'start', Output.mute );
                modelGen.on( 'end', Output.unmute );
                modelGen.run({}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Does not create any model files when using Static Swig', function() {
        it('Handles defaults', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'swig'
            });
            // Filename
            var model = 'mymodel';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/models/' + model + '.js'
            ];
            this.app.run({}, function() {
                var modelGen = helpers.createGenerator(
                    'yeogurt:model', [
                        '../../../model'
                    ],
                    [model]
                );
                modelGen.on( 'start', Output.mute );
                modelGen.on( 'end', Output.unmute );
                modelGen.run({}, function() {
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
            var model = 'mymodel';
            var folder = 'folder/';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/models/' + folder + model + '.js'
            ];
            this.app.run({}, function() {
                var modelGen = helpers.createGenerator(
                    'yeogurt:model', [
                        '../../../model'
                    ],
                    [model],
                    {
                        folder: folder
                    }
                );
                modelGen.on( 'start', Output.mute );
                modelGen.on( 'end', Output.unmute );
                modelGen.run({}, function() {
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
            var model = 'mymodel';
            var folder = '/////folder/////';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/models/folder/' + model + '.js'
            ];
            this.app.run({}, function() {
                var modelGen = helpers.createGenerator(
                    'yeogurt:model', [
                        '../../../model'
                    ],
                    [model],
                    {
                        folder: folder
                    }
                );
                modelGen.on( 'start', Output.mute );
                modelGen.on( 'end', Output.unmute );
                modelGen.run({}, function() {
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
                // add files and folders you expect to NOT exist here.
                'test/spec/models/' + model + '-spec.js',
                'client/scripts/models/' + model + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'lodash',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run({}, function() {
                var modelGen = helpers.createGenerator(
                    'yeogurt:model', [
                        '../../../model'
                    ],
                    [model]
                );
                modelGen.on( 'start', Output.mute );
                modelGen.on( 'end', Output.unmute );
                modelGen.run({}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            // Filename
            var model = 'mymodel';
            var folder = 'folder/';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/models/' + folder + model + '-spec.js',
                'client/scripts/models/' + folder + model + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'lodash',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run({}, function() {
                var modelGen = helpers.createGenerator(
                    'yeogurt:model', [
                        '../../../model'
                    ],
                    [model],
                    {
                        folder: folder
                    }
                );
                modelGen.on( 'start', Output.mute );
                modelGen.on( 'end', Output.unmute );
                modelGen.run({}, function() {
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
                // add files and folders you expect to NOT exist here.
                'test/spec/models/folder/' + model + '-spec.js',
                'client/scripts/models/folder/' + model + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'lodash',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run({}, function() {
                var modelGen = helpers.createGenerator(
                    'yeogurt:model', [
                        '../../../model'
                    ],
                    [model],
                    {
                        folder: folder
                    }
                );
                modelGen.on( 'start', Output.mute );
                modelGen.on( 'end', Output.unmute );
                modelGen.run({}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
    });
});
