// Serve task
// Boot-up development server

var path = require('path');

var serveTask = function serveTask(options) {
  var gulp = options.gulp;
  var config = options.config;
  var dirs = config.directories;
  var rootPath = options.rootPath;
  var browserSync = options.browserSync;

  // Main task
  gulp.task('serve', ['clean:tmp'], function() {
    gulp.start('serve:tasks');
  });

  // Development server tasks
  gulp.task('serve:tasks', [
    'imagemin:serve',
    'copy:serve'<% if (htmlOption === 'jade') { %>,
    'jade:serve'<% } else if (htmlOption === 'nunjucks') {  %>,
    'nunjucks:serve'<% } %><% if (jsOption === 'browserify') { %>,
    'browserify:serve'<% } %><% if (cssOption === 'less') { %>,
    'less:serve'<% } %><% if (cssOption === 'sass') { %>,
    'sass:serve'<% } %><% if (cssOption === 'stylus') { %>,
    'stylus:serve'<% } %><% if (useDashboard) { %>,
    'dashboard:serve'<% } %>
  ], function() {
    browserSync.init({
      startPath: config.baseUrl,
      server: {
        baseDir: dirs.temporary,
        routes: (function() {
          var routes = {};

          // Map base URL to routes
          routes[config.baseUrl] = dirs.temporary;

          return routes;
        })()
      }
    });
<% if (cssOption === 'sass') { %>
    // Styles
    gulp.watch([
      path.join(rootPath, dirs.source, dirs.styles, '**/*.{scss,sass}')
    ], ['sass:serve']);<% } else if (cssOption === 'less') { %>
    gulp.watch([
      path.join(rootPath, dirs.source, dirs.styles, '**/*.less')
    ], ['less:serve']);<% } else if (cssOption === 'stylus') { %>
    gulp.watch([
      path.join(rootPath, dirs.source, dirs.styles, '**/*.styl')
    ], ['stylus:serve']);
    <% } %><% if (htmlOption === 'jade') { %>

    // Jade Templates
    gulp.watch([
      path.join(rootPath, dirs.source, '**/*.jade')
    ], ['jade:serve']);<% } else if (htmlOption === 'nunjucks') { %>

    // Swig Templates
    gulp.watch([
      path.join(rootPath, dirs.source, '**/*.nunjucks')
    ], ['nunjucks:serve']);
    <% } %>

    // Copy
    gulp.watch([
      path.join(rootPath, dirs.source, '**/*'),
      path.join('!', rootPath, dirs.source, '{**/\_*,**/\_*/**}')<% if (htmlOption === 'nunjucks') { %>,
      path.join('!', rootPath, dirs.source, '**/*.nunjucks')<% } else if (htmlOption === 'jade') { %>,
      path.join('!', rootPath, dirs.source, '**/*.jade')<% } %>
    ], ['copy:serve']);

    // Scripts
    gulp.watch([
      path.join(rootPath, dirs.source, '**/*.<% if (jsFramework === 'react') { %>{js,jsx}<% } else { %>js<% } %>')
    ], ['browserify:serve']);

    // Images
    gulp.watch([
      path.join(rootPath, dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}')
    ], ['imagemin:serve']);

    // All other files
    gulp.watch([
      path.join(rootPath, dirs.temporary)
    ]).on('change', browserSync.reload);

  });

};

module.exports = serveTask;
