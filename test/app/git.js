/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;


describe('Yeogurt generator using Git', function () {
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
            // add files and folders you expect to exist here.
            '.gitignore',
            '.gitattributes'
        ];

        helpers.mockPrompt(this.app, {
            versionControl: 'git',
        });
        this.app.options['skip-install'] = true;
        this.app.run([], function () {
            assert.file(expected);
            done();
        });
    });
});
