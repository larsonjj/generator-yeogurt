### v0.3.1:
#### date: 2014-03-04
##### changes:
* Fixed location of Contribute.md (moved to root)
* Updated Readme.md to correct some errors and typos
* Added back svn-init.sh in order to help setup ignores for SVN repositories
* Fixed font awesome pathing for LESS and SCSS
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