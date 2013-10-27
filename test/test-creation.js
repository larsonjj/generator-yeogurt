/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('yeogurt generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('yeogurt:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // add files you expect to exist here.
            '.editorconfig',
            'Gruntfile.js',
            'index.html',
            'bower.json',
            'config.json',
            'package.json',
            '.bowerrc'
        ];

        helpers.mockPrompt(this.app, {
            'projectName': 'testing',
            'versionControl': 'Git',
            'htmlOption': 'Jade',
            'cssOption': 'LESS',
            'javascriptOption': 'Coffeescript',
            'useModernizr': true
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
