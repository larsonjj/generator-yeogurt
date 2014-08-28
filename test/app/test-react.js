/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var Output = require( '../helpers/mute' );


describe('yeogurt generator backbone + react', function () {
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
            'client/scripts/components',
            'client/scripts/routes.js',
            'client/scripts/components/main.jsx',
            'test/helpers/phantomjs-shims.js',
            'client/index.html'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'svn',
            jsFramework: 'react',
            jsOption: 'browserify',
            singlePageApplication: true,
            cssOption: 'sass',
            useServer: false,
            ieSupport: true,
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
