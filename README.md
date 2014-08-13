<img src="https://raw.githubusercontent.com/larsonjj/generator-yeogurt/master/docs/images/logo.png" />

# Yeogurt Generator [![Build Status](https://secure.travis-ci.org/larsonjj/generator-yeogurt.png?branch=master)](https://travis-ci.org/larsonjj/generator-yeogurt) [![NPM version](https://badge.fury.io/js/generator-yeogurt.png)](http://badge.fury.io/js/generator-yeogurt) [![Coverage Status](https://coveralls.io/repos/larsonjj/generator-yeogurt/badge.png)](https://coveralls.io/r/larsonjj/generator-yeogurt)

A [Yeoman](http://yeoman.io) generator that creates a sensible structure for static sites and single page applications by using your favorite tools.

## Getting Started

- First off, You will need to have [Node.js](http://nodejs.org/) `>= 0.10` installed. <br>
- Then will need to install Grunt CLI globally: `npm install -g grunt-cli`
- You will also need [Git](http://git-scm.com/) installed if you don't already. <br>
- Be sure to install yeoman and bower as well `npm install -g yo bower` <br>
- Install the generator: `npm install -g generator-yeogurt` <br>
- If you are using JSDoc for documentation, you will also need the [Java Runtime](https://www.java.com/en/download/)
- Run the generator: `yo yeogurt`

Note For Mac Users: You will need to install XCode, install command-line tools, and accept the licensing agreement.

## What's New with v0.10+?

***Single Page Applications***

- You now have the ability to create single page applications (SPA) with Backbone!
- Pick from Handlebars, Jade, or Lo-dash template libraries or even start using Facebook's React.
- New subgenerators are also included to accelerate your SPA development.
- No matter what you choose, you will still be able to use Browserify or RequireJS with sourcemaps. (CommonJS and AMD fan's rejoice!)

***Automated Documentation***

- You now have the option to auto-generate a styleguide via [Knyle Style Sheets](http://warpspire.com/posts/kss/) with Sass, Less, or CSS
- Another new option has been added to allow a JavaScript API to be generated from your scripts via [JSDoc](http://usejsdoc.org/).

There are a ton of updates in this release, so be sure to check out the [Changelog](https://github.com/larsonjj/generator-yeogurt/blob/master/CHANGELOG.md) to view them all.

## Features

**Available Scaffolding Options:**

### Static Site Specific
- HTML Templating with [Jade](http://jade-lang.com/) or [Swig](http://paularmstrong.github.io/swig/)

### Single Page Application Specific
- Backbone + Facebook's [React](http://facebook.github.io/react/) view framework
- Vanilla Backbone with [Jade](http://jade-lang.com/), [Handlebars](http://handlebarsjs.com/), or [Lo-dash](http://lodash.com/) Templating

### Available for both Static Sites and Single Page Applications

- Project/Site naming
- CSS Preprocessing with [Less](http://lesscss.org/) or [Sass](http://sass-lang.com/) via [node-sass](https://github.com/andrew/node-sass)
- Modular JavaScript with [RequireJS](http://requirejs.org/) or [Browserify](http://browserify.org/)
- IE8+ Support via [HTML5shiv](https://github.com/aFarkas/html5shiv) and [RespondJS](https://github.com/scottjehl/Respond)
- JavaScript Linting with [JSHint](http://www.jshint.com/)
- Feature detection with [Modernizr](http://modernizr.com/)
- Default ignores for [Git](http://git-scm.com/) or [SVN](http://subversion.apache.org/)
- Build deployment to FTP server
- Dynamic Dashboard - auto-generated dashboard for your site with [grunt-dashboard](https://github.com/larsonjj/grunt-dashboard)
- Dynamic Styleguide - auto-generated styleguide for your stylesheets (Sass, Less, or CSS) with [Knyle Style Sheets](http://warpspire.com/posts/kss/)
- Dynamic JavaScript Documentation - auto-generated API for your scripts with [JSDoc](http://usejsdoc.org/)
- [HTML5 Boilerplate](http://html5boilerplate.com/) extras: .htaccess, apple touch icon, ie11 app icons, and flash content permissions.

**Included by default:**

- Built in preview server with LiveReload
- [.editorconfig](http://editorconfig.org/) for consistent coding styles within text editors
- JavaScript unit testing with [Jasmine](http://jasmine.github.io/) or [Mocha](http://visionmedia.github.io/mocha/) + [Chai](http://chaijs.com/)
- Test running with [Karma](http://karma-runner.github.io/0.12/index.html)
- Automatic build process that includes concatenation, image optimization, CSS/HTML minification, and JS uglification.
- [Sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) for JavaScript and either Sass or Less
- If using regular CSS, [grunt-uncss](https://github.com/addyosmani/grunt-uncss) is used to cleanup unused styles and boost performance.


## Options

- `--skip-install`<br>
Skips the automatic execution of bower and npm after scaffolding has finished.

## Grunt Tasks

- `grunt serve`<br>
Starts up a development server that watches for local file changes and automatically reloads them to the browser.

- `grunt serve:dist`<br>
Runs `grunt build` and starts up a server that loads up the generated production-ready files.

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

* [yeogurt:template](#template)
* [yeogurt:script](#script)
* [yeogurt:style](#style)
* [yeogurt:model](#model)
* [yeogurt:collection](#collection)
* [yeogurt:react](#react)

**Note: Generators are to be run from the root directory of your app.**

### Template

#### Static Site Specific
Creates  a jade file within the `client/templates` folder by default or within another folder using the `--type` option. Automatically, the created file's path will be included within the base layout file (Jade mixins and Swig macros must be included in the file(s) where you want to use them). If you wish to not have the generated file imported into the base layout file, pass the `--noImport` flag. Note: Importing is only designed to work with `type=module`. You can also specify a folder using the `--folder` option which is relative to the `client/templates` folder

Example:
```bash
## Page
yo yeogurt:template mypage

## Page using specific Template
yo yeogurt:template mypage --layout=one-column

## Template
yo yeogurt:template mylayout --type=layout

## Module
yo yeogurt:template mymodule --type=module

## Module with noImport flag
yo yeogurt:template mymodule --type=module --noImport
```

#### Single Page Application Specific
Creates 3 files: a new template file (Jade, Handlebars, or Lo-dash depending on which you chose) within the `client/scripts/templates` folder, a new Backbone view file within the `client/scripts/templates` folder, and a unit test spec file within the `test/spec` folder. You can also specify a folder using the `--folder` option which is relative to the `client/scripts/templates` folder

Example:
```bash
## Template
yo yeogurt:template mytemplate
```


### Script
If using Browserify or RequireJS, this creates module script within the `client/scripts/` folder. You can also specify a folder using the `--folder` option which is relative to the `client/scripts` folder.
This sub-generator will also create a unit test *Spec file within the `test/spec` folder (enter `grunt test` command to run your tests)

Example:
```bash
## Module
yo yeogurt:script myscript
```

### Style
If using Sass or Less, this creates a stylesheet file within the `client/styles/partials` folder by default. Otherwise, the stylesheet will be created within `client/styles` folder. You can also specify a folder using the `--folder` option which is relative to the `client/styles` folder. Automatically, the generated file will be included within the main template file (SCSS and Less mixins must be included in the file(s) when you want to use them). If you do not want the generated file to imported, pass the `--noImport` flag.

Example:
```bash
## Create file within client/styles/partials folder (Sass or Less) or client/styles folder (CSS)
yo yeogurt:style mystyle

## Create file within client/styles/base folder
yo yeogurt:style mystyle --folder=base

## Create file with noImport flag
yo yeogurt:style mystyle --noImport
```

## Single Page Application Specific Sub-Generators

### Model
Creates a new Backbone model file within `client/scripts/models` as well as a unit test spec file within the `test/spec` folder

Example:
```bash
## Model
yo yeogurt:model mymodel
```

### Collection
Creates a new Backbone collection file within `client/scripts/collections` as well as a unit test spec file within the `test/spec` folder. If you pass the `--model` option, you can specify which model to use with the collection. You can also specify a folder using the `--folder` option which is relative to the `client/scripts/collections` folder.

Example:
```bash
## Collection
yo yeogurt:model mycollection

## Collection with specified model
yo yeogurt:model mycollection --model=mymodel
```

### React
***Note: (Can only be used with React)***

Creates a new JSX React file within the `client/scripts/templates` as well as a unit test spec file within the `test/spec` folder. You can also specify a folder using the `--folder` option which is relative to the `client/scripts/components` folder.

Example:
```bash
## React
yo yeogurt:react myreact
```

## SVN usage (v1.7+)
If using SVN for version control, you will want to run the generated `svn-init` script within the root of you project folder.
### OSX (Mac) / Linux
Type in the following command into Terminal: `sh svn-init.sh`
### Windows
Type the following command into Command Prompt: `svn-init.bat`

This script will take all files/folders outlined within the `.svnignore` file and add them to the svn:ignore property of your repository.
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
If you chose the `Dynamic Dashboard` option in the generator, a dashboard will be automatically generated and can be accessed at `http://127.0.0.1:9010/.serve/dashboard/index.html` when using the `grunt serve` task or `http://127.0.0.1:9010/dashboard/index.html` when running `grunt serve:dist`.

The dashboard has been completely overhauled from v0.4.x and moved into it's own plugin: `grunt-dashboard`.
Please refer to the plugin [documentation](https://github.com/larsonjj/grunt-dashboard) for example usage.

For documentation on the old v0.4.x dashboard, please refer to [here](https://github.com/larsonjj/generator-yeogurt/tree/master/docs/old-dashboard.md)

## Dynamic JavaScript API
If you answered `Y (Yes)` to the `JSDoc` option in the generator, a JavaScript API will be automatically generated and can be accessed at `http://127.0.0.1:9010/.serve/docs/api/index.html` when using the `grunt serve` task or `http://127.0.0.1:9010/docs/api/index.html` when running `grunt serve:dist`.

The library used to generate the API documentation is [JSDoc](http://usejsdoc.org/). You can view an example [here](http://yeoman.github.io/generator/).

## Dynamic Styleguide
If you answered `Y (Yes)` to the `KSS (Knyle Style Sheets)` option in the generator, a Stylguide will be automatically generated and can be accessed at `http://127.0.0.1:9010/.serve/docs/styleguide/index.html` when using the `grunt serve` task or `http://127.0.0.1:9010/docs/styleguide/index.html` when running `grunt serve:dist`.

Knyle Style Sheets (KSS) is used at Github to create their [styleguide](https://github.com/styleguide) and is used in this generator via [kss-node](https://github.com/hughsk/kss-node). Be sure to look up [documentation](http://warpspire.com/posts/kss/) to see how to write KSS comments in your stylesheets.

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
