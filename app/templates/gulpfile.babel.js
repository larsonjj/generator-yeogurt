import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSyncLib from 'browser-sync';
import pjson from './package.json';
import minimist from 'minimist';
import runSequence from 'run-sequence';
import pngquant from 'imagemin-pngquant';
import del from 'del';
import autoprefixer from 'autoprefixer-core'
import vsource from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import es from 'event-stream';
import glob from 'glob';
import browserify from 'browserify';
import gulpif from 'gulp-if';
import jade from 'jade';

// Load all gulp plugins based on their names
// EX: gulp-copy -> copy
const plugins = gulpLoadPlugins();
<% if (testFramework !== 'none') { %>
// Create karma server
const karma = require('karma').server;<% } %>

let config = pjson.config;
let argv = minimist(process.argv.slice(2));
let production = !!(argv.production);
let watch = !!(argv.watch);
let open = !!(argv.open);
let dirs = config.directories;
let taskTarget = production ? dirs.destination : dirs.temporary;

// Create a new browserSync instance
let browserSync = browserSyncLib.create();

// Converts filepath/directory into a JS object recursively
// ex: `js/data.json` -> `{js: {data: [JSON Data]}`
let parseDirectory = (filepath, obj) => {
  let stats = fs.lstatSync(filepath);
  if (stats.isDirectory()) {
    obj[path.basename(filepath)] = {};
    fs.readdirSync(filepath).map(function(child) {
      obj[path.basename(filepath)] = parseDirectory(
        path.join(filepath, child),
        obj[path.basename(filepath)]
      );
    });
  }
  else {
    try {
      obj[path.basename(filepath).replace('.json', '')] = JSON.parse(
        fs.readFileSync(filepath, {encoding: 'utf8'})
      );
    }
    catch (e) {
      console.error('Error reading JSON for file: ' + filepath);
      console.error('===== Details Below =====');
      console.error(e);
    }
  }
  return obj;
};

let dirToObj = (filepath) => {
  let dataObj = {};
  try {
    return parseDirectory(filepath, dataObj);
  }
  catch (e) {
    return {_data: {}}
  }
};
<% if (htmlOption === 'jade') { %>
// Jade template compile
gulp.task('jade', () => {
  let dest = path.join(__dirname, taskTarget);
  // Convert directory to JS Object
  let siteData = dirToObj(path.join(__dirname, dirs.source, dirs.data));
  return gulp.src([
    path.join(__dirname, dirs.source, '**/*.jade'),
    path.join('!', __dirname, dirs.source, '{**/\_*,**/\_*/**}')
  ])
  .pipe(plugins.changed(dest))
  .pipe(plugins.jade({
    jade: jade,
    locals: {
      config: config,
      debug: true,
      site: {
        data: siteData[dirs.data]
      }
    }
  }))
  .pipe(plugins.htmlmin({
    collapseBooleanAttributes: true,
    conservativeCollapse: true,
    removeCommentsFromCDATA: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true
  }))
  .pipe(gulp.dest(dest))
  .pipe(browserSync.stream());
});<% } else if (htmlOption === 'nunjucks') { %>
// Nunjucks template compile
gulp.task('nunjucks', () => {
  // Configure lookup path for nunjucks templates
  plugins.nunjucksRender.nunjucks.configure([path.join(__dirname, dirs.source)], {watch: false});
  let dest = path.join(__dirname, taskTarget);
  // Convert directory to JS Object
  let siteData = dirToObj(path.join(__dirname, dirs.source, dirs.data));
  return gulp.src([
    path.join(__dirname, dirs.source, '**/*.nunjucks'),
    path.join('!', __dirname, dirs.source, '{**/\_*,**/\_*/**}')
  ])
  .pipe(plugins.changed(dest))
  .pipe(plugins.data({
    data: {
      config: config,
      debug: true,
      site: {
        data: siteData
      }
    }
  }))
  .pipe(plugins.nunjucksRender())
  .pipe(plugins.htmlmin({
    collapseBooleanAttributes: true,
    conservativeCollapse: true,
    removeCommentsFromCDATA: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true
  }))
  .pipe(gulp.dest(dest))
  .pipe(browserSync.stream());
});<% } %>
<% if (cssOption === 'sass') { %>
// Sass compilation
gulp.task('sass', () => {
  let dest = path.join(__dirname, taskTarget, dirs.styles.replace(/^_/, ''));
  gulp.src(path.join(__dirname, dirs.source, dirs.styles, '/*.{scss,sass}'))
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: [path.join(__dirname, dirs.source, dirs.styles) ]
    }).on('error', plugins.sass.logError))
    .pipe(plugins.postcss([autoprefixer({browsers: ['last 2 version', '> 5%', 'safari 5', 'ios 6', 'android 4']})]))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
});<% } else if (cssOption === 'less') { %>

// Less compilation
gulp.task('less', () => {
  let dest = path.join(__dirname, taskTarget, dirs.styles.replace(/^_/, ''));
  return gulp.src(path.join(__dirname, dirs.source, dirs.styles, '/*.less'))
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less({
      paths: [path.join(__dirname, dirs.source, dirs.styles)]
    }))
    .pipe(plugins.postcss([autoprefixer({browsers: ['ie >= 9']})]))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
});<% } else if (cssOption === 'stylus') { %>

// Stylus compilation
gulp.task('stylus', () => {
  let dest = path.join(__dirname, taskTarget, dirs.styles.replace(/^_/, ''));
  gulp.src(path.join(__dirname, dirs.source, dirs.styles, '/*.styl'))
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.stylus({
      compress: false
    }))
    .pipe(plugins.postcss([autoprefixer({browsers: ['ie >= 9']})]))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
});<% } %>

