/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;


describe('Yeogurt generator using CSS Framework', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

            done();
        }.bind(this));
    });
    describe('With Bootstrap', function () {
        it('Creates expected content', function (done) {
            var fileContentToTest = [
                ['bower.json', /bootstrap/i]
            ];

            helpers.mockPrompt(this.app, {
                cssFramework: 'bootstrap'
            });

            this.app.run([], function () {
                assert.fileContent(fileContentToTest);
                done();
            });
        });
    });
    describe('With Foundation', function () {
        it('Creates expected content', function (done) {
            var fileContentToTest = [
                ['bower.json', /foundation/i]
            ];

            helpers.mockPrompt(this.app, {
                cssFramework: 'foundation'
            });

            this.app.run([], function () {
                assert.fileContent(fileContentToTest);
                done();
            });
        });
    });
});
