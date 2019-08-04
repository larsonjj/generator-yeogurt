'use strict';

import { gulp, args, browserSync, dirs, join } from '../shared-vars';

// Watch task
gulp.task('watch', (done) => {
  if (!args.production) {<% if (cssOption === 'sass') { %>
    // Styles
    gulp.watch([
      join(dirs.source, dirs.styles, '**/*.{scss,sass}'),
      join(dirs.source, dirs.modules, '**/*.{scss,sass}')
    ], gulp.series('sass'));<% } else if (cssOption === 'less') { %>
    gulp.watch([
      join(dirs.source, dirs.styles, '**/*.less'),
      join(dirs.source, dirs.modules, '**/*.less'),
    ], gulp.series('less'));<% } else if (cssOption === 'stylus') { %>
    gulp.watch([
      join(dirs.source, dirs.styles, '**/*.styl'),
      join(dirs.source, dirs.modules, '**/*.styl')
    ], gulp.series('stylus'));
    <% } %><% if (htmlOption === 'pug') { %>

    // Pug Templates
    gulp.watch([
      join(dirs.source, '**/*.pug'),
      join(dirs.source, dirs.data, '**/*.{json,yaml,yml}')
    ], gulp.series('pug'));<% } else if (htmlOption === 'nunjucks') { %>

    // Nunjucks Templates
    gulp.watch([
      join(dirs.source, '**/*.nunjucks'),
      join(dirs.source, dirs.data, '**/*.{json,yaml,yml}')
    ], gulp.series('nunjucks'));
    <% } %>

    // Copy
    gulp.watch([
      join(dirs.source, '**/*'),
      '!' + join(dirs.source, '{**/\_*,**/\_*/**}')<% if (htmlOption === 'nunjucks') { %>,
      '!' + join(dirs.source, '**/*.nunjucks')<% } else if (htmlOption === 'pug') { %>,
      '!' + join(dirs.source, '**/*.pug')<% } %>
    ], gulp.series('copy'));

    // Images
    gulp.watch([
      join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}')
    ], gulp.series('imagemin'));

    // All other files
    gulp.watch([
      join(dirs.temporary, '**/*'),
      '!' + join(dirs.temporary, '**/*.{css,map,html,js}')
    ]).on('change', browserSync.reload);
  }
  done();
});
