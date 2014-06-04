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
* Switched to use official Bootstrap SASS Library
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
* Added bootstrap stylesheet that include each of it's modules for either LESS or SASS

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
* Fixed font awesome pathing for LESS and SASS
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
