'use strict';
<% if (testFramework === 'mocha' || testFramework === 'jasmine') { %>
import path from 'path';<% } %>

import gulp from 'gulp';
import glob from 'glob';

<% if (testFramework !== 'none') { %>// Create karma server
const KarmaServer = require('karma').Server;
<% } %>
// This will grab all js in the `gulp/tasks` directory
// in order to auto-load all gulp tasks
glob.sync('./gulp/tasks/**/*.js').map(file => require(file));

// Build production-ready code
gulp.task('build', gulp.series(
  gulp.parallel(
    'copy',
    'imagemin'<% if (htmlOption === 'pug') { %>,
    'pug'<% } else if (htmlOption === 'nunjucks') {  %>,
    'nunjucks'<% } %><% if (cssOption === 'less') { %>,
    'less'<% } else if (cssOption === 'sass') { %>,
    'sass'<% } else if (cssOption === 'stylus') { %>,
    'stylus'<% } %>,
    'browserify'
  )
));

// Server tasks with watch
gulp.task('serve', gulp.series(
  gulp.parallel(
    'imagemin',
    'copy'<% if (htmlOption === 'pug') { %>,
    'pug'<% } else if (htmlOption === 'nunjucks') {  %>,
    'nunjucks'<% } %><% if (cssOption === 'less') { %>,
    'less'<% } %><% if (cssOption === 'sass') { %>,
    'sass'<% } %><% if (cssOption === 'stylus') { %>,
    'stylus'<% } %>,
    'browserify',
    'browserSync',
    'watch'
  )
));

// Default task
gulp.task('default', gulp.series('clean', 'build'));

// Testing
gulp.task('test', gulp.series('eslint'<% if (testFramework === 'none') { %>);<% } else { %>, (done) => {
  new KarmaServer({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: !args.watch,
    autoWatch: args.watch
  }, done).start();
}));<% } %>
