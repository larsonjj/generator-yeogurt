/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var Output = require( '../helpers/mute' );


describe('yeogurt generator documentation', function () {
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
            'client/docs',
            'client/docs/styleguide',
            'client/docs/dashboard',
            'client/docs/styleguide/index.html',
            'client/docs/styleguide/public/kss.js',
            'client/docs/styleguide/public/kss.less',
            'client/docs/styleguide/public/less.js',
            'client/docs/styleguide/public/markdown.less',
            'client/docs/styleguide/public/prettify.js',
            'client/docs/styleguide/public/images/yeogurt-logo.png'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'git',
            cssOption: 'sass',
            ieSupport: true,
            responsive: true,
            useGA: true,
            useFTP: true,
            jshint: true,
            useKss: true,
            useDashboard: true,
            extras: ['useFontAwesome']
        });
        this.app.options['skip-install'] = true;
        this.app.run([], function () {
            assert.file(expected);
            done();
        });
    });
});
