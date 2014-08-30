/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var Output = require( '../helpers/mute' );


describe('yeogurt generator server with handlebars templates', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('yeogurt:app', [
                '../../../app',
            ]);

            // Prevent Yeoman writes while the generator runs
            // and reenable them when it's finished to see the test results
            this.app.on( 'start', Output.mute );
            this.app.on( 'end', Output.unmute );
            done();
        }.bind(this));
    });

    it('Creates expected files', function (done) {
        var expected = [
            // add files and folders you expect to exist here.
            'server/modules/hbsRender.js'
        ];

        helpers.mockPrompt(this.app, {
            singlePageApplication: true,
            jsFramework: 'backbone',
            useServer: true,
            jsTemplate: 'handlebars'
        });
        this.app.options['skip-install'] = true;
        this.app.run([], function () {
            assert.file(expected);
            done();
        });
    });
});
