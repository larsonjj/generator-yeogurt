// generated on <%%= date %> using <%%= name %> <%%= version %>

var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync').create();
var config = require('./yeogurt.conf');

// Load all gulp plugins based on their names
// EX: gulp-copy -> copy
var plugins = gulpLoadPlugins();

// Gulp task folders
var subtasksDir = path.join(__dirname, 'gulp', 'subtasks');
var tasksDir = path.join(__dirname, 'gulp', 'tasks');

// Require files based on filepath
var readTasks = function readTasks(filepath) {
  fs.readdirSync(filepath).forEach(function(file) {
    require(path.join(filepath, file))({
      // Pass options data to each task
      gulp: gulp,
      config: config,
      plugins: plugins,
      browserSync: browserSync,
      rootPath: __dirname
    });
  });
};

// Load gulp subtasks
readTasks(path.join(subtasksDir, 'compile'));
readTasks(path.join(subtasksDir, 'optimize'));
readTasks(path.join(subtasksDir, 'test'));
readTasks(path.join(subtasksDir, 'util'));

// Load gulp tasks
readTasks(tasksDir);
