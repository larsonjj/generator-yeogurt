<p align="center">
  <img src="https://raw.githubusercontent.com/larsonjj/generator-yeogurt/master/docs/images/logo.png" />
</p>

# Yeogurt Generator [![Build Status](https://secure.travis-ci.org/larsonjj/generator-yeogurt.png?branch=master)](https://travis-ci.org/larsonjj/generator-yeogurt) [![NPM version](https://badge.fury.io/js/generator-yeogurt.png)](http://badge.fury.io/js/generator-yeogurt) [![Coverage Status](https://coveralls.io/repos/larsonjj/generator-yeogurt/badge.png)](https://coveralls.io/r/larsonjj/generator-yeogurt)

A generator for creating static sites. Helps you harness the power of your favorite tools: [Pug](https://pugjs.org/api/getting-started.html) or [Nunjucks](https://mozilla.github.io/nunjucks/), [Gulp](http://gulpjs.com), ES6/2015, and much more!

# Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Setup](#setup)
- [Gulp Workflow](#gulp-workflow)
- [Sub-Generators](#sub-generators)
- [Guides](#guides)
- [Common Issues](#common-issues)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Testing Generator](#testing-generator)
- [Release History](#release-history)
- [License](#license)

## Features

### Included in every project

- Preview server with [Browsersync](http://www.browsersync.io/)
- Automated build process that includes: compilation of preprocessors (Pug, Sass, etc), minification of CSS and HTML, compression of Javascript, and optimization of images
- [.editorconfig](http://editorconfig.org/) for consistent coding styles within text editors
- [Sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) for JavaScript and Stylesheets
- JavaScript Linting with [ESLint](http://eslint.org/)
- System Notifications for build errors via [gulp-notify](https://github.com/mikaelbr/gulp-notify)

### Available Options

- Project/Site naming
- ES6/2015 support using [Babel](https://babeljs.io/)
- [Less](http://lesscss.org/), [Sass](http://sass-lang.com/) (via [node-sass](https://github.com/andrew/node-sass)), or [Stylus](http://learnboost.github.io/stylus/) for Stylesheets
- [Jasmine](http://jasmine.github.io/) or [Mocha](http://mochajs.org/) + [Chai](http://chaijs.com/) for JavaScript unit testing
- [Karma](http://karma-runner.github.io/0.12/index.html) for running unit tests
- [Pug](https://pugjs.org/api/reference.html) or [Nunjucks](https://mozilla.github.io/nunjucks/) for templating

## Getting Started

This generator utilizes [Yeoman](http://yeoman.io/) and [Gulp](http://gulpjs.com/) to scaffold out projects, automate tasks, and manage front-end dependencies respectively. If this is your first time here, it is recommended you [read about these tools](http://yeoman.io/learning/index.html) before proceeding.

### Installation

There are a few dependencies that this project relies on:

> NOTE: For OSX users
> You may have some issues compiling code during installation of packages. Please install Xcode from App Store first. After Xcode is installed,
> open Xcode and go to **_Preferences -> Download -> Command Line Tools -> Install_** to install command line tools.

> NOTE: For Windows users
> You may have some issues compiling [BrowserSync](http://www.browsersync.io/) during installation of packages. Please go to [http://www.browsersync.io/docs/#windows-users](http://www.browsersync.io/docs/#windows-users) for more information on how to get all the needed dependencies.

#### Node.js

Check to see if you already have Node installed. Do this by bringing up a terminal/command prompt and type `node -v`. If the response shows a version at or above `v0.12.x`, you are all set and can proceed to installing Yeoman, Gulp, and Bower. If you see an error and/or your version is too low, navigate to the [Node.js](http://nodejs.org/) website and install Node from there.

#### Yeoman & Gulp

Once you have Node installed, make sure you have these tools by opening up a terminal/command prompt and entering following commands:

| Command        |            Response             |
| -------------- | :-----------------------------: |
| `yo --version` |      at or above `v1.2.1`       |
| `gulp -v`      | `gulp-cli` at or above `v0.3.9` |

If you get any errors and/or you're version(s) are too low, you should run `npm install -g yo gulp`.
This will install both tools and update them to their latest versions.

#### Yeogurt

Now that you have all the needed dependencies, you can install this generator with the following command:

```
npm install -g generator-yeogurt
```

That completes installation! So at this point you should have all the needed tools to start working Yeogurt.

## Setup

When starting a new project, you will want to: open up a terminal/command prompt, make a new directory, and navigate into it.

```
mkdir my-new-project && cd $_
```

then, run the Yeogurt generator.

```
yo yeogurt
```

**_Optionally_**, you can skip the automated installation of npm packages by passing in `--skip-install`. The main reason to use this is if you have spotty/no internet connection, but would still like to generate your project.

```
yo yeogurt --skip-install
```

Follow all the prompts and choose what suits you most for the project you would like to create. When you finish with all of the prompts, your project scaffold will be created and all dependencies will be installed.

> NOTE: If you used the `--skip-install` option, no dependencies will have been installed and your gulp tasks will NOT work.
> You will need to run `npm install` in your project's root directory in order to get started running automated tasks

Once everything is installed, you will see a project structure like below:

```
├── gulp/                      # Folder for gulp tasks
├── build/                     # Folder for production build output
├── tmp/                       # Folder for temporary development output
├── src
|   ├── _data                  # JSON/YAML files that add data to templates
|   ├── _images                # Images
|   ├── _layouts               # Layout structure for app
|   |   └── base.pug
|   ├── _modules               # Reusable modules
|   |   └── link
|   |       ├── __tests__
|   |       |   └── link.spec.js
|   |       ├── link.pug
|   |       ├── link.js
|   |       └── link.scss
|   ├── _styles               # Global styles, mixins, variables, etc
|   |   └── main.scss         # Main stylesheet (import everything to this file)
|   ├── _scripts              # Global scripts, base classes, etc
|   |   └── main.js           # Main bootstrap file
|   ├── fonts                 # Fonts (Example, will not be generated)
|   ├── index.pug            # Homepage template
|   ├── favicon.ico
|   └── robots.txt
├── gulpfile.js               # Gulp task configuration
└── package.json              # Dependencies and site/folder configuration
```

Congratulations! You should now have successfully created a Yeogurt project and are ready to start building out your site/app.

Now you can run the following gulp tasks:

- `gulp serve` for previewing your site/app on a development server.
- `gulp serve --production` for previewing a production version of your site/app.
- `gulp` for testing and building a development version of your site.
- `gulp --production` same as `gulp` but builds a production version of your site.
- `gulp test` for linting your scripts and running unit tests.

You can learn more about what tasks are available in the [gulp tasks](#gulp-workflow) section.

## Configuration

In the `package.json` file, within the root of the generated project, you have the ability to configure some project settings:

### Site

| Setting | Description                                      |
| ------- | ------------------------------------------------ |
| host    | Host URL of the development server (browserSync) |
| port    | Port of the development server (browserSync)     |
| baseUrl | Root directory of your site                      |

### Main Directories

| Setting     | Description                                                                                                                            |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| source      | Source folder for all development files (default location for [page subgenerator](https://github.com/larsonjj/generator-yeogurt#page)) |
| destination | Build folder where production version of site is generated                                                                             |
| temporary   | Temporary folder where development server files are generated                                                                          |

### Source Directories

Folders relative to the `source` configured directory

| Setting             | Description                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [data](#data-files) | Data folder where JSON/YAML files are loaded into templates                                                                                              |
| scripts             | Scripts folder where all `.js` files are located (main.js must be in root of this folder)                                                                |
| styles              | Styles folder where all stylesheet files are located (main stylesheet must be in root of this folder)                                                    |
| modules             | Modules folder where all reusable code should live (default location for [module subgenerator](https://github.com/larsonjj/generator-yeogurt#module))    |
| layouts             | Layouts folder where all layout templates should live (default location for [layout subgenerator](https://github.com/larsonjj/generator-yeogurt#layout)) |
| images              | Images folder where all `.png, jpeg, jpg, svg, gif` files should live                                                                                    |

### Entry files

Files that should be searched for and created by build tasks.
File strings and [Globs](https://github.com/isaacs/node-glob) can be used to process desired file(s).
Ex: `main**.js` will process all files that start with `main` and end with `.js`

| Setting | Description                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------- |
| js      | Tells browserify what file(s) to bundle and generate at your desired build target                          |
| css     | Tells your stylesheet preprocessor (Sass, Less, etc) what file(s) to generate at your desired build target |

**_Default configuration:_**

```json
"//": "CUSTOM CONFIGURATION",
"config": {
  "//": "Local Server Settings",
  "host": "127.0.0.1",
  "port": "9010",
  "baseUrl": "./",
  "//": "Gulp Task Directories",
  "//": "NOTE: folders prefixed with an underscore (_) will have it removed when moved to build target (ex: src/_images -> build/images)",
  "//": "NOTE: folders NOT prefixed with underscore (_) will be copied to build target 1 to 1 (ex: src/fonts -> build/fonts)",
  "directories": {
    "source": "src",
    "destination": "build",
    "temporary": "tmp",
    "//": "Directories relative to `source` directory",
    "modules": "_modules",
    "layouts": "_layouts",
    "images": "_images",
    "styles": "_styles",
    "scripts": "_scripts",
    "data": "_data"
  },
  "//": "Entry files",
  "entries": {
    "js": "main**.js",
    "css": "main**.{scss,sass,styl,less}"
  }
}
```

## Gulp Workflow

### `gulp --production`

Runs [`gulp test`](#gulp-test) and builds out an optimized site through compilation of preprocessors (Pug, Sass, etc), minification of CSS and HTML, uglification of Javascript, and optimization of images.

### `gulp serve`

Starts up a development server that watches files and automatically reloads them to the browser when a change is detected.

**Extra Task Target(s)**

| Tasks                     | Description                                                    |
| ------------------------- | -------------------------------------------------------------- |
| `gulp serve --production` | starts up a server that loads a production version of the site |
| `gulp serve --open`       | starts up a server and opens it within your default browser    |

### `gulp test`

Runs ESLint and Karma to lint and run JavaScript tests, respectively.

**Extra Task Target(s)**

| Tasks               | Description                                                                                                |
| ------------------- | ---------------------------------------------------------------------------------------------------------- |
| `gulp test --watch` | runs [`gulp test`](#gulp-test), but also watches test files and auto runs tests when changes are detected. |

> NOTE: test:watch is only available if you chose to unit test your javascript

**_Adding the `--debug` option to any gulp task displays extra debugging information (ex. data being loaded into your templates)_**

## Sub-Generators

- [yeogurt:page](#page)
- [yeogurt:module](#module)
- [yeogurt:layout](#layout)

**_Note: Generators need to be run from the root directory of your app._**

## Default Generators

### Page

Creates a new page.

#### Example:

```
$ yo yeogurt:page contact
```

Produces:

```
src/contact/index.{pug,nunjucks}
```

#### Example #2: Specifying a layout

```
$ yo yeogurt:page contact --layout=one-col
```

Produces:

```
// Page that extends from 'src/_layouts/one-col'
src/contact/index.{pug,nunjucks}
```

> NOTE: Pages will default to extending from `src/_layouts/base` if `--layout` is not provided

### Module

Creates a new module.

#### Example:

```
$ yo yeogurt:module header
```

Produces:

```
src/_modules/header/header.{pug,nunjucks}
src/_modules/header/header.{scss,sass,less,styl}
src/_modules/header/header.js
src/_modules/header/__tests__/header.test.js
```

#### Example #2: Specifying module as atomic

This is a great way to create modules that adhere to [atomic design](http://patternlab.io/about.html)

```
$ yo yeogurt:module link --atomic=atom
```

Produces:

```
src/_modules/atoms/link/link.{pug,nunjucks}
src/_modules/atoms/link/link.{scss,sass,less,styl}
src/_modules/atoms/link/link.js
src/_modules/atoms/link/__tests__/link.test.js
```

> NOTE: Possible `--atomic` options: atom, molecule, organism

#### Example #3: Specifying module multiple folder levels deep

```
$ yo yeogurt:module some/cool/link --atomic=atom
```

Produces:

```
src/_modules/atoms/some/cool/link/link.{pug,nunjucks}
src/_modules/atoms/some/cool/link/link.{scss,sass,less,styl}
src/_modules/atoms/some/cool/link/link.js
src/_modules/atoms/some/cool/link/__tests__/link.test.js
```

### Layout

Creates a new layout.

#### Example:

```
$ yo yeogurt:layout one-col
```

Produces:

```
src/_layouts/one-col.{pug,nunjucks}
```

#### Example #2: Specifying another layout to extend from

```
$ yo yeogurt:page contact --layout=one-col
```

Produces:

```
// Layout that extends from 'src/_layouts/one-col'
src/contact/index.{pug,nunjucks}
```

> NOTE: Layouts will default to extending from 'src/\_layouts/base'

## Guides

### Adding third-party libraries

Odds are that you will need to add some third party libraries to your project at some point.
To do so, it is strongly recommended that you install them using [NPM](http://npmjs.com/):

```
npm install [package name] --save
```

#### Scripts

Once installed, you can access scripts within your JavaScript files like so:

```js
// Example using jquery

$(function() {
  console.log('Hello');
});

// ES6/2015
import $ from 'jquery';

$(() => {
  console.log('Hello');
});
```

#### Stylesheets

You can also access stylesheets by importing them to you chosen preprocessor like so:

**Using SCSS:**

```scss
// SCSS
@import 'node_modules/bootstrap-sass-official/scss/bootstrap';

// CSS
@import 'node_modules/normalize.css/normalize';
```

**Using SASS:**

```sass
// SASS
@import node_modules/bootstrap-sass-official/scss/bootstrap

// CSS
@import node_modules/normalize.css/normalize
```

**Using LESS:**

```less
// LESS
@import 'node_modules/bootstrap/less/bootstrap';

// CSS
@import (inline) 'node_modules/normalize.css/normalize.css';
```

**Using Stylus:**

```stylus
// Stylus
@import '../../node_modules/bootstrap-stylus/bootstrap';

// CSS import
@import '../../node_modules/normalize.css/normalize.css';
```

#### Using Non-CommonJS modules with browserify-shim

Sometimes you need to use libraries that attach themselves to the window object and don't work with browserify very well.
In this case, you can use a transform called [browserify-shim](https://github.com/thlorenz/browserify-shim).

**_Step 1: Install browserify-shim transform for browserify_**

Browserify doesn't support Non-CommonJS scripts out of the box (jQuery plugins, window.\* libs, etc), but you can install a transform called 'browserify-shim' to remedy that:

```
npm install --save-dev browserify-shim
```

**_Step 2: Install desired npm package_**

Now you can install your desired npm package:

```
// Example: jQuery plugin

npm install --save slick-carousel
```

**_Step 3: Setup browserify-shim_**

Add the following to your `package.json` file:

```json
"browserify": {
  "transform": [ "browserify-shim" ]
},
"browser": {
  "slick-carousel": "./node_modules/slick-carousel/slick/slick.js"
},
"browserify-shim": {
  "slick-carousel": {
    "exports": null,
    "depends": "jquery:$"
  }
},
```

> Note: [slick-carousel](http://kenwheeler.github.io/slick/) requires jQuery, hence the `"depends": "jquery:$"`

**_Step 4: Import file to your project_**

Now you can include your desired module/lib within your `src/_scripts/main.js` file:

```js
import 'slick-carousel';

...

$('#someId').slick(); // Activates slick plugin
```

#### Using Bower

If you can't find your desired package on the NPM registry and you wish to use Bower to manage some front-end packages, you can accomplish this in a couple steps:

**_Step 1: Install Bower_**

```
npm install -g bower
```

**_Step2: Create `bower.json`_**

Create a `bower.json` file within the root directory of your generated project
with the following contents:

```json
{
  "name": "Sample",
  "version": "0.0.1",
  "authors": ["John Doe <john.doe@someurl.com>"],
  "license": "MIT",
  "ignore": ["**/.*", "node_modules", "bower_components", "test", "tests"],
  "dependencies": {}
}
```

> Note: Be sure to update the name, version, author, etc info to your liking

**_Step 3: Install package_**

```
bower install --save [package name]
```

**_Step 4: Use package_**

If the package installed is a javascript library, you will need to shim it. Instructions for this are in the [browserify-shim](#using-non-commonjs-modules-with-browserify-shim) section of this README.

If the package is CSS, Sass, Less, or Stylus, you can follow the instructions in the [Stylesheets](#stylesheets) section of this README

### Data Files

If you want to load global data into your templates (pug or nunjucks), you can add JSON/YAML files in `src/_data` folder.

For example, add menu.json in `src/_data` folder:

```json
{
  "name": "Home",
  "link": "/",
  "category": "Page",
  "status": "Development"
}
```

And it will be added to the `site.data` object so it can be used like so:

```pug
div
  h1= site.data.menu.name
```

Which outputs to:

```html
<div>
  <h1>Home</h1>
</div>
```

### Creating a dashboard

Using data files, you can build a nice dashboard for your pages and modules.
You can add an example dashboard to your Yeogurt project by going to this [Dashboard Example](https://github.com/larsonjj/yeogurt-dashboard-example) repository
and following the instructions in the README.md.

> NOTE: Example dashboard only works with Pug currently

### Using SVN

If you plan on using SVN instead of Git, you will want to setup some default ignores to make sure you aren't committing extraneous/generated files to your codebase. To do this, adhere to the following steps:

#### Step 1

Create a new file in the root of your project named `.svnignore` and give it the following contents:

```
node_modules
*.log
build
tmp
.DS_Store
```

#### Step 2

Run the following command:

```
svn propset svn:ignore -R -F .svnignore .
```

This command will go through your newly created `.svnignore` file and set the specified files/folders to be ignored by SVN.

## Common Issues

### ESLint giving errors for third-party scripts

##### Typical error message:

> jQuery is not defined

When adding third-party scripts, you should always import them to your `_scripts/main.js` file (See [Adding third-party libraries](#adding-third-party-libraries)).
However, if you [shimmed](#using-non-commonjs-modules-with-browserify-shim) the library/package to be global (ex: window.jQuery), ESLint will not know that your new library is defined globally. Thus, giving you errors.

##### Solution

To remedy this situation, all you need to do is open up your `.eslintrc` file in the root directory of you project, and add your new library name to the `global:` property array:

```
// .eslintrc
{
...
  globals: {
    jQuery: true // Tells ESLint that jQuery is defined globally
  }
...
}
```

## Contributing

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

- [Bug reports](CONTRIBUTING.md#bugs)
- [Feature requests](CONTRIBUTING.md#features)
- [Pull requests](CONTRIBUTING.md#pull-requests)

## Testing Generator

To run unit tests, you have a couple options:

- `npm test`: This will run all unit tests with Mocha and send the report to [coveralls.io](http://coveralls.io) to be processed. (Don't run this for local testing)
- `npm run localtest`: This is the same as `npm test` only it doesn't send anything to coveralls.io. (Use this for local testing)
- `npm run localtest-report`: This is the same as `npm run localtest`, but it also generates an HTML report of the current code coverage.

## Release History

See [Changelog](https://github.com/larsonjj/generator-yeogurt/blob/master/CHANGELOG.md)

## License

[MIT License](LICENSE.md) - &copy; Jake Larson
