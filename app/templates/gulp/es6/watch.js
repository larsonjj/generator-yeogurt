'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;

  // Watch task
  gulp.task('watch', (done) => {
    if (!args.production) {<% if (cssOption === 'sass') { %>

      // Styles
      gulp.watch([
        path.join(dirs.source, dirs.styles, '**/*.{scss,sass}'),
        path.join(dirs.source, dirs.modules, '**/*.{scss,sass}')
      ], gulp.series('sass'));<% } else if (cssOption === 'less') { %>
      gulp.watch([
        path.join(dirs.source, dirs.styles, '**/*.less'),
        path.join(dirs.source, dirs.modules, '**/*.less'),
      ], gulp.series('less'));<% } else if (cssOption === 'stylus') { %>
      gulp.watch([
        path.join(dirs.source, dirs.styles, '**/*.styl'),
        path.join(dirs.source, dirs.modules, '**/*.styl')
      ], gulp.series('stylus'));
      <% } %><% if (htmlOption === 'jade') { %>

      // Jade Templates
      gulp.watch([
        path.join(dirs.source, '**/*.jade'),
        path.join(dirs.source, dirs.data, '**/*.{json,yaml,yml}')
      ], gulp.series('jade'));<% } else if (htmlOption === 'nunjucks') { %>

      // Nunjucks Templates
      gulp.watch([
        path.join(dirs.source, '**/*.nunjucks'),
        path.join(dirs.source, dirs.data, '**/*.{json,yaml,yml}')
      ], gulp.series('nunjucks'));
      <% } %>

      // Copy
      gulp.watch([
        path.join(dirs.source, '**/*'),
        '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}')<% if (htmlOption === 'nunjucks') { %>,
        '!' + path.join(dirs.source, '**/*.nunjucks')<% } else if (htmlOption === 'jade') { %>,
        '!' + path.join(dirs.source, '**/*.jade')<% } %>
      ], gulp.series('copy'));

      // Images
      gulp.watch([
        path.join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}')
      ], gulp.series('imagemin'));

      // All other files
      gulp.watch([
        path.join(dirs.temporary, '**/*'),
        '!' + path.join(dirs.temporary, '**/*.{css,map,html,js}')
      ]).on('change', browserSync.reload);
    }

    done();
  });
}
