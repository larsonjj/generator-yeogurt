'use strict';

var fs = require('fs');
var path = require('path');
var foldero = require('foldero');
var pug = require('pug');
var yaml = require('js-yaml');
var gulpif = require('gulp-if');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var dest = path.join(taskTarget);
  var dataPath = path.join(dirs.source, dirs.data);

  // Pug template compile
  gulp.task('pug', function() {
    var siteData = {};
    if (fs.existsSync(dataPath)) {
      // Convert directory to JS Object
      siteData = foldero(dataPath, {
        recurse: true,
        whitelist: '(.*/)*.+\.(json|ya?ml)$',
        loader: function loadAsString(file) {
          var json = {};
          try {
            if (path.extname(file).match(/^.ya?ml$/)) {
              json = yaml.safeLoad(fs.readFileSync(file, 'utf8'));
            }
            else {
              json = JSON.parse(fs.readFileSync(file, 'utf8'));
            }
          }
          catch(e) {
            console.log('Error Parsing DATA file: ' + file);
            console.log('==== Details Below ====');
            console.log(e);
          }
          return json;
        }
      });
    }

    // Add --debug option to your gulp task to view
    // what data is being loaded into your templates
    if (args.debug) {
      console.log('==== DEBUG: site.data being injected to templates ====');
      console.log(siteData);
      console.log('\n==== DEBUG: package.json config being injected to templates ====');
      console.log(config);
    }

    return gulp.src([
      path.join(dirs.source, '**/*.pug'),
      '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}')
    ])
    .pipe(plugins.changed(dest))
    .pipe(plugins.plumber())
    .pipe(plugins.pug({
      pug: pug,
      pretty: true,
      locals: {
        config: config,
        debug: true,
        site: {
          data: siteData
        }
      }
    }))
    .pipe(gulpif(args.production, plugins.htmlmin({
      collapseBooleanAttributes: true,
      conservativeCollapse: true,
      removeCommentsFromCDATA: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      collapseWhitespace: true
    })))
    .pipe(gulp.dest(dest))
    .on('end', browserSync.reload);
  });
};
