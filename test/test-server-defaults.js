/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('yeogurt generator server defaults', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('yeogurt:app', [
                '../../app',
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // add files and folders you expect to exist here.
            'grunt/config/open.js',
            'grunt/config/express.js',
            'server/templates/index.html',
            'server/modules',
            'server/modules/reactRender.js',
            'server/config/database.js',
            'server/routes.js',
            'server/modules/serverCheck.js',
            'server.js'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'Git',
            singlePageApplication: true,
            htmlOption: 'Jade',
            cssOption: 'Sass',
            jsOption: 'RequireJS',
            jsTemplate: 'React',
            dbOption: 'MongoDB',
            useServer: true,
            ieSupport: false,
            responsive: false,
            useGA: false,
            useFTP: false,
            jshint: false,
            extras: []
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });
});
