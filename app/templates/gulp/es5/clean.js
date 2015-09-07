'use strict';

var path = require('path');
var del = require('del');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;

  // Clean
  gulp.task('clean', del.bind(null, [
    path.join(dirs.temporary),
    path.join(dirs.destination)
  ]));
};
