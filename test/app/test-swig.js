/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var Output = require( '../helpers/mute' );


describe('yeogurt generator Swig', function () {
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
            'client/templates',
            'client/templates/layouts',
            'client/templates/index.swig',
            'client/templates/layouts/base.swig'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'svn',
            htmlOption: 'swig',
            cssOption: 'sass',
            ieSupport: true,
            useServer: false,
            responsive: true,
            useGA: true,
            useFTP: true,
            jshint: true,
            useDashboard: true,
            extras: ['useFontAwesome']
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            assert.file(expected);
            done();
        });
    });
});
