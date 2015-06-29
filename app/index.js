'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var _ = require('lodash');
var grabFiles = require('./helpers/grabFiles');
require('colors');

// Order to load and run generator config files based on their name
var order = [
  /* Prompts */
  'logo',
  'existing', // Check for existing .yo-rc.json file
  'project',
  'server',
  'client',
  'testing',
  'documentation',
  /* Config */
  'answers',  // Handle answers and them up for use in templates
  'save',   // Save answers to .yo-rc.json file
  /* Files */
  'root',
  'image',
  'docs',
  'task',
  'jade',
  'nunjucks',
  'style',
  'tests',
  /* Config */
  'install'   // Handle generator options and run `bower install & npm install`
];

// Create array that will hold all generator config file objects
var config = [];

// Create object that will hold all of the code needed to pass to the YeogurtGenerator
var tasks = {};

// Grab all needed generator config files
// and assign an index based on the order array
config = grabFiles([
  path.join(__dirname, '/generator/prompts'),
  path.join(__dirname, '/generator/config'),
  path.join(__dirname, '/generator/files')
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
