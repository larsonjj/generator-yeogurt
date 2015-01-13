/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;


describe('Yeogurt generator using Angular', function() {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

            done();
        }.bind(this));
    });

    describe('On the Client', function() {
        describe('With Defaults', function() {
            it ('Creates expected files', function(done) {
                var expected = [
                    'client/scripts',
                    'client/scripts/main.js',
                    'client/scripts/routes.js',
                    'client/scripts/controllers/index.js',
                ];

                var fileContentToTest = [];

                helpers.mockPrompt(this.app, {
                    singlePageApplication: true,
                    jsFramework: 'angular',
                    jsOption: 'none',
                    useServer: false,
                });

                this.app.run([], function() {
                    assert.file(expected);
                    assert.fileContent(fileContentToTest);
                    done();
                });
            });
        });
    });
});
