/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;


describe('Yeogurt generator using HTML', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

            done();
        }.bind(this));
    });

    it('Creates expected files', function (done) {
        var expected = [
            'client/',
            'client/index.html'
        ];

        helpers.mockPrompt(this.app, {
            singlePageApplication: false,
            htmlOption: 'html',
        });

        this.app.run([], function () {
            assert.file(expected);
            done();
        });
    });
});
