### v1.5.0:
#### date: 2015-1-18
##### changes:
* Added YAML support for files in the generated `data/` folder. [#164](https://github.com/larsonjj/generator-yeogurt/pull/164)
* Fixed style streams for Less compilation. [#160](https://github.com/larsonjj/generator-yeogurt/pull/160)
* Updated all npm modules to their latest packages.
* Switched gulp-css-minify to gulp-cssnano.

### v1.4.0:
#### date: 2015-10-26
##### changes:
* Updated all npm modules to their latest packages.
* Changed autoprefixer-core to autoprefixer.
* Fixed readme typo for layouts
* Updated nunjucks modules to work better and have configurable options via 'spec' object
* Changed 'config' object to 'spec' to avoid naming conflict with global configuration in templates
* Updated jade modules to use the &attributes functionality

### v1.3.3:
#### date: 2015-9-27
##### changes:
* Minifify CSS in production. [#151](https://github.com/larsonjj/generator-yeogurt/pull/151)
* Fix order of envify browserify transform when using ES6/2015

### v1.3.2:
#### date: 2015-9-07
##### changes:
* Fixed browserify error messaging

### v1.3.1:
#### date: 2015-9-07
##### changes:
* Fixed typos and other misc. documentation

### v1.3.0:
#### date: 2015-9-07
##### changes:
* Added the `--debug` option to gulp tasks so user can view data being injected into their templates
* Added new option to choose between ES5 and ES6/2015
* Fixed issue where browserSync was running during a build
* Fixed documentation errors for data loading
* Updated sites to using relative pathing rather than absolute pathing. This allows for offline site viewing (no need for server)

### v1.2.8:
#### date: 2015-9-02
##### changes:
* Fixed Link module issue where `config` should have been `_config` when referencing new options
* Updated gulp.watch to ignore .css, .js, .html and .map files so browsers correctly inject styles and only reload the browser when necessary (much less reload spam)
* Added new prompt to allow for ES5 rather than forcing ES6/2015 for JavaScript

### v1.2.7:
#### date: 2015-8-27
##### changes:
* Fixed browserify rebundling. [#146](https://github.com/larsonjj/generator-yeogurt/pull/146)

### v1.2.6:
#### date: 2015-8-19
##### changes:
* Updated documentation

### v1.2.5:
#### date: 2015-8-19
##### changes:
* Added ability for stylesheet preprocessors and browserify to better handle entry globs in `package.json` configuration
* Fixed nunjucks index template so it now shows the correct version of yeogurt when first generated
* Updated subgenerator unit tests to have better coverage and folder structure

### v1.2.4:
#### date: 2015-8-17
##### changes:
* Added test for generated Link module
* Fixed markdown in README

### v1.2.3:
#### date: 2015-8-17
##### changes:
* Fixed data parsing for jade and nunjucks tasks
* Added Link module import for styles

### v1.2.2:
#### date: 2015-8-17
##### changes:
* Updated Less and Stylus compilation to have the same autoprefixer settings as Sass.

### v1.2.1:
#### date: 2015-8-17
##### changes:
* Fixed nunjucks file creation issue
* Fixed _data folder reading error

### v1.2.0:
#### date: 2015-8-17
##### changes:
* Removed `_data` folder parsing logic in favor of the `foldero` npm package. Cleans up gulpfile.
* Moved gulp tasks into their own files to increase readability
* Added more information to generated README.md file to show generator version and technologies chosen
* Added README files to src folders to give more instruction on what goes into those folders
* Added more information on how use bower and shim third-party dependencies for browserify
* Added `--atomic` option to the module sub-generaator for those who want to use [atomic design](http://patternlab.io/about.html).
* Added Link module to every generated project to serve as an example of how modules should be created.

### v1.1.0:
#### date: 2015-8-13
##### changes:
* Added `entries` data to `package.json` that allows users to configure what browserify and stylesheet preprocessors look for. This can be used to create multiple `.js` bundles and `.css` files
* Updated browserify, browserSync, and gulp.watch tasks to play better together and run in parallel. (Should improve dev server bootup)
* Added documentation on how to add a [custom dashboard](https://github.com/larsonjj/yeogurt-dashboard-example)

### v1.0.8:
#### date: 2015-8-07
##### changes:
* No longer ignore `.yo-rc.json` as it is needed for sub-generators

### v1.0.7:
#### date: 2015-8-07
##### changes:
* Fixed production build for browserify
* Fixed gulp.watch for module stylesheets
* Added dependencies to remove npm v3 warnings
* Moved babelify to devDependencies

### v1.0.6:
#### date: 2015-7-30
##### changes:
* Added watchify to browserify task for faster rebuilds of JS
* Changed *.spec files to *.test
* Fixed unit test error with module subgenerator unit test files
* Updated Karma to use phantomjs so there is no longer a hard dependency on Chrome

### v1.0.5:
#### date: 2015-7-28
##### changes:
* Fixed exiting out of gulp.watch on error for Jade, Nunjucks, and Browserify

### v1.0.4:
#### date: 2015-7-24
##### changes:
* Updated documentation

### v1.0.3:
#### date: 2015-7-17
##### changes:
* Fixed issue where css preprocessors had sourcemaps inline in production builds
* Updated default port to 3000

### v1.0.2:
#### date: 2015-7-16
##### changes:
* Fixed [#142](https://github.com/larsonjj/generator-yeogurt/issues/142). ESLint not ignoring vendor folders

### v1.0.1:
#### date: 2015-7-14
##### changes:
* Fixed JSON parse error when not using a test framework
* Fixed karma loading module when not using a test framework
* Fixed issue with loading normalize.css within main.less
* Fixed issue with loading normalize.css within main.styl
* Fixed issue with loading jade on nunjucks projects

### v1.0.0:
#### date: 2015-7-11
##### changes:
* Added new configuration data to the `package.json` file to handle preview server and directory configurations.
  - Authors can now make changes to the generated directory structure by mapping their folders within `package.json`.
* Added logic to read JSON files within the `_data` folder that will be loaded into chosen template engine attached to `site.data` object.
* Added [envify](https://github.com/hughsk/envify) to ensure production code is used in browserify builds
* Updated linter to use [ESLint](http://eslint.org/) instead of [JSHint](http://jshint.com/) for better ES6 support and easier configuration.
* Updated [Grunt](http://gruntjs.com) tasks to now use [Gulp](http://gulpjs.com) instead. Have seen a major speedup as well as much less code needed.
* Updated [Swig](http://paularmstrong.github.io/swig/) templates to now be [Nunjucks](https://mozilla.github.io/nunjucks/) as the syntax is identical. [Swig](http://paularmstrong.github.io/swig/) has also been somewhat abandoned and [Nunjucks](https://mozilla.github.io/nunjucks/) is backed by Mozilla
* Updated folder structure to utilize a [Jekyll](http://jekyllrb.com/docs/structure/)-esque underscore prefixes.
  - Folders prefixed with an underscore (`_`) will not be copied over to build targets (ex. `_styles`).
  - Folders NOT prefixed with an underscore (`_`) WILL be copied over to build targets (Ex. `fonts/`).
  - Jade/Nunjucks templates will not be copied over.
* Updated Karma to default to using Chrome as the default browser to launch when running tests.
* Updated Node dependency to require `v0.12.0` and up.
* Updated [LiveReload](http://livereload.com/) to instead use [BrowserSync](http://www.browsersync.io/).
* Updated static site generators to the following:
  - Page: Creates a new page within it's own folder (ex `contact/index.jade`). This created clean urls (ex: `localhost:3000/contact`).
  - Module: Creates a new module within it's own folder (ex `_modules/newmodule/newmodule.jade`). Along with JavaScript, unit test, and stylesheet.
  - Layout: Creates a new layout witin the layout folder (ex `_layouts/newlayout.jade`).
* Updated all sub-generator unit tests to be created within their own `tests` folder.
* Updated all scripts to utilize [Babel](http://babeljs.io), which enables ES6 features out of the box.
* Removed [Injector](https://github.com/klei/grunt-injector) and [Wiredep](https://github.com/stephenplusplus/grunt-wiredep) as debugging them for errors was difficult and confusing.
* Removed React, AngularJS, and Backbone choices and move them to a new generator called [Neopolitan](https://github.com/larsonjj/generator-neopolitan)
* Removed Node + Express choices and move them to a new generator called [Pistacheo](https://github.com/larsonjj/generator-pistacheo)
* Removed RequireJS option. All projects use Browserify.
* Removed Bower in favor of soley using NPM for dependency management.
* Removed SVN as a version control option within prompts. Added [guide](https://github.com/larsonjj/generator-yeogurt#guides) for SVN usage instead.
* Removed authentication boilerplates (Deperecated in last release `0.14.x`).
* Removed old guides as they will not work with this latest version of Yeogurt.
* Removed style and script sub-generators as they were not that useful.
* Removed IE8 Support. IE9 is the default lowest browser supported.
* Removed Vanilla JavaScript and CSS options.
* Removed Dashboard, KSS, and JSDoc automated documentation as each implementation was quite buggy and difficult to manage.
  - NOTE: Dashboard can still be achieved with the new `_data` structure. Check out the [example](https://github.com/larsonjj/yeogurt-dashboard-example) on how to get it working.

### v0.14.6:
#### date: 2015-5-03
##### changes:
* Fixed grunt-jsdoc dependency [#137](https://github.com/larsonjj/generator-yeogurt/pull/137)

### v0.14.5:
#### date: 2015-5-03
##### changes:
* Fixed issue where Backbone view sub-generator was an unneeded `.jade` extension to JST namespace [#127](https://github.com/larsonjj/generator-yeogurt/issues/127)
* Fixed issue where `autoprefixer:server` was running during build when it should have been `autoprefixer:build` [#126](https://github.com/larsonjj/generator-yeogurt/pull/126)

### v0.14.4:
#### date: 2015-4-06
##### changes:
* Fixed issue where RequireJS was throwing module loading errors for static sites [#122](https://github.com/larsonjj/generator-yeogurt/pull/122)
* Added new guide to help simulate a subdirectory for your site [#121](https://github.com/larsonjj/generator-yeogurt/pull/121)
* Added better no-cache option for static assets within node apps [#119](https://github.com/larsonjj/generator-yeogurt/pull/119)
* Added logic to remove `_` from sass imports to allieve sass linting errors/warnings [#101](https://github.com/larsonjj/generator-yeogurt/pull/101)

### v0.14.3:
#### date: 2015-3-04
##### changes:
* Fixed issue where KSS styleguides were not being generated correctly
* Fixed [#112](https://github.com/larsonjj/generator-yeogurt/issues/112) where wiredep was erroring out when using CSS
* Fixed logo within generator prompt
* Updated installation instructions to be more accurate within README.md
* Updated [grunt-sass](https://github.com/sindresorhus/grunt-sass) to v0.18.0 which should allow for error-free installation on Node v.0.12.0

### v0.14.2:
#### date: 2015-1-20
##### changes:
* Fixed issue where mysql database urls were not being populated in server settings.

### v0.14.1:
#### date: 2015-1-19
##### changes:
* Updated documentation

### v0.14.0:
#### date: 2015-1-19
##### changes:
* Added [AngularJS](https://angularjs.org/) option for Single Page Applications
 - Templates auto compiled to single JS payload and added to $templateCache using [`grunt-angular-templates`](https://github.com/ericclemmons/grunt-angular-templates)
 - Angular scripts automatically converted to min-safe using [grunt-ng-annotate](https://github.com/mzgol/grunt-ng-annotate). (Angular shorthand DI can be used)
 - Modular Structure based on [John Papa's Styleguide](https://github.com/johnpapa/angularjs-styleguide)
 - 8 new AngularJS sub-generators
  - [Route](https://github.com/larsonjj/generator-yeogurt#route)
  - [Service](https://github.com/larsonjj/generator-yeogurt#service)
  - [Factory](https://github.com/larsonjj/generator-yeogurt#factory)
  - [Controller](https://github.com/larsonjj/generator-yeogurt#controller)
  - [Template](https://github.com/larsonjj/generator-yeogurt#ng-template)
  - [Directive](https://github.com/larsonjj/generator-yeogurt#directive)
  - [Decorator](https://github.com/larsonjj/generator-yeogurt#decorator)
* Changed coding style to match [Google's](https://github.com/jscs-dev/node-jscs/blob/master/presets/google.json)
  - 4 space indent has been changed to 2
  - [jscs](http://jscs.info/) is now used to enforce new style rules (for yeogurt repo only)
  - Differences: Allow 120 characters instead of the default 80. Also allow `else` on new lines.
* Authentication boilerplates for React, Backbone, Jade, and Swig have been deprecated (will be removed from next release `0.15.0`)
  - Yeogurt already does so much that handling a large boilerplate codebase will make releases take much longer and ultimately slow down development. So these need to be removed.
* Removed FTP deployment prompts. Instead, a [guide](https://github.com/larsonjj/generator-yeogurt/blob/master/docs/guides/ftp.md) has been added on how to implement it.
  - Going forward, guides will be added for more deployment options. (i.e. Heroku, Openshift, etc)
* Removed sourcemaps from usemin tasks (they were very inaccurate)

### v0.13.7:
#### date: 2015-1-15
##### changes:
* Fixed [#98](https://github.com/larsonjj/generator-yeogurt/pull/98)


### v0.13.6:
#### date: 2015-1-13
##### changes:
* Fixed [#96](https://github.com/larsonjj/generator-yeogurt/issues/96)

### v0.13.5:
#### date: 2015-1-12
##### changes:
* Fixed [#93](https://github.com/larsonjj/generator-yeogurt/issues/93)

### v0.13.4:
#### date: 2015-1-12
##### changes:
* General cleanup of unused logic and statments (bitrot)
* Updated backbone layouts to not have messages and navigation if not using authentication

### v0.13.3:
#### date: 2015-1-11
##### changes:
* Updated all files to no longer have useless/superfluous comments
* Updated readme to make the difference between the template sub-generator to static/server sites vs backbone apps more apparant.
* Updated constants for react apps so that each action type has it's own file.
* Fixed hash routing for non-server single page applications
* Fixed issue where watch task was trying to run exorcise when it doesn't exist anymore

### v0.13.2:
#### date: 2015-1-10
##### changes:
* Added `grunt-wiredep` comments to main stylesheet for all types of projects (Stylus, Less, Sass/Scss) which will automatically add bower components/libraries.
* Removed `grunt-exorcise` as it is un-needed for development of projects using browserify. (Sourcemap for browserify bundles will be inline rather than in a seperate file now)
* Updated `grunt-browserify` and `minifify` plugins, so now browserify v6 is available
* Updated Guides to reflect `0.13.0+` changes

### v0.13.1:
#### date: 2015-1-09
##### changes:

***Removals***
* Removed HTML Option for static sites
* Removed Bootstrap and Foundation prompts and added [Guides](https://github.com/larsonjj/generator-yeogurt/tree/master/docs/guides) for them instead
* Removed the ability to use the `--delete` option on sub-generators as it could catastrophic effects if user used `sudo`
* Removed humans.txt as it is superflous for most projects and can be easily added to any project if need be
* Removed server-side rendering for React + Express server apps.
* Removed Google Analytics as it is very simple to add and is not needed on every project
* Removed Bourbon, Lesshat, and nib mixin libraries as they can be easily added using bower

***Additions***
* Added support for PostgreSQL databases when generating an express authentication app.
* Added `npm run clean` command to cleanup all bower and npm dependencies as well as all generated files within `.tmp`, and `dist` folders.
* Added grunt-wiredep to automatically handle injecting bower dependencies into the base template file.
* Express apps now have the option to be generated with authentication using JSON Web Tokens for Backbone and React applications or Cookie Session Storage for Jade and Swig server applications.
* If using authentication, a barebones authentication boilerplate will be included with essential code to get you up and running quickly with authenticating users and resetting passwords when generating an express server. Some features include:
 - Login/Logout
 - Edit Account
 - Reset password (via email)
 - Create Account
 - Global error messages
* Brand new [Guides](https://github.com/larsonjj/generator-yeogurt/tree/master/docs/guides) that give even more information on how to incorporate popular libraries/frameworks
* Added cookie-parser package to help handle parsing cookies for server apps

***Updates***
* Switched to `grunt-styleguide` for generateing kss styleguides as it has much fewer issues than the old `grunt-kss`
* Overhauled sub-generators to have built in prompts to guide the user. Also fixed folder pathing.
* Consolidated all compiled and temporary files ro now live in the `.tmp` folder.
* Changed `one-column` layouts to now be `default` to be a bit more sensible
* Updated 404 and 500 error pages for all server apps.
* IE8 support is now included by default by including modernizr, html5shiv, and consolelog libraries
* Lusca security is included by default on all server apps
* Base template for single page applications using a server is now located in the `client/` folder rather than `server/`
* Updated `grunt-imagemin` to handle all images (jpg, jpeg, svg, and png) rather than using `grunt-svgmin` and `grunt-pngmin`
* Unit test file name endings have been changed from `-spec.js` to `.spec.js`
* Updated unit tests to reach over 90% code coverage
* All React apps will use flux by default (no more flux options)

***Fixes***
* Fixed folder path creation for sub-generators [#90](https://github.com/larsonjj/generator-yeogurt/issues/90) & [#87](https://github.com/larsonjj/generator-yeogurt/issues/87)
* Fixed 'JST undefined' error for backbone apps [#92](https://github.com/larsonjj/generator-yeogurt/issues/92)
* Fixed 'resource interpreted as script but transferred with mime type text/html' error [#91](https://github.com/larsonjj/generator-yeogurt/issues/91)

### v0.13.0:
#### date: 2015-1-09
##### changes:
* Unpublished due to weird documentation issue. Please use v0.13.1

### v0.12.3:
#### date: 2014-11-12
##### changes:
* Fixed [#83](https://github.com/larsonjj/generator-yeogurt/issues/83)

### v0.12.2:
#### date: 2014-11-11
##### changes:
* Solidified grunt-dashboard version to avoid issue with new version.

### v0.12.1:
#### date: 2014-10-01
##### changes:
* Updated istanbul coverage reporter and fixed npm test scripts
* Fixed rimraf issue when running subgenerators ([#78](https://github.com/larsonjj/generator-yeogurt/issues/78))

### v0.12.0:
#### date: 2014-09-22
##### changes:
* Added validation prompts for Database and FTP usernames and password.
* Added logic to delete username and password info from `.yo-rc.json` file as that information should be kept confidential
* Added prompts for FTP host, folder, username, and password
* Added information and [new repository](https://github.com/larsonjj/yeogurt-vagrant) for using Yeogurt with [Vagrant](https://www.vagrantup.com/)

### v0.11.8:
#### date: 2014-09-17
##### changes:
* Reverted modernizr `<!-- build -->` comments
* Reverted css `<!-- build -->` comments for sass, less, and stylus projects
* Fixed typo in `README.md`
* Fixed server template formatting for Jade, Swig, and HTML base templates
* Added `--delete` option to subgenerators to allow for file deletion. ([#34](https://github.com/larsonjj/generator-yeogurt/issues/34))

### v0.11.7:
#### date: 2014-09-15
##### changes:
* Added guide for installing [Animate.css](http://daneden.github.io/animate.css/)
* Added guide for installing [pure.css](http://purecss.io/)
* Added guide for installing [Underscore](http://underscorejs.org/)
* Added guide for installing [Underscore.string](http://epeli.github.io/underscore.string/)

### v0.11.6:
#### date: 2014-09-15
##### changes:
* Fixed formatting of `bower.json` file
* Formatted spacing for all base templates (jade, swig, html)
* Enabled css build comments in all base templates
* Fixed issue where css build comments were incorrectly included with Sass, Less, and Sylus projects
* Removed extra call for es5-shims files when using react
* Added sourcemaps for css build comment files
* Added `.DS_Store` to ignored files
* Added autoprefixer task to run on all css to ensure browser compatibility.
* Fixed issue where css frameworks could not be selected when using CSS

### v0.11.5:
#### date: 2014-09-10
##### changes:
* Added information within the `README.md` on how to run unit tests on this generator.
* Removed all Dispatcher files from flux generation option in favor of using flux npm module instead.
* Updated styles for 'browse happy' markup when using IE7 or below.
* Removed extraneous `browserify:server` tasks from `watch.js` grunt config file.

### v0.11.4:
#### date: 2014-09-09
##### changes:
* Removed unneeded template-spec file for template sub-generator
* Removed layout block for swig and jade templates with type=layout in the subgenerator

### v0.11.3:
#### date: 2014-09-09
##### changes:
* Scripts sub-generator now uses revealing module pattern

### v0.11.2:
#### date: 2014-09-09
##### changes:
* Fixed issue where --template option should have been --layout within template sub-generator
* Fixed link issue for dashboard when creating jade files with template sub-generator

### v0.11.1:
#### date: 2014-09-08
##### changes:
* Fixed import issue where `reactRender` should be `react-render`
* Fixed issue where test task was loaded for browserify, when it doesnt need to be there
* Fixed `grunt/config/compile/sass.js` compile error where property `dists` should be `dist`

### v0.11.0:
#### date: 2014-09-06
##### changes:
* Added [Stylus](http://learnboost.github.io/stylus/) support
* Added Sass syntax support (in addition to Scss default)
* Updated prompts, tests, and generators to enable Flux architecure for React projects

### v0.10.2:
#### date: 2014-09-05
##### changes:
* Fixed [#60](https://github.com/larsonjj/generator-yeogurt/issues/60) and [#61](https://github.com/larsonjj/generator-yeogurt/issues/61)
* Updated grunt-browserify and connect-livereload to latest packages

### v0.10.1:
#### date: 2014-09-04
##### changes:
* Updated prompts, tests, and generator to make React JSX syntax optional
* Remove generator Gruntfile.js and grunt-nsp plugin as it just seems to crash all the time
* Fixed Backbone routes so they don't use the `default:` property. It breaks IE8 compatibility.
* Fixed issue where `test` folder is created for React projects when unit testing is disabled
* DEV: Started using git-flow for development to make branching structure more predictable for maintainers and contributors
* Implemented a roadmap file to give better context to current and future development efforts

### v0.10.0:
#### date: 2014-09-03
##### changes:

***Removals***
* Removed example modules folder and module.js as it can easily be created with the script subgenerator
* Removed grunt-uncss as it wasn't consistantly keeping the correct styles
* Removed ability to use React with RequireJS (too many custom configurations to get react to work with r.js optimizer)
* Removed all H5BP extras (adobe xdomain, IE11 icons, apple touch icon, and htaccess) as they were a bit superfluous for most projects and are easily added after project generation.
* Removed logic to create extra print.css stylesheet for IE8 as the respond.js shim correctly translates @media print styles.
* Removed `this.toTitleCase()` function from sub-generators as it is no longer used
* Removed body tag classes from Jade and Swig templates
* Removed example Jade and Swig files to reduce extra cruft.

***Additions***
* Added ability to read existing `.yo-rc.json` files to load existing configuration
* Added `--allow-remote` option for `grunt serve`, `grunt serve:dist`, and `grunt serve:watch` tasks, so you can access your app/site from remote devices on the same network
* Added new option to generate a Node + express server
* Added new option to work with either MySQL (via [Sequelize](https://github.com/sequelize/sequelize)) or MongoDB (via [Mongoose](https://github.com/LearnBoost/mongoose)) with an express server
* Added new option to enable express security with Paypal's [Lusca](https://github.com/krakenjs/lusca) module
* Added Database information prompts: host, port, username, password, etc if you choose to use a database
* Added shim to get react working with phantomJS when running unit tests
* Added new option to render React components on the server.
* Added seperate `grunt serve:docs` task to update documentation when files are changed. This means that by default `grunt serve` will not recompile KSS, JSDoc, or the dashbaord. This allows for much faster rebuilds by default.
* Added ES5 shims to properly support IE8 when using React
* Added `*.ico` files to `grunt-copy` task to make sure `favicon.ico` is loaded up correctly
* Added `process.env.NODE_ENV = 'production'` to `grunt build` task to help remove dev comments from react npm module
* Added 150+ tests for generator and sub-generators to ensure code stability and reduce bugs. Should also allow for faster releases.
* Added `grunt test:watch` task to allow for test file watching and auto re-run of those tests when changes are detected.
* Added new prompt to choose whether or not unit testing JavaScript is desired. (No longer required to generate unit tests)
* Added filter maps for prompt values to make prompt messages easier to change

***Updates***
* Updated generator prompts to be categorized so they are easier to follow
* Updated and revamped `README.md` documentation.
* Updated all automated forms of documentation to use jQuery and Less for much easier custom theming
* Updated 'dev/' folder to now be 'client/'.
* Updated React to v0.11.x
* Updated sub-generators to have the `--folder` option. Meaning placement of generated files can be customized.
* Updated bootstrap to 4.3.x and updated all corresponding links to adhere to new bower_components structure
* Updated style and view subgenerators to no longer require the `--import` flag as [`grunt-injector`](https://www.npmjs.org/package/grunt-injector) has been implemented to handle all file include/import injections now.
* Updated grunt-sass to 0.14.x and added a 10 decimal precision option, so as to correctly compile large decimal numbers. (fixes many css issues with bootstrap and foundation)
* Updated `connect:server` to serve up the `dev/.serve` folder as root so Backbone router pushState will work
* Update: For single page applications and static sites using only HTML, `index.html` moved from `dev/` to `lib/templates` when using express server.
* Update: For Static Sites using preprocessors (Jade, Swig, etc), `base` template file has moved from `dev/` to `client/templates/layouts` or `server/templates/layouts` if using express server

***Fixes***
* Fixed reloading of Lo-dash, handlebars, and jade client-side templates when running `grunt serve`



### v0.9.11:
#### date: 2014-08-28
##### changes:
* Merged Fix for including sample jade h1 mixin ([#47](https://github.com/larsonjj/generator-yeogurt/pull/47))

### v0.9.10:
#### date: 2014-08-22
##### changes:
* Added *.json files to be watched by watch:configFiles task. Also created logic that allows `grunt serve` to be rerun when changes are detected with Grunt onfig files or *.json files are updated. As per [#39](https://github.com/larsonjj/generator-yeogurt/issues/39) discussion

### v0.9.9:
#### date: 2014-08-22
##### changes:
* Added Gruntfile.js and grunt config file watch task that auto-reloads the watch task when changes are detected. As per [#39](https://github.com/larsonjj/generator-yeogurt/issues/39) discussion

### v0.9.8:
#### date: 2014-08-22
##### changes:
* Fixed issue with grunt-sass task and now watch `.sass` files [#38](https://github.com/larsonjj/generator-yeogurt/pull/38)

### v0.9.7:
#### date: 2014-08-21
##### changes:
* Updated grunt-sass package to v0.14.0
* Added more info to README.md (PR: #10eea6b)[https://github.com/larsonjj/generator-yeogurt/commit/10eea6b2cb1721710f3b73f540346b11311e4bf3]


### v0.9.6:
#### date: 2014-07-31
##### changes:
* Fixed issue where react components were using `mixin` as a property when it should be `mixins`

### v0.9.5:
#### date: 2014-07-31
##### changes:
* Fixed issue where jade partials/modules were not updating pages due to the `newer:` in the watch task
* Removed bower_components from JS watch task as it could cause EMFILE issues
* Updated usemin task to update all html files instead of just index.html

### v0.9.4:
#### date: 2014-06-22
##### changes:
* Fixed failing test

### v0.9.3:
#### date: 2014-06-22
##### changes:
* Fixed/added watch tasks to correctly recompile KSS and JSDoc documentation
* Removed the `styles/fonts` folder as it is always empty and is potentially un-needed for some projects
*Removed spinning animation from splash screen to avoid looking like something is 'loading'
* Updated styles and JS logic for dynamic dashboard so it works with IE8.

### v0.9.2:
#### date: 2014-06-21
##### changes:
* Added extra margin for mobile breakpoint on styleguide to make sure content is under the navigation bar.
* Removed `<br>` from styleguide.md as it is unecessary

### v0.9.1:
#### date: 2014-06-21
##### changes:
* Fixed issue where HTML tag would not be loaded in Internet Explorer when IE8+ support was not selected as an option.
* Fixed [#32](https://github.com/larsonjj/generator-yeogurt/issues/32)
* Fixed styling issues for default fonts within the Styleguide.
* Updated markup for styleguide so modifiers look better.

### v0.9.0:
#### date: 2014-06-20
##### changes:
* Added global style file and removed box-sizing style file
* Replaced Docker with JSDoc
* Updated templates for API, Styleguide, and Dashboard to be consistant and responsive.
* Added classlist shim to be able to use the classList property with IE9
* Updated tests to correctly pass with JSDoc
* Replaced heading component with h1 component to provide a simpler example
* Updated all this._.camelize to be this._.slugify to keep all sub generators consistant.
* Added logic to make sure all names passed into subgenerators are converted to lower case to make sure spec files are run correctly.
* Added a check and abort statement for 'view' subgenerator when using React
* Added model and model spec file generation to 'collection' subgenerator
* Added max-width to content list items for dashboard, so they don't get strectched too much.
* Added a full 'margin: 0' to sidebar menu on styleguide to remove Foundation UL tag margins
* Fixed issue where multiple yeogurt logos were being copied to dev/images and not needed

### v0.8.3:
#### date: 2014-06-16
##### changes:
* Fixed [#31](https://github.com/larsonjj/generator-yeogurt/issues/28): Jade plugin was not being downloaded

### v0.8.2:
#### date: 2014-06-13
##### changes:
* Updated README to better reflect new features in `v0.8.*`

### v0.8.1:
#### date: 2014-06-13
##### changes:
* Fixed [#28](https://github.com/larsonjj/generator-yeogurt/issues/28): Fonts were not being copied to `.serve` folder when running 'grunt serve'

### v0.8.0:
#### date: 2014-06-13
##### changes:
* Added Single Page Application option in generator that allows user to scaffold out a project using Backbone in combination with: Facebook's React, Handlebars, Lo-dash, or Jade views/templating.
* Updated imagemin plugin to only handle `.jpg` and `.gif` files and added pngmin plugin to handle `.png` files. (This fixes iamgemin freezing on PNG files)
* Added new router, model, collection, and view subgenerators that mimic those of the official [generator-backbone](https://github.com/yeoman/generator-backbone)
* Added another subgenerator specifically for React components
* Updated jshintrc to reduce unwanted errors in testing and for specific libraries like React
* Updated Karma configuration to handle new testing framework options as well as new SPA options
* Made Requirejs module return statments more like Browserify for consistency as well as using [sugar syntax](http://www.ericfeminella.com/blog/2012/05/17/organizing-require-js-dependencies/) to mimic CommonJS a bit more
* Added README.md file that is generated by default. This can be used to define your project/site
* Added `.tmp` folder to gitignore and svnignore lists
* Added [backbone react mixin plugin](https://www.npmjs.org/package/backbone-react-component) for better reactjs integration with backbone
* Implemented [jsx-require-plugin](https://github.com/philix/jsx-requirejs-plugin) to handle JSX templates for react
* Added [Knyle Style Sheet](http://warpspire.com/posts/kss/) generation option to generator with grunt-kss
* Changed `SCSS` to `Sass` to avoid confusion in the generator
* Added dns prefetch for google analytics
* Added [Docker](https://github.com/jbt/docker) generator option to generate JavaScript API documentation
* Removed unneeded grunt distJS task for uglify
* Added bootstrap ignore classes to uncss task so javascript plugins still work
* Added svn-ignore.bat file to setup svn ignores in Windows
* Added option to use [Zurb foundation](http://foundation.zurb.com/) css framework
* Updated styles for KSS to mimic [github's styleguide](https://github.com/styleguide) styles
* Added new welcoming message for static sites. Added links for all necessary templates to navigate to extra docs: Dashboard, API, and Styleguide
* Added bootstrap and foundation JS files to karma configuration file to properly handle testing with those frameworks
* Added font-awesome loading when using Vanilla CSS (Previously not possible)
* Updated tests to improve code coverage
* Removed header and footer components for Jade and Swig as they are not really used and might cause confusion.

### v0.7.2:
#### date: 2014-06-11
##### changes:
* Fixed issue where HTML file dashboard comments were being removed when running 'grunt build'
* Added 'localtest' script that will run mocha unit tests for the project (can be run with 'npm run localtest' command)
* Added 'localtest-report' script that will run mocha unit tests with a istanbul coverage report. It will also open your default browser to the coverage report (can be run with 'npm run localtest-report' command)

### v0.7.1:
#### date: 2014-06-04
##### changes:
* Fixed [#21](https://github.com/larsonjj/generator-yeogurt/issues/21)
* Fixed [#24](https://github.com/larsonjj/generator-yeogurt/issues/24)

### v0.7.0:
#### date: 2014-06-04
##### changes:
* Removed header and footer components as they were not used and could cause confusion
* Added `[include]` comment tags for styles and Jade/Swig components within main.scss/less and base.jade/swig files respectively. This will enable the ability to automatically include all (sub)-generated style and markup files with the subgenerator `--import` flag
* Added `svn-init.bat` script to setup svn ignores on Windows

### v0.6.0:
#### date: 2014-05-14
##### changes:
* Added Ability to use Swig templates as well as Vanilla HTML rather than just Jade
* Modularized all grunt configuration and tasks in a new `grunt/` folder
* Updated view subgenerator to create Swig and HTML files in addition to Jade
* Updated NPM dependencies
* Added new unit tests to cover latest changes

### v0.5.0:
#### date: 2014-05-07
##### changes:
* Major Change: Removed original dynamic dashboard and replaced with `grunt-dashboard` plugin
* Added option to use Modernizr
* Updated base template to load vendor scripts seperately from author scripts
* Removed browserify-shim
* Added option for box-sizing:border-box in the generator
* Usemin plugin is used now by default for vendor scripts
* Updated bower dependencies
* Added logo to repository

### v0.4.4:
#### date: 2014-04-30
##### changes:
* Fixed localhost issue for Windows
* Fixed issue where font awesome was not being correctly loaded when font awesome is deselected and dashboard is selected in the generator

### v0.4.3:
#### date: 2014-04-28
##### changes:
* Removed normalize.less dependency and replaced it with normalize.css (fixes SSH issues when installing via bower)
* Made Bourbon and Lesshat mixin libraries conditional
* Fixed pathing issue when running `grunt serve` with a dashboard
* Added/Updated unit tests

### v0.4.2:
#### date: 2014-04-23
##### changes:
* Fixed issue [#20](https://github.com/larsonjj/generator-yeogurt/issues/20)
* Fixed issue where dynamic dashboard would not compile if tabs were used for formatting

### v0.4.1:
#### date: 2014-04-02
##### changes:
* Fixed issue [#19](https://github.com/larsonjj/generator-yeogurt/issues/19)
* Updated file structure so that all dashboard files stay within the `dashboard/` folder (was confusing before when dashboard files would be at the root level)
* Added [grunt-uncss](https://github.com/addyosmani/grunt-uncss) task when using Vanilla CSS, so unused CSS will be removed during builds (big boost in performance)
* Cleaned up prompts a bit. Removed miniscule options (ex. adding IE11 icons or adding apple homescreen options: these are now included in the HTML5 Boilerplate extras option)
* Added a `grunt serve:dist` task, so now it will be easier to see your builds running on a local server.

### v0.4.0:
#### date: 2014-04-01
##### changes:
* Updated Bower and NPM dependencies
* Added new option to use Vanilla CSS
* Added new option to use Vanilla JavaScript
* Moved Author and Vendor JavaScript right before `</body>` ([Reasoning](http://developer.yahoo.com/performance/rules.html))
* Updated Script subgenerator to no longer create inline scripts
* Switched to use official Bootstrap Sass Library
* Fixed Browserify Livereload issue (browserify script changes didn't trigger a rebuild)
* Removed karma and jshint tests from 'build task' and added to the 'default' task
* Defined the console object within the dynamic dashboard for IE
* Added Jade file check for dynamic dashboard (fixes problem with file types other than .jade causing status classes to fail)
* Externalized sourcemaps for browserify builds (sourcesContent property is null for grunt build tasks, should be fixed after this PR is merged: https://github.com/gruntjs/grunt-contrib-uglify/pull/196)

### v0.3.5:
#### date: 2014-03-18
##### changes:
* Updated istanbul, mocha, karma, grunt-karma, and bower dependencies
* Changed serve and test ports to 9010 and 9011 repectively to avoid conflicts
* Fixed some typos within JS module comments
* Added bootstrap stylesheet that include each of it's modules for either Less or Sass

### v0.3.4:
#### date: 2014-03-10
##### changes:
* Simple maintenence release (small comment/code changes)
* Added better readability to yeoman index.js file

### v0.3.3:
#### date: 2014-03-06
##### changes:
* Moved root files (.htaccess, tile.png, crossdomain.xml, etc) and moved them to the dev/ folder where they should be
* Removed unneeded tests (redundant)
* Updated README to reflect the dashboard as optional rather than default
* Other small bug fixes/cleanup

### v0.3.2:
#### date: 2014-03-05
##### changes:
* Fixed issues where choosind IE8+ support caused the Less dist task to break
* Wrote new tests to cover many more generator possiblilities
* Added coveralls.io integration for code coverage tracking
* Fixed target filename in svn-init.sh to correctly setup SVN ignores
* Removed the docs/ folder as it really isn't needed
* Fixed issue where the dashboard base.jade template's compiled HTML was not valid when IE8+ support was not selected

### v0.3.1:
#### date: 2014-03-04
##### changes:
* Fixed location of Contribute.md (moved to root)
* Updated Readme.md to correct some errors and typos
* Added back svn-init.sh in order to help setup ignores for SVN repositories
* Fixed font awesome pathing for Less and Sass
* Fixed print styles (IE8 Support)
* Removed unneeded less copy task for sourcemaps
* Solidified dependency versions

### v0.3.0:
#### date: 2014-03-04
##### changes:
* Add Google Analytics option to generator
* Added the --skip-install option to generator to avoid running bower install && npm install
* Created new subgenerators: markup, scripts, and styles
* Implemented karma test runner (used mocha + phantomjs before) for both RequireJS and Browserify
* Updated existing module script example and added a new inline script example
* Updated generator to use .yo-rc-json for saving user choices
* Changed 'grunt server' task to 'grunt serve' based on this discussion: https://github.com/yeoman/yeoman/issues/1183
* Revamped folder structure to be less opinionated and simpler (less folders)
* Added Contributing.md for instructions on how to contribute to this project
* Added humans.txt and robots.txt files by default when running generator
* Added IE11 browserconfig.xml and IE11 icons as a new option for generator
* Added apple touch icon option for generator (What you see when adding a webapp to homescreen on an IOS device)
* Removed shell script that helps setup SVN ignores for SVN 1.6. SVN 1.7+ support going forward
* Added print styles to generator by default
* Added IE8 console definition if IE8+ support is selected
* Updated IE8 htmlshiv to html5shiv-print.js to give better print support

### v0.2.9:
#### date: 2014-02-18
##### changes:
* Updated sub generators to have a script generating option
* .yeogurtrc file is now generated to store user choices from generator

### v0.2.8:
#### date: 2014-02-17
##### changes:
* Created subgenerators for jade modules, components, pages, and templates

### v0.2.7:
#### date: 2014-02-16
##### changes:
* Setup dashboard data to not be generated when dynamic dashboard option is not enabled
* Fixed issue where HTML files were not being reloaded with watch task

### v0.2.6:
#### date: 2014-02-16
##### changes:
* Changed server and build tasks to put HTML files in root folders
* Removed tasks/logic that creates .min.js files for build tasks

### v0.2.5:
#### date: 2014-02-16
##### changes:
* Added dynamic dashboard option to generator choices (No longer added by default)
* Updated sourcemap logic for uglify task based on latest plugin release

### v0.2.4:
#### date: 2014-02-06
##### changes:
* Official Release
* Code cleaned up
