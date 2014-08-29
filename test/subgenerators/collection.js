/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;


describe('Collection sub-generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

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
            this.app.run([], function() {
                createSubGenerator('collection', collection, {}, function() {
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
            this.app.run([], function() {
                createSubGenerator('collection', collection, {folder: folder}, function() {
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
            this.app.run([], function() {
                createSubGenerator('collection', collection, {folder: folder}, function() {
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
                singlePageApplication: false
            });
            this.app.run([], function() {
                createSubGenerator('collection', collection, {}, function() {
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
            var collection = 'mycollection';
            var folder = 'folder/';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/' + folder + collection + '.js',
                'client/scripts/collections/' + folder + collection + '.js'
            ];
            this.app.run([], function() {
                createSubGenerator('collection', collection, {folder: folder}, function() {
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
            var collection = 'mycollection';
            var folder = '/////folder/////';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/folder/' + collection + '.js',
                'client/scripts/collections/folder/' + collection + '.js'
            ];
            this.app.run([], function() {
                createSubGenerator('collection', collection, {folder: folder}, function() {
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
                singlePageApplication: false
            });
            // Filename
            var collection = 'mycollection';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/' + collection + '.js',
                'client/scripts/collections/' + collection + '.js'
            ];
            this.app.run([], function() {
                createSubGenerator('collection', collection, {}, function() {
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
            var collection = 'mycollection';
            var folder = 'folder/';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/' + folder + collection + '.js',
                'client/scripts/collections/' + folder + collection + '.js'
            ];
            this.app.run([], function() {
                createSubGenerator('collection', collection, {folder: folder}, function() {
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
            var collection = 'mycollection';
            var folder = '/////folder/////';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/collections/folder/' + collection + '.js',
                'client/scripts/collections/folder/' + collection + '.js'
            ];
            this.app.run([], function() {
                createSubGenerator('collection', collection, {folder: folder}, function() {
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
            this.app.run([], function() {
                createSubGenerator('collection', collection, {}, function() {
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
            this.app.run([], function() {
                createSubGenerator('collection', collection, {folder: folder}, function() {
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
            this.app.run([], function() {
                createSubGenerator('collection', collection, {folder: folder}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
    });
});
