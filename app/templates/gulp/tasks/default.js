// Default task
// Cleans out and creates a production build of the site/app

var defaultTask = function defaultTask(options) {
  var gulp = options.gulp;

  gulp.task('default', ['build']);

};

module.exports = defaultTask;
