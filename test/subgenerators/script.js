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
                // add files and folders you expect to NOT exist here.
                'test/spec/' + script + '-spec.js',
                'client/scripts/' + script + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsOption: 'none'
            });
            this.app.run([], function() {
                createSubGenerator('script', script, {}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles folder option', function(done) {
            // Filename
            var script = 'myscript';
            var folder = 'folder/';
            var filesToTest = [
                // add files and folders you expect to NOT exist here.
                'test/spec/' + folder + script + '-spec.js',
                'client/scripts/' + folder + script + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsOption: 'none'
            });
            this.app.run([], function() {
                createSubGenerator('script', script, {folder: folder}, function() {
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
                // add files and folders you expect to NOT exist here.
                'test/spec/folder/' + script + '-spec.js',
                'client/scripts/folder/' + script + '.js'
            ];

            helpers.mockPrompt(this.app, {
                jsOption: 'none'
            });
            this.app.run([], function() {
                createSubGenerator('script', script, {folder: folder}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
    });
});
