'use strict';

var path = require('path');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var dest = path.join(taskTarget);

  // Copy
  gulp.task('copy', function() {
    return gulp.src([
      path.join(dirs.source, '**/*'),
      '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}')<% if (htmlOption === 'nunjucks') { %>,
      '!' + path.join(dirs.source, '**/*.nunjucks')<% } else if (htmlOption === 'jade') { %>,
      '!' + path.join(dirs.source, '**/*.jade')<% } %>
    ])
    .pipe(plugins.changed(dest))
    .pipe(gulp.dest(dest));
  });
};
