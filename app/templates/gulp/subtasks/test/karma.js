// Karma task
// Runs script tests

var path = require('path');
var karma = require('karma').server;

var karmaTask = function karmaTask(options) {
  var gulp = options.gulp;
  var rootPath = options.rootPath;

  // Run tests once (no watching)
  gulp.task('karma:unit', function(done) {
    karma.start({
      configFile: path.join(rootPath, '/karma.conf.js'),
      singleRun: true,
      autoWatch: false
    }, done);
  });

  // Run tests a continue watching for changes
  // If change is detected, run tests again
  gulp.task('karma:unitWatch', function(done) {
    karma.start({
      configFile: path.join(rootPath, '/karma.conf.js'),
      singleRun: false,
      autoWatch: true
    }, done);
  });

};

module.exports = karmaTask;
