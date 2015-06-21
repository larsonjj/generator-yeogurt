// Eslint task
// Lints scripts

var path = require('path');

var eslintTask = function eslintTask(options) {
  var gulp = options.gulp;
  var config = options.config;
  var dirs = config.directories;
  var plugins = options.plugins;
  var rootPath = options.rootPath;
  var browserSync = options.browserSync;

  gulp.task('eslint', function() {
    gulp.src([
      path.join(rootPath, 'gulpfile.js'),
      path.join(rootPath, dirs.source, '**/*.<% if (jsFramework === 'react') { %>{js,jsx}<% } else { %>js<% } %>'),
      // Ignore all vendor folder files
      path.join('!', rootPath, '**/vendor/**', '*')
    ])
    .pipe(browserSync.reload({stream: true, once: true}))
    .pipe(plugins.eslint({
      useEslintrc: true
    }))
    .pipe(plugins.eslint.format())
    .pipe(plugins.if(!browserSync.active, plugins.eslint.failAfterError()));
  });

};

module.exports = eslintTask;
