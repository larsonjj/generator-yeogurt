# Yeogurt Roadmap

## v1.0.0
* Add [envify](https://github.com/hughsk/envify) to ensure production code is used in browserify builds
* Add configuration file to control server settings and task folders (yeogurt.conf.js)
* Update to using [ESLint](http://eslint.org/) instead of [JSHint](http://jshint.com/)
* Update all *.spec test files to go into their own `tests` folder
* Update automated tasks to use [Gulp](http://gulpjs.com/) instead of [Grunt](http://gruntjs.com/) (Major speed boost)
* Removed Dashboard choice in favor of showing an [example of how to add it in](https://github.com/larsonjj/yeogurt-dashboard-example) easily without plugins.
* Remove React, AngularJS, and Backbone choices and move them to a new generator called [Neopolitan](https://github.com/larsonjj/generator-neopolitan)
* Remove Node + Express choices and move them to a new generator called [Pistacheo](https://github.com/larsonjj/generator-pistacheo)
* Remove authentication boilerplates for applications.
* Remove the use of [Bower](http://bower.io) in favor of [NPM](https://www.npmjs.com/)
* Remove [grunt-usemin](https://github.com/yeoman/grunt-usemin) and [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep) as they provide too much "magic" and are hard to debug.
* Remove [RequireJS](http://requirejs.org/) and Vanilla JS support in favor of CommonJS with [Browserify](http://browserify.org/) for all apps
* Remove [KSS](https://github.com/t32k/grunt-kss) and [JSDoc](https://github.com/krampstudio/grunt-jsdoc) options from the generator. Way too many bugs involved with generating documentation with these libs.
* Remove [jade](http://jade-lang.com/) and [handlebars](http://handlebarsjs.com/) templating for backbone applications

## v1.1.0
* Add ES6/ES2015 support using [Babel](http://babeljs.io/)
