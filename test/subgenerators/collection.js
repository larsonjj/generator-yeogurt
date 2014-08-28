/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var Output  = require( '../helpers/mute' );


describe('Collection sub-generator', function () {
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

    describe('Does not create any collection files when using React', function () {
        it('Handles defaults', function(done) {
            // Filename
            var collection = 'mycollection';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/' + collection + '.js',
                'client/scripts/collections/' + collection + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'react'
            });
            this.app.run({}, function() {
                var collectionGen = helpers.createGenerator(
                    'yeogurt:collection', [
                        '../../../collection'
                    ],
                    [collection]
                );
                collectionGen.on( 'start', Output.mute );
                collectionGen.on( 'end', Output.unmute );
                collectionGen.run({}, function() {
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
            var collection = 'mycollection';
            var folder = 'folder/';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/' + folder + collection + '.js',
                'client/scripts/collections/' + folder + collection + '.js'
            ];
            this.app.run({}, function() {
                var collectionGen = helpers.createGenerator(
                    'yeogurt:collection', [
                        '../../../collection'
                    ],
                    [collection],
                    {
                        folder: folder
                    }
                );
                collectionGen.on( 'start', Output.mute );
                collectionGen.on( 'end', Output.unmute );
                collectionGen.run({}, function() {
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
            var collection = 'mycollection';
            var folder = '/////folder/////';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/folder/' + collection + '.js',
                'client/scripts/collections/folder/' + collection + '.js'
            ];
            this.app.run({}, function() {
                var collectionGen = helpers.createGenerator(
                    'yeogurt:collection', [
                        '../../../collection'
                    ],
                    [collection],
                    {
                        folder: folder
                    }
                );
                collectionGen.on( 'start', Output.mute );
                collectionGen.on( 'end', Output.unmute );
                collectionGen.run({}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Does not create any collection files when using Static Jade', function () {
        it('Handles defaults', function(done) {
            // Filename
            var collection = 'mycollection';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/' + collection + '.js',
                'client/scripts/collections/' + collection + '.js'
            ];

            helpers.mockPrompt(this.app, {
                htmlOption: 'jade',
                useServer: false
            });
            this.app.run({}, function() {
                var collectionGen = helpers.createGenerator(
                    'yeogurt:collection', [
                        '../../../collection'
                    ],
                    [collection]
                );
                collectionGen.on( 'start', Output.mute );
                collectionGen.on( 'end', Output.unmute );
                collectionGen.run({}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'jade',
                useServer: false
            });
            // Filename
            var collection = 'mycollection';
            var folder = 'folder/';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/' + folder + collection + '.js',
                'client/scripts/collections/' + folder + collection + '.js'
            ];
            this.app.run({}, function() {
                var collectionGen = helpers.createGenerator(
                    'yeogurt:collection', [
                        '../../../collection'
                    ],
                    [collection],
                    {
                        folder: folder
                    }
                );
                collectionGen.on( 'start', Output.mute );
                collectionGen.on( 'end', Output.unmute );
                collectionGen.run({}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'jade',
                useServer: false
            });
            // Filename
            var collection = 'mycollection';
            var folder = '/////folder/////';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/folder/' + collection + '.js',
                'client/scripts/collections/folder/' + collection + '.js'
            ];
            this.app.run({}, function() {
                var collectionGen = helpers.createGenerator(
                    'yeogurt:collection', [
                        '../../../collection'
                    ],
                    [collection],
                    {
                        folder: folder
                    }
                );
                collectionGen.on( 'start', Output.mute );
                collectionGen.on( 'end', Output.unmute );
                collectionGen.run({}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Does not create any collection files when using Static Swig', function() {
        it('Handles defaults', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'swig',
                useServer: false
            });
            // Filename
            var collection = 'mycollection';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/' + collection + '.js',
                'client/scripts/collections/' + collection + '.js'
            ];
            this.app.run({}, function() {
                var collectionGen = helpers.createGenerator(
                    'yeogurt:collection', [
                        '../../../collection'
                    ],
                    [collection]
                );
                collectionGen.on( 'start', Output.mute );
                collectionGen.on( 'end', Output.unmute );
                collectionGen.run({}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'swig',
                useServer: false
            });
            // Filename
            var collection = 'mycollection';
            var folder = 'folder/';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/' + folder + collection + '.js',
                'client/scripts/collections/' + folder + collection + '.js'
            ];
            this.app.run({}, function() {
                var collectionGen = helpers.createGenerator(
                    'yeogurt:collection', [
                        '../../../collection'
                    ],
                    [collection],
                    {
                        folder: folder
                    }
                );
                collectionGen.on( 'start', Output.mute );
                collectionGen.on( 'end', Output.unmute );
                collectionGen.run({}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            helpers.mockPrompt(this.app, {
                htmlOption: 'swig',
                useServer: false
            });
            // Filename
            var collection = 'mycollection';
            var folder = '/////folder/////';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/folder/' + collection + '.js',
                'client/scripts/collections/folder/' + collection + '.js'
            ];
            this.app.run({}, function() {
                var collectionGen = helpers.createGenerator(
                    'yeogurt:collection', [
                        '../../../collection'
                    ],
                    [collection],
                    {
                        folder: folder
                    }
                );
                collectionGen.on( 'start', Output.mute );
                collectionGen.on( 'end', Output.unmute );
                collectionGen.run({}, function() {
                    assert.noFile(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Create collection files when using Backbone', function () {
        it('Handles defaults', function(done) {
            // Filename
            var collection = 'mycollection';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/' + collection + '-spec.js',
                'client/scripts/collections/' + collection + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'lodash',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run({}, function() {
                var collectionGen = helpers.createGenerator(
                    'yeogurt:collection', [
                        '../../../collection'
                    ],
                    [collection]
                );
                collectionGen.on( 'start', Output.mute );
                collectionGen.on( 'end', Output.unmute );
                collectionGen.run({}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            // Filename
            var collection = 'mycollection';
            var folder = 'folder/';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/' + folder + collection + '-spec.js',
                'client/scripts/collections/' + folder + collection + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'lodash',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run({}, function() {
                var collectionGen = helpers.createGenerator(
                    'yeogurt:collection', [
                        '../../../collection'
                    ],
                    [collection],
                    {
                        folder: folder
                    }
                );
                collectionGen.on( 'start', Output.mute );
                collectionGen.on( 'end', Output.unmute );
                collectionGen.run({}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            // Filename
            var collection = 'mycollection';
            var folder = '/////folder/////';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/folder/' + collection + '-spec.js',
                'client/scripts/collections/folder/' + collection + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'backbone',
                singlePageApplication: true,
                jsTemplate: 'lodash',
                jsOption: 'browserify',
                testFramework: 'jasmine'
            });
            this.app.run({}, function() {
                var collectionGen = helpers.createGenerator(
                    'yeogurt:collection', [
                        '../../../collection'
                    ],
                    [collection],
                    {
                        folder: folder
                    }
                );
                collectionGen.on( 'start', Output.mute );
                collectionGen.on( 'end', Output.unmute );
                collectionGen.run({}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
    });
});
