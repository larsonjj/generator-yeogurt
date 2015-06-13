# Yeogurt Roadmap

## v1.0.0
* Add End-to-end testing with [Protractor](http://angular.github.io/protractor/#/)
* Add [envify](https://github.com/hughsk/envify) to ensure production code is used in browserify builds
* Add more configuration options for grunt folders (yeogurt.conf.js)
* Add [Protractor](https://github.com/angular/protractor) for running end-to-end tests with [Selenium](http://www.seleniumhq.org/)
* Add in [MarionetteJS](http://marionettejs.com/) for Backbone apps and default to using Underscore templates
* Add folder naming convention that copies over all non-prefixed folders (i.e. `fonts/`) and ignores all `_` prefixed folders (i.e. `_styles/`)
* Update folder structure for all application types so that everything is consistant
* Update to using [ESLint](http://eslint.org/) instead of [JSHint](http://jshint.com/)
* Update all *.spec test files to go into their own `__tests__` folder
* Update all dashboard files (i.e. *.dash) to go into their own `__dash__` folder
* Update Angular apps to use 
* Remove Node + Express choices and move them to a new generator called [Pistacheo](https://github.com/larsonjj/generator-pistacheo)
* Remove authentication boilerplates for applications.
* Remove the use of [Bower](http://bower.io) in favor of [NPM](https://www.npmjs.com/)
* Remove [grunt-usemin](https://github.com/yeoman/grunt-usemin) and [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep) as they provide too much "magic" and are hard to debug.
* Remove [RequireJS](http://requirejs.org/) and Vanilla JS support in favor of CommonJS with [Browserify](http://browserify.org/) for all apps
* Remove [KSS](https://github.com/t32k/grunt-kss) and [JSDoc](https://github.com/krampstudio/grunt-jsdoc) options from the generator. Way too many bugs involved with generating documentation with these libs.
* Remove support for vanilla JS in React Apps. Only JSX is now supported
* Remove [jade](http://jade-lang.com/) and [handlebars](http://handlebarsjs.com/) templating for backbone applications

## v1.1.0
* Add ES6/ES2015 support using [Babel](http://babeljs.io/)
