// Clean task
// Cleans out output directories

var path = require('path');
var del = require('del');

var cleanTask = function cleanTask(options) {
  var gulp = options.gulp;
  var config = options.config;
  var dirs = config.directories;
  var rootPath = options.rootPath;

  // Removes temporary folder
  gulp.task('clean:tmp', del.bind(null, [path.join(rootPath, dirs.temporary)]));

  // Removes build folder
  gulp.task('clean:build', del.bind(null, [path.join(rootPath, dirs.destination)]));

};

module.exports = cleanTask;
