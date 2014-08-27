/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var Output  = require( '../helpers/mute' );


describe('Script sub-generator', function () {
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
            this.app.run({}, function() {
                var scriptGen = helpers.createGenerator(
                    'yeogurt:script', [
                        '../../../script'
                    ],
                    [script]
                );
                scriptGen.on( 'start', Output.mute );
                scriptGen.on( 'end', Output.unmute );
                scriptGen.run({}, function() {
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
            this.app.run({}, function() {
                var scriptGen = helpers.createGenerator(
                    'yeogurt:script', [
                        '../../../script'
                    ],
                    [script],
                    {
                        folder: folder
                    }
                );
                scriptGen.on( 'start', Output.mute );
                scriptGen.on( 'end', Output.unmute );
                scriptGen.run({}, function() {
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
            this.app.run({}, function() {
                var scriptGen = helpers.createGenerator(
                    'yeogurt:script', [
                        '../../../script'
                    ],
                    [script],
                    {
                        folder: folder
                    }
                );
                scriptGen.on( 'start', Output.mute );
                scriptGen.on( 'end', Output.unmute );
                scriptGen.run({}, function() {
                    assert.file(filesToTest);
                    done();
                });
            });
        });
    });
});
