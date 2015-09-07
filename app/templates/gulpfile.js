'use strict';
<% if (testFramework === 'mocha' || testFramework === 'jasmine') { %>
var path = require('path');<% } %>
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSyncLib = require('browser-sync');
var pjson = require('./package.json');
var minimist = require('minimist');
var wrench = require('wrench');

// Load all gulp plugins based on their names
// EX: gulp-copy -> copy
var plugins = gulpLoadPlugins();<% if (testFramework !== 'none') { %>
// Create karma server
var karma = require('karma').server;<% } %>

var config = pjson.config;
var args = minimist(process.argv.slice(2));
var dirs = config.directories;
var taskTarget = args.production ? dirs.destination : dirs.temporary;

// Create a new browserSync instance
var browserSync = browserSyncLib.create();

// This will grab all js in the `gulp` directory
// in order to load all gulp tasks
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(gulp, plugins, args, config, taskTarget, browserSync);
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('build');
});

// Build production-ready code
gulp.task('build', [
  'copy',
  'imagemin'<% if (htmlOption === 'jade') { %>,
  'jade'<% } else if (htmlOption === 'nunjucks') {  %>,
  'nunjucks'<% } %><% if (cssOption === 'less') { %>,
  'less'<% } else if (cssOption === 'sass') { %>,
  'sass'<% } else if (cssOption === 'stylus') { %>,
  'stylus'<% } %>,
  'browserify'
]);

// Server tasks with watch
gulp.task('serve', [
  'imagemin',
  'copy'<% if (htmlOption === 'jade') { %>,
  'jade'<% } else if (htmlOption === 'nunjucks') {  %>,
  'nunjucks'<% } %><% if (cssOption === 'less') { %>,
  'less'<% } %><% if (cssOption === 'sass') { %>,
  'sass'<% } %><% if (cssOption === 'stylus') { %>,
  'stylus'<% } %>,
  'browserify',
  'browserSync',
  'watch'
]);

// Testing
gulp.task('test',<% if (testFramework === 'none') { %> ['eslint']);<% } else { %> function(done) {
  karma.start({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: !args.watch,
    autoWatch: args.watch
  }, done);
});<% } %>
