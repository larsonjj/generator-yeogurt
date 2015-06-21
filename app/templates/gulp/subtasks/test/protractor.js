// Protractor task
// Runs end-to-end tests

var path = require('path');

var protractorTask = function protractorTask(options) {
  var gulp = options.gulp;
  var config = options.config;
  var dirs = config.directories;
  var plugins = options.plugins;
  var browserSync = options.browserSync;
  var rootPath = options.rootPath;

  gulp.task('protractor', function(done) {
    gulp.src(path.join(rootPath, dirs.temporary, dirs.scripts.replace(/^_/, ''), 'main.js'))
      .pipe(plugins.protractor.protractor({
          configFile: path.join(rootPath, 'protractor.conf')
      }))
      .on('end', function() {
        browserSync.exit();
        return done();
      })
      .on('error', function(e) {
        browserSync.exit();
        throw e;
      });
  });

};

module.exports = protractorTask;
