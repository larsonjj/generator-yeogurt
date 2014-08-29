/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;


describe('Style sub-generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

            done();
        }.bind(this));
    });

    describe('Create style files with Scss', function () {
        it('Handles defaults', function(done) {
            // Filename
            var style = 'mystyle';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'client/styles/_' + style + '.scss'
            ];

            helpers.mockPrompt(this.app, {
                cssOption: 'sass'
            });
            this.app.run([], function() {
                createSubGenerator('style', style, {}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            // Filename
            var style = 'mystyle';
            var folder = 'folder/';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'client/styles/folder/_' + style + '.scss'
            ];

            helpers.mockPrompt(this.app, {
                cssOption: 'sass'
            });
            this.app.run([], function() {
                createSubGenerator('style', style, {folder: folder}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            // Filename
            var style = 'mystyle';
            var folder = '/////folder/////';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'client/styles/folder/_' + style + '.scss'
            ];

            helpers.mockPrompt(this.app, {
                cssOption: 'sass'
            });
            this.app.run([], function() {
                createSubGenerator('style', style, {folder: folder}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Create style files with Less', function () {
        it('Handles defaults', function(done) {
            // Filename
            var style = 'mystyle';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'client/styles/_' + style + '.less'
            ];

            helpers.mockPrompt(this.app, {
                cssOption: 'less'
            });
            this.app.run([], function() {
                createSubGenerator('style', style, {}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            // Filename
            var style = 'mystyle';
            var folder = 'folder/';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'client/styles/folder/_' + style + '.less'
            ];

            helpers.mockPrompt(this.app, {
                cssOption: 'less'
            });
            this.app.run([], function() {
                createSubGenerator('style', style, {folder: folder}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            // Filename
            var style = 'mystyle';
            var folder = '/////folder/////';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'client/styles/folder/_' + style + '.less'
            ];

            helpers.mockPrompt(this.app, {
                cssOption: 'less'
            });
            this.app.run([], function() {
                createSubGenerator('style', style, {folder: folder}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
    });

    describe('Create style files with CSS', function () {
        it('Handles defaults', function(done) {
            // Filename
            var style = 'mystyle';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'client/styles/' + style + '.css'
            ];

            helpers.mockPrompt(this.app, {
                cssOption: 'css'
            });
            this.app.run([], function() {
                createSubGenerator('style', style, {}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            // Filename
            var style = 'mystyle';
            var folder = 'folder/';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'client/styles/folder/' + style + '.css'
            ];

            helpers.mockPrompt(this.app, {
                cssOption: 'css'
            });
            this.app.run([], function() {
                createSubGenerator('style', style, {folder: folder}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option with funky path', function(done) {
            // Filename
            var style = 'mystyle';
            var folder = '/////folder/////';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'client/styles/folder/' + style + '.css'
            ];

            helpers.mockPrompt(this.app, {
                cssOption: 'css'
            });
            this.app.run([], function() {
                createSubGenerator('style', style, {folder: folder}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
    });
});
