/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;


describe('Controller sub-generator', function() {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

            done();
        }.bind(this));
    });

    describe('Create controller files with Angular', function() {
        it('Handles defaults', function(done) {
            // Filename
            var controller = 'mycontroller';
            var filesToTest = [
                'client/app/' + controller + '/' + controller + '.controller.js',
                'client/app/' + controller + '/' + controller + '.controller.spec.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'angular',
                singlePageApplication: true
            });
            this.app.run([], function() {
                createSubGenerator('controller', controller, {}, {
                    // mock prompt data
                    controllerFile: 'client/app'
                }, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
        it('Handles funky path', function(done) {
            // Filename
            var funkyPath = '/////funkypath/////';
            var filesToTest = [
                'client/app/funkypath/funkypath.controller.js',
                'client/app/funkypath/funkypath.controller.spec.js'
            ];

            helpers.mockPrompt(this.app, {
                jsFramework: 'angular',
                singlePageApplication: true
            });
            this.app.run([], function() {
                createSubGenerator('controller', funkyPath, {}, {
                    // mock prompt data
                    controllerFile: 'client/app',
                }, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
    });
});
