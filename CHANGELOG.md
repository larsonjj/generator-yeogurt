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
