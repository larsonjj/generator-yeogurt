/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var Output = require( '../helpers/mute' );


describe('Collection sub-generator: React', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('yeogurt:app', [
                '../../../app'
            ]);

            // Prevent Yeoman writes while the generator runs
            // and reenable them when it's finished to see the test results
            this.app.on( 'start', Output.mute );
            this.app.on( 'end', Output.unmute );
            done();
        }.bind(this));
    });

    it('Does not create any collection files', function (done) {
        var collection = 'mycollection';
        var filesToTest = [
            // add files and folders you expect to NOT exist here.
            'test/spec/collections/' + collection + '.js'
        ];

        helpers.mockPrompt(this.app, {
            jsFramework: 'react',
            extras: []
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function() {
            var collectionGen = helpers.createGenerator(
                'yeogurt:collection', [
                    '../../../collection'
                ],
                [collection]
            );
            collectionGen.on( 'start', Output.mute );
            collectionGen.on( 'end', Output.unmute );
            collectionGen.run({}, function() {
                assert.noFile(filesToTest);
                done();
            });
        });
    });
});
