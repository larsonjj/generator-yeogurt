<img src="https://raw.githubusercontent.com/larsonjj/generator-yeogurt/master/docs/images/logo.png" />

# Yeogurt Generator [![Build Status](https://secure.travis-ci.org/larsonjj/generator-yeogurt.png?branch=master)](https://travis-ci.org/larsonjj/generator-yeogurt) [![NPM version](https://badge.fury.io/js/generator-yeogurt.png)](http://badge.fury.io/js/generator-yeogurt) [![Coverage Status](https://coveralls.io/repos/larsonjj/generator-yeogurt/badge.png)](https://coveralls.io/r/larsonjj/generator-yeogurt)

A [Yeoman](http://yeoman.io) generator for creating a sensible structure to front-end work using your favorite tools.


## Getting Started

- First off, You will need to have [Node.js](http://nodejs.org/) `>= 0.10` installed. <br>
- You will need to install Grunt CLI globally: `npm install -g grunt`
- You will also need [Git](http://git-scm.com/) `>= 1.8.2` installed if you don't already. <br>
- Be sure to install yeoman of course! `npm install -g yo` <br>
- Install the generator: `npm install -g generator-yeogurt` <br>
- Run the generator: `yo yeogurt`

Note: If you haven't already, you will need to install and accept the licensing agreement for XCode: `sudo xcodebuild -license`

## Features

**Available Scaffolding Options:**

- Project/Site naming
- HTML Templating with [Jade](http://jade-lang.com/) or [Swig](http://paularmstrong.github.io/swig/)
- CSS Preprocessing with [LESS](http://lesscss.org/) or [SCSS](http://sass-lang.com/) via [node-sass](https://github.com/andrew/node-sass)
- Modular JavaScript with [RequireJS](http://requirejs.org/) or [Browserify](http://browserify.org/)
- IE8+ Support via [HTML5shiv](https://github.com/aFarkas/html5shiv) and [RespondJS](https://github.com/scottjehl/Respond)
- JavaScript Linting with [JSHint](http://www.jshint.com/)
- Feature detection with [Modernizr](http://modernizr.com/)
- Default ignores for [Git](http://git-scm.com/) or [SVN](http://subversion.apache.org/)
- Build deployment to FTP server
- Dynamic Dashboard - auto-generated dashboard for your site with [grunt-dashboard](https://github.com/larsonjj/grunt-dashboard)

**Included by default:**

- Template inspiration from [HTML5 Boilerplate](http://html5boilerplate.com/)
- Built in preview server with LiveReload
- [.editorconfig](http://editorconfig.org/) for consistent coding styles within text editors
- JavaScript unit testing with [Jasmine](http://jasmine.github.io/) and [Karma](http://karma-runner.github.io/0.10/index.html)
- Automatic build process that includes concatenation, image optimization, CSS/HTML minification, and JS uglification.
- [Sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) for JavaScript and either SCSS or LESS
- If using regular CSS, [grunt-uncss](https://github.com/addyosmani/grunt-uncss) is used to cleanup unused styles and boost performance.

## Grunt Tasks

- `grunt serve`<br>
Starts up a development server that watches for local file changes and automatically reloads them to the browser.

- `grunt test`<br>
Runs JSHint and Karma to lint and unit test JavaScript, respectively.

- `grunt build`<br>
Builds out an optimised site through minification of CSS and HTML, as well as  uglification and optimisation of Javascript.

- `grunt zip`<br>
Runs `grunt build` and compresses the entire site to a ZIP file

- `grunt deploy`<br>
Runs `grunt zip` and pushes both production-ready files and zip file to a specified FTP server


## Sub-Generators

Available sub-generators:

* [yeogurt:view](#views)
* [yeogurt:script](#script)
* [yeogurt:style](#style)

**Note: Generators are to be run from the root directory of your app.**

### View
Creates jade file within the `dev/views` folder by default or within another folder using the `--type` option.

Example:
```bash
## Page
yo yeogurt:view mypage

## Page using specific Template
yo yeogurt:view mypage --template=one-column

## Template
yo yeogurt:view mytemplate --type=template

## Component
yo yeogurt:view mycomponent --type=component
```

### Script
If using Browserify or RequireJS, this creates module script within the `dev/scripts/modules` folder by default. Otherwise, the script will be created within `dev/scripts`.
This sub-generator will also create a unit test *Spec file within the `test/spec` folder (enter `grunt test` command to run your tests)

Example:
```bash
## Module
yo yeogurt:script myscript
```

### Style
If using SASS or LESS, this creates a stylesheet file within the `dev/styles/partials` folder by default. Otherwise, the stylesheet will be created within `dev/styles` folder. You can also specify a folder using the `--folder` option which is relative to the `dev/styles` folder.

Example:
```bash
## Create mystyle file within dev/styles/partials folder (SASS or LESS) or dev/styles folder (CSS)
yo yeogurt:style mystyle

## Create mystyle file within dev/styles/base folder
yo yeogurt:style mystyle --folder=base
```

## SVN usage
If using SVN for version control, you will want to runt the generated shell script with the following command: `sh svn-init.sh`
This Shell script will take all files/folders outlined within the `.svnignore` file and add them to the svn:ignore property of your repository.
This will make sure that the files in the `.svnignore` file will not be added to your SVN repository.

## FTP Deployment
If you answer `Yes` to the `Will you be deploying code to an FTP server?` question in the generator, you will need to make sure that you fill out the generated .ftppass file.
This file looks like this:
```bash
{
    "host": "",
    "serverPath": "/html",
    "key1": {
        "username": "jdoe",
        "password": "jdoe1"
      }
}
```

Be sure to fill out the pertinent FTP information and test to see if it is working by running `grunt deploy`.
For more info on setting up the .ftppass file, refer to the [grunt-ftpush](https://github.com/inossidabile/grunt-ftpush) documentation

## Dynamic Dashboard
The dashboard has been completely overhauled from v0.4.x and moved into it's own plugin: `grunt-dashboard`.
Please refer to the plugin [documentation](https://github.com/larsonjj/grunt-dashboard) for example usage.

For documentation on the old v0.4.x dashboard, please refer to [here](https://github.com/larsonjj/generator-yeogurt/tree/master/docs/old-dashboard.md)

## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

## Release History

See [Changelog](https://github.com/larsonjj/generator-yeogurt/blob/master/CHANGELOG.md)

## License

[MIT License](LICENSE.md)
