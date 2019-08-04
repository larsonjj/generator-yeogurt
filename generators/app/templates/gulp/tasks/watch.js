'use strict';

import { gulp, args, browserSync, dirs } from '../shared-vars';

import path from 'path';

// Watch task
gulp.task('watch', () => {
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
    <% } %><% if (htmlOption === 'pug') { %>

    // Pug Templates
    gulp.watch([
      path.join(dirs.source, '**/*.pug'),
      path.join(dirs.source, dirs.data, '**/*.{json,yaml,yml}')
    ], gulp.series('pug'));<% } else if (htmlOption === 'nunjucks') { %>

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
      '!' + path.join(dirs.source, '**/*.nunjucks')<% } else if (htmlOption === 'pug') { %>,
      '!' + path.join(dirs.source, '**/*.pug')<% } %>
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
});
