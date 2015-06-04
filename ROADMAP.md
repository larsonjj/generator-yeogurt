# Yeogurt Roadmap

## v0.14.0+
* Add AngularJS Support
* Update coding style to match [Google's](https://github.com/jscs-dev/node-jscs/blob/master/presets/google.json)

## v1.0.0+
* Add guide for deploying to Heroku
* Add configuration file that allows author to edit folder names/paths along with other site information
* Add End-to-end testing with [Protractor](http://angular.github.io/protractor/#/)
* Restructure folder structure for all application types
* Convert to using [ESLint](http://eslint.org/) instead of [JSHint](http://jshint.com/)
* Add more configuration options for grunt folders (allow user to change folder names)
* Add [Protractor](https://github.com/angular/protractor) for running end-to-end tests with [Selenium](http://www.seleniumhq.org/)
* Add [Supertest](https://github.com/visionmedia/supertest) for testing api endpoints on server applications
* Remove Bower and use NPM for all dependencies
* Remove [RequireJS](http://requirejs.org/) and add [Webpack](http://webpack.github.io/) as an alternative
* Add envify to ensure production code is used in browserify/webpack builds
* Remove all AMD modules in favor of CommonJS
* Add ES6 support
