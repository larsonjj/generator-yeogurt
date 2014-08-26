/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var Output = require( '../helpers/mute' );


describe('yeogurt generator Less with no dashboard', function () {
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

    it('creates expected files', function (done) {
        var expected = [
            // add files and folders you expect to exist here.
            'client/',
            'client/styles',
            'grunt/',
            'grunt/config',
            'grunt/config/compile/less.js'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'git',
            cssOption: 'less',
            useLesshat: true,
            ieSupport: true,
            responsive: true,
            useGA: true,
            useFTP: true,
            jshint: true,
            extras: ['useFontAwesome']
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            assert.file(expected);
            done();
        });
    });
});
