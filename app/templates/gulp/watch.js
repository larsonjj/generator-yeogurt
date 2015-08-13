'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;

  // Watch task
  gulp.task('watch', () => {
    if (!args.production) {<% if (cssOption === 'sass') { %>
      // Styles
      gulp.watch([
        path.join(__dirname, dirs.source, dirs.styles, '**/*.{scss,sass}'),
        path.join(__dirname, dirs.source, dirs.modules, '**/*.{scss,sass}')
      ], ['sass']);<% } else if (cssOption === 'less') { %>
      gulp.watch([
        path.join(__dirname, dirs.source, dirs.styles, '**/*.less'),
        path.join(__dirname, dirs.source, dirs.modules, '**/*.less'),
      ], ['less']);<% } else if (cssOption === 'stylus') { %>
      gulp.watch([
        path.join(__dirname, dirs.source, dirs.styles, '**/*.styl'),
        path.join(__dirname, dirs.source, dirs.modules, '**/*.styl')
      ], ['stylus']);
      <% } %><% if (htmlOption === 'jade') { %>

      // Jade Templates
      gulp.watch([
        path.join(__dirname, dirs.source, '**/*.jade'),
        path.join(__dirname, dirs.source, dirs.data, '**/*.json')
      ], ['jade']);<% } else if (htmlOption === 'nunjucks') { %>

      // Nunjucks Templates
      gulp.watch([
        path.join(__dirname, dirs.source, '**/*.nunjucks'),
        path.join(__dirname, dirs.source, dirs.data, '**/*.json')
      ], ['nunjucks']);
      <% } %>

      // Copy
      gulp.watch([
        path.join(__dirname, dirs.source, '**/*'),
        '!' + path.join(__dirname, dirs.source, '{**/\_*,**/\_*/**}')<% if (htmlOption === 'nunjucks') { %>,
        '!' + path.join(__dirname, dirs.source, '**/*.nunjucks')<% } else if (htmlOption === 'jade') { %>,
        '!' + path.join(__dirname, dirs.source, '**/*.jade')<% } %>
      ], ['copy']);

      // Images
      gulp.watch([
        path.join(__dirname, dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}')
      ], ['imagemin']);

      // All other files
      gulp.watch([
        path.join(__dirname, dirs.temporary, '**/*')
      ]).on('change', browserSync.reload);
    }
  });
}