// ESLint
gulp.task('eslint', () => {
  gulp.src([
    path.join(__dirname, 'gulpfile.js'),
    path.join(__dirname, dirs.source, '**/*.js'),
    // Ignore all vendor folder files
    path.join('!', __dirname, '**/vendor/**', '*')
  ])
  .pipe(browserSync.reload({stream: true, once: true}))
  .pipe(plugins.eslint({
    useEslintrc: true
  }))
  .pipe(plugins.eslint.format())
  .pipe(plugins.if(!browserSync.active, plugins.eslint.failAfterError()));
});

// Imagemin
gulp.task('imagemin', () => {
  let dest = path.join(__dirname, taskTarget, dirs.images.replace(/^_/, ''));
  return gulp.src(path.join(__dirname, dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}'))
    .pipe(plugins.changed(dest))
    .pipe(gulpif(production, plugins.imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant({speed: 10})]
    })))
    .pipe(gulp.dest(dest));
});

gulp.task('browserify', () => {
  let dest = path.join(__dirname, taskTarget, dirs.scripts.replace(/^_/, ''));
  browserify(
    path.join(__dirname, dirs.source, dirs.scripts, '/main.<%if (jsFramework === 'react') { %>jsx<% } else { %>js<% } %>'), {
    debug: true,
    transform: [
      require('envify'),
      require('babelify')
    ]
  }).bundle()
    .pipe(vsource(path.basename('main.js')))
    .pipe(buffer())
    .pipe(plugins.sourcemaps.init({loadMaps: true}))
      .pipe(gulpif(production, plugins.uglify()))
      .on('error', plugins.util.log)
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
});

// Clean
gulp.task('clean', del.bind(null, [
  path.join(__dirname, dirs.temporary),
  path.join(__dirname, dirs.destination)
]));

// Serve
gulp.task('copy', () => {
  let dest = path.join(__dirname, taskTarget);
  return gulp.src([
      path.join(__dirname, dirs.source, '**/*'),
      path.join('!', __dirname, dirs.source, '{**/\_*,**/\_*/**}')<% if (htmlOption === 'nunjucks') { %>,
      path.join('!', __dirname, dirs.source, '**/*.nunjucks')<% } else if (htmlOption === 'jade') { %>,
      path.join('!', __dirname, dirs.source, '**/*.jade')<% } %>
    ])
    .pipe(plugins.changed(dest))
    .pipe(gulp.dest(dest));
});

// Default task
gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

// Build production-ready code
gulp.task('build', [
  'copy',
  'imagemin',<% if (htmlOption === 'jade') { %>
  'jade',<% } else if (htmlOption === 'nunjucks') {  %>
  'nunjucks',<% } %><% if (cssOption === 'less') { %>
  'less',<% } else if (cssOption === 'sass') { %>
  'sass',<% } else if (cssOption === 'stylus') { %>
  'stylus',<% } %>
  'browserify'
]);

// Server tasks with watch
gulp.task('serve', [
    'imagemin',
    'copy'<% if (htmlOption === 'jade') { %>,
    'jade'<% } else if (htmlOption === 'nunjucks') {  %>,
    'nunjucks'<% } %><% if (jsOption === 'browserify') { %>,
    'browserify'<% } %><% if (cssOption === 'less') { %>,
    'less'<% } %><% if (cssOption === 'sass') { %>,
    'sass'<% } %><% if (cssOption === 'stylus') { %>,
    'stylus'<% } %>
  ], () => {

    browserSync.init({
      open: open ? 'local' : false,
      startPath: config.baseUrl,
      server: {
        baseDir: taskTarget,
        routes: (() => {
          let routes = {};

          // Map base URL to routes
          routes[config.baseUrl] = taskTarget;

          return routes;
        })()
      }
    });

    if (!production) {
<% if (cssOption === 'sass') { %>
      // Styles
      gulp.watch([
        path.join(__dirname, dirs.source, dirs.styles, '**/*.{scss,sass}')
      ], ['sass']);<% } else if (cssOption === 'less') { %>
      gulp.watch([
        path.join(__dirname, dirs.source, dirs.styles, '**/*.less')
      ], ['less']);<% } else if (cssOption === 'stylus') { %>
      gulp.watch([
        path.join(__dirname, dirs.source, dirs.styles, '**/*.styl')
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
        path.join('!', __dirname, dirs.source, '{**/\_*,**/\_*/**}')<% if (htmlOption === 'nunjucks') { %>,
        path.join('!', __dirname, dirs.source, '**/*.nunjucks')<% } else if (htmlOption === 'jade') { %>,
        path.join('!', __dirname, dirs.source, '**/*.jade')<% } %>
      ], ['copy']);

      // Scripts
      gulp.watch([
        path.join(__dirname, dirs.source, '**/*.js')
      ], ['browserify']);

      // Images
      gulp.watch([
        path.join(__dirname, dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}')
      ], ['imagemin']);

      // All other files
      gulp.watch([
        path.join(__dirname, dirs.temporary, '**/*')
      ]).on('change', browserSync.reload);
    }
  }
);

// Testing
gulp.task('test',<% if (testFramework === 'none') { %> ['eslint']);<% } else { %> (done) => {
  karma.start({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: !watch,
    autoWatch: watch
  }, done);
});<% } %>
