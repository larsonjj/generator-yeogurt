'use strict';

var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var Output  = require('../helpers/mute');

var createSubGenerator = function(type, args, options, asserts) {
    var subGenerator = helpers.createGenerator('yeogurt:' + type, [
        '../../../' + type
    ], args, options);

    subGenerator.on( 'start', Output.mute );
    subGenerator.on( 'end', Output.unmute );

    subGenerator.run([], function() {
        asserts();
    });
};

var createAppGenerator = function(args, options) {
    var app = helpers.createGenerator('yeogurt:app', [
        '../../../app'
    ], args, options);

    app.options['skip-install'] = true;

    // Prevent Yeoman writes while the generator runs
    // and reenable them when it's finished to see the test results
    // app.on('start', Output.mute);
    // app.on('end', Output.unmute);

    return app;
};

module.exports = {
    createSubGenerator: createSubGenerator,
    createAppGenerator: createAppGenerator
};