'use strict';

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  // BrowserSync
  gulp.task('browserSync', function() {
    browserSync.init({
      open: args.open ? 'local' : false,
      startPath: config.baseUrl,
      port: config.port || 3000,
      server: {
        baseDir: taskTarget,
        routes: (function() {
          var routes = {};

          // Map base URL to routes
          routes[config.baseUrl] = taskTarget;

          return routes;
        })()
      }
    });
  });
};
