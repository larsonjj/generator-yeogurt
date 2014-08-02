'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var _ = require('lodash');
var grabFiles = require('./modules/grabFiles');
require('colors');

// Order to load and run generator config files based on their name
var order = [
    'logo',
    'configCheck',
    'projectInfo',
    'serverInfo',
    'clientInfo',
    'documentationInfo',
    'handleConfig',
    'saveConfig',
    'rootFiles',
    'imageFiles',
    'docFiles',
    'taskFiles',
    'viewFiles',
    'scriptFiles',
    'styleFiles',
    'serverFiles',
    'dashboardFiles',
    'testingFiles',
    'projectFiles',
    'extraFiles',
    'handleInstall'
];

// Create array that will hold all generator config file objects
var config = [];

// Create object that will hold all of the code needed to pass to the YeogurtGenerator
var tasks = {};

// Grab all needed generator config files
config = grabFiles([
    path.join(__dirname + '/generator/prompts'),
    path.join(__dirname + '/generator/config'),
    path.join(__dirname + '/generator/files')
], order);

// Sort config files based on their index ascending (ex. 3, 1, 2 -> 1, 2, 3)
config.sort(function(a, b) {
    return a.index - b.index;
});

// Attach to tasks object so that the filename becomes a key
// and the code becomes the value
config.forEach(function(item) {
    tasks[item.name] = item.code;
});


var YeogurtGenerator = yeoman.generators.Base.extend(_.merge({
    init: function() {
        this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
    }
}, tasks));

module.exports = YeogurtGenerator;