// Dashboard task
// Creates dashboard based on *.dash files

var path = require('path');

var dashboardTask = function dashboardTask(options) {
  var gulp = options.gulp;
  var config = options.config;
  var dirs = config.directories;
  var plugins = options.plugins;
  var rootPath = options.rootPath;
  var source = path.join(rootPath, dirs.source, '**/*.dash.{json,<% if (htmlOption === "jade") { %>jade<% } else if (htmlOption === "nunjucks") { %>nunjucks<% } %>}');

  // Serve
  gulp.task('dashboard:serve', function() {
    var dest = path.join(rootPath, dirs.temporary, dirs.docs.replace(/^_/, ''), 'dashboard');
    return gulp.src(source)
      .pipe(plugins.dashboard({<% if (htmlOption === "jade") { %>
        compiler: require('jade'),
        compilerOptions: {pretty: true, filename: true},<% } else if (htmlOption === "nunjucks") { %>
        compiler: require('nunjucks'),<% } %>
        dashTemplate: path.join(rootPath, dirs.source, dirs.docs, 'dashboard/dashboard-template.hbs'),
        moduleTemplate: path.join(rootPath, dirs.source, dirs.docs, 'dashboard/module-template.hbs'),
        name: 'index',
        logo: 'images/yeogurt-logo.png'
      }))
      .pipe(gulp.dest(dest));
  });

  // Build
  gulp.task('dashboard:build', function() {
    var dest = path.join(rootPath, dirs.destination, dirs.docs.replace(/^_/, ''), 'dashboard');
    return gulp.src(source)
      .pipe(plugins.dashboard({<% if (htmlOption === "jade") { %>
        compiler: require('jade'),
        compilerOptions: {pretty: true, filename: true},<% } else if (htmlOption === "nunjucks") { %>
        compiler: require('nunjucks'),<% } %>
        dashTemplate: path.join(rootPath, dirs.source, dirs.docs, 'dashboard/dashboard-template.hbs'),
        moduleTemplate: path.join(rootPath, dirs.source, dirs.docs, 'dashboard/module-template.hbs'),
        name: 'index',
        logo: 'images/yeogurt-logo.png'
      }))
      .pipe(gulp.dest(dest));
  });

};

module.exports = dashboardTask;
