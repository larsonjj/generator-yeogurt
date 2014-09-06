<p align="center">
    <img src="https://raw.githubusercontent.com/larsonjj/generator-yeogurt/master/docs/images/logo.png" />
</p>

# Yeogurt Generator [![Build Status](https://secure.travis-ci.org/larsonjj/generator-yeogurt.png?branch=master)](https://travis-ci.org/larsonjj/generator-yeogurt) [![NPM version](https://badge.fury.io/js/generator-yeogurt.png)](http://badge.fury.io/js/generator-yeogurt) [![Coverage Status](https://coveralls.io/repos/larsonjj/generator-yeogurt/badge.png)](https://coveralls.io/r/larsonjj/generator-yeogurt)

A [Yeoman](http://yeoman.io) generator that creates a sensible structure for static sites and single page applications by using your favorite tools.

# Table of Contents

- [What can I create with Yeogurt?](#what-can-i-create-with-yeogurt)
- [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Usage](#usage)
- [Features](#features)
    - [Included in every project](#included-in-every-project)
    - [Available Options](#available-options)
    - [Static Site Options](#static-site-options)
    - [Single Page Application Options](#single-page-application-options)
    - [Express Server Options](#express-server-options)
    - [Automatic File Injection](#automatic-file-injection)
- [Grunt Workflow](#grunt-workflow)
- [Sub-Generators](#sub-generators)
    - [Default (Can be used on any project)](#default-can-be-used-on-any-project)
    - [Static Sites and Backbone](#static-sites-and-backbone-applications)
    - [React](#react-application)
    - [Flux](#flux-application)
    - [Backbone](#backbone-application)
- [Automated Documentation](#automated-documentation)
    - [Dashboard](#dashboard)
    - [JavaScript API](#javascript-api)
    - [Styleguide](#styleguide)
- [Adding third-party libraries](#adding-third-party-libraries)
- [Deployment](#deployment)
    - [FTP Server](#ftp-server)
- [Guides](#guides)
- [Common Gotchas](#common-gotchas)
    - [Bower not installing dependencies using Git](#bower-not-installing-dependencies-using-git)
    - [JSHint giving errors for third-party scripts](#jshint-giving-errors-for-third-party-scripts)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Release History](#release-history)
- [License](#license)

## What can I create with Yeogurt?
- Build out static sites using [Jade](http://jade-lang.com/), [Swig](http://paularmstrong.github.io/swig/), or HTML.
- Create Single Page Applications using [Backbone](http://backbonejs.org/) or [React](http://facebook.github.io/react/) (optionally with [Flux](http://facebook.github.io/react/docs/flux-overview.html)).
- Make your site/app full-stack by adding an [Express](http://expressjs.com/) Server with optional database, cookie session, and security support .

Check out the [features](#features) section to see everything this generator has to offer.

## Getting Started
This generator utilizes [Yeoman](http://yeoman.io/), [Grunt](http://gruntjs.com/), and [Bower](http://bower.io/) to Scaffold out projects, automate tasks, and manage front-end dependencies respectively. If this is your first time here, it is recommended you [read about these tools](http://yeoman.io/learning/index.html) before proceeding.

### Installation
There are a few dependencies that this project relies on:

#### Node.js
Check to see if you already have Node installed. Do this by bringing up a terminal/command prompt and type `node -v`. If the response shows a version at or above `v0.10.x`, you are alll set and can proceed to installing Yeoman, Grunt, and Bower. If you see an error and/or your version is too low, navigate to the [Node.js](http://nodejs.org/) website and install Node from there.

#### Yeoman, Grunt, & Bower
Once you have Node installed, make sure you have these tools by opening up a terminal/command prompt and entering following commands:

| Command    | Response
|---------- |:---------:
| `yo -v`    | at or above `v1.2.1`
| `bower -v` | at or above `v1.3.x`
| `grunt -V` | `grunt-cli` at or above `v0.1.10`

If you get any errors and/or you're version(s) are too low, you should run `npm install -g yo`. This will install all three tools and update them to their latest versions.

> IMPORTANT: Bower requires the use of [Git](http://git-scm.com/) to install packages.

#### Yeogurt
Now that you have all the needed dependencies, you can install this generator with the following command: `npm install -g generator-yeogurt`

That completes installation! So at this point you should have all the needed tools to start working Yeogurt.

### Usage
When starting a new project, you will want to: open up a terminal/command prompt, make a new directory, and navigate into it.

```
mkdir my-new-project && cd $_
```

then, run the Yeogurt generator.

```
yo yeogurt
```

Optionally, you can skip the automated installation of npm and bower packages by passing in `--skip-install`.

```
yo yeogurt --skip-install
```

Follow all the prompts and choose what suits you most for the project you would like to create. When you finish with all of the prompts, your project scaffold will be created and all dependencies will be installed.

***NOTE: If you used the `--skip-install` option, no dependencies will have been installed. You will need to run `npm install && bower install` in your project's root directory in order to get started***

Now you can run:

- `grunt` for testing and building a production version of your site.
- `grunt serve` for previewing your site/app on a development server.
- `grunt serve:dist` for previewing a production version of your site/app.

You can learn more about what tasks are available in the [grunt tasks](#grunt-workflow) section.

> IMPORTANT: SVN users should run the `svn-init.sh` (Linux, OSX) or `svn-init.bat` (Window) script in order to correctly setup ignores for your project. These scripts will be located in the root of your project folder. It is recommended that you do this before committing any code.

Congratulations! You should now have successfully created a Yeogurt project and are ready to start building out your site/app.


## Features

### Included in every project
- Built in preview server with LiveReload
- [.editorconfig](http://editorconfig.org/) for consistent coding styles within text editors
- Automated build process that includes: compilation of preprocessors (Jade, Sass, etc), minification of CSS and HTML, uglification of Javascript, optimization of images, and processing of [usemin blocks](Usemin blocks)
- [Sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) for JavaScript and Stylesheets

### Available Options

- Project/Site naming
- Default ignores for [Git](http://git-scm.com/) or [SVN](http://subversion.apache.org/)
- Stylesheets with [Less](http://lesscss.org/), [Sass](http://sass-lang.com/) (via [node-sass](https://github.com/andrew/node-sass)), [Stylus](http://learnboost.github.io/stylus/), or CSS
- Modular JavaScript with [RequireJS](http://requirejs.org/) or [Browserify](http://browserify.org/)
- IE8 Support via [HTML5shiv](https://github.com/aFarkas/html5shiv) and [RespondJS](https://github.com/scottjehl/Respond)
- JavaScript Linting with [JSHint](http://www.jshint.com/)
- Feature detection with [Modernizr](http://modernizr.com/)
- Styleguide - auto-generated styleguide for your stylesheets with [Knyle Style Sheets](http://warpspire.com/posts/kss/)
- JavaScript Documentation - auto-generated API for your scripts with [JSDoc](http://usejsdoc.org/)
- JavaScript unit testing with [Jasmine](http://jasmine.github.io/) or [Mocha](http://visionmedia.github.io/mocha/) + [Chai](http://chaijs.com/)
- Test running with [Karma](http://karma-runner.github.io/0.12/index.html)
- FTP deployment

### Static Site Options
- Markup with [Jade](http://jade-lang.com/), [Swig](http://paularmstrong.github.io/swig/), or HTML
- Dashboard - auto-generated dashboard for your site with [grunt-dashboard](https://github.com/larsonjj/grunt-dashboard)
    - Only available for Static Sites that are not using an Express server

### Single Page Application Options
- Facebook's [React](http://facebook.github.io/react/) with [Flux](http://facebook.github.io/react/docs/flux-overview.html) (Optional)
> IMPORTANT: React only use Browserify (no RequireJS support)
- Backbone with [Jade](http://jade-lang.com/), [Handlebars](http://handlebarsjs.com/), or [Lo-dash](http://lodash.com/) templating

### Express Server Options

- Database support for [MySQL](http://www.mysql.com/) and [MongoDB](http://www.mongodb.org/) using [Sequelize](http://sequelizejs.com/) and [Mongoose](http://mongoosejs.com/) respectively.
- Cookie Session Storage with [express-session](https://github.com/expressjs/session)
- Security with Paypal's [Lusca](https://github.com/krakenjs/lusca) module
- Jade, Swig, and React server-side template rendering

### Automatic File Injection
A grunt task looks for new/updated files in your project and automatically injects imports/includes in the appropriate places based on an injection block.

|Filetype(s) |Project Type (Static/Single Page Appliction)| File to be injected into
|---------|---------------|---------
|Less| Any | `client/styles/main.less`
|Sass | Any | `client/styles/main.scss`
|Stylus | Any | `client/styles/main.styl`
|Jade | Static | `client/templates/layouts/base.jade` or `server/templates/layouts/base.jade` if using express server
|Swig | Static |`client/templates/layouts/base.swig` or `server/templates/layouts/base.swig` if using express server
|CSS, JS | Static | `client/templates/layouts/base.{jade,swig}` or `server/templates/layouts/base.{jade,swig}` if using express server
|CSS, JS | Single Page Application | `client/index.html` or `server/templates/index.html` if using express server



## Grunt Workflow

### `grunt`
Runs both [`grunt test`](#grunt-test) and [`grunt build`](#grunt-build).

### `grunt serve`
Starts up a development server that watches files and automatically reloads them to the browser when a change is detected.

**Extra Task Target(s)**

|Tasks| Description
|---------|-------
|grunt serve:dist| runs [`grunt build`](#grunt-build) and starts up a server that loads the optimized files
|grunt serve:docs| same as [`grunt serve`](#grunt-serve), but will also watch and recompiles automated documentation (KSS, JSDoc, etc).

***NOTE: you can add the `--allow-remote` option to any of these commands to allow remote devices on the same network to view your site/app***

### `grunt build`
Builds out an optimized site through compilation of preprocessors (Jade, Sass, etc), minification of CSS and HTML, uglification of Javascript, optimization of images, and processing of [usemin blocks](Usemin blocks). All files created from this task are put in the `{project root}/dist/` folder.

### `grunt test`
Runs JSHint and Karma to lint and run JavaScript tests, respectively.

**Extra Task Target(s)**

|Tasks| Description
|---------|-------
|grunt test:watch| runs [`grunt test`](#grunt-test), but also watches test files and auto runs tests when changes are detected.

***NOTE: you can add the `--allow-remote` option to any of these commands to allow remote devices on the same network to view/run your tests***

### `grunt deploy`
Runs [`grunt build`](#grunt-build) and pushes optimized files to a specified FTP server.

***NOTE: [FTP server](#ftp-server) info is specified in the `.ftppass` file in the root of your project)***

## Sub-Generators

#### Default (Can be used on any project)
* [yeogurt:script](#script)
* [yeogurt:style](#style)

#### Static Sites and Backbone applications
* [yeogurt:template](#template)

#### React application
* [yeogurt:react](#react)

#### Flux application
* [yeogurt:flux](#flux)


#### Backbone application
* [yeogurt:view](#view)
* [yeogurt:model](#model)
* [yeogurt:collection](#collection)

***Note: Generators need to be run from the root directory of your app.***

## Default Generators
***Note: (The following sub-generators can be used with any type of project)***

### Script
Creates 2 files:

- A script file within the `client/scripts` folder.
- A unit test file within the `test/spec` folder.

There are also an option that can be used to change the default behavior:

|Options |Possible Values |Description
|---------|---------------|-----------
|--folder | [any folder path] |  Creates file relative to the `client/scripts` folder

Example:

```
## Module
yo yeogurt:script myscript

## Module with specified folder: client/scripts/account
yo yeogurt:script myscript --folder=account
```

### Style
Create a stylesheet file within `client/styles` folder.

There are also an option that can be used to change the default behavior:

|Options |Possible Values |Description
|---------|---------------|-----------
|--folder | [any folder path] |  Creates file relative to the `client/styles` folder

Example:

```
## Style
yo yeogurt:style mystyle

## Style within specified folder: client/styles/account
yo yeogurt:style mystyle --folder=account
```

## Static Site and Backbone Sub-generators
***Note: (The following sub-generator cannot be used with React applications)***

### Template
> IMPORTANT: This sub-generator is unique in that it's behavior differs depending on if you have generated a Static Site or a Backbone application.

##### For Static Sites
Creates a jade file within the `client/templates` folder.

There are also an option that can be used to change the default behavior:

|Options |Possible Values |Description
|---------|---------------|-----------
|--type| `module`, `template`, or `page(default)` | Creates file in folder specified by type: `client/templates/{type}/myfile` or `server/templates/{type}/myfile` if using express server
|--folder | [any folder path] |  Creates file relative to the `client/templates` folder or `server/templates` if using express server

Examples:

```
## Page
yo yeogurt:template mypage

## Page using specified Template
yo yeogurt:template mypage --layout=base

## Page using specified folder: {server,client}/templates
yo yeogurt:template mypage --layout=base

## Template
yo yeogurt:template mylayout --type=layout

## Module
yo yeogurt:template mymodule --type=module
```

##### For Backbone applications
Creates a new template file (Jade, Handlebars, or Lo-dash depending on which you chose) within the `client/templates` folder.

There are also an option that can be used to change the default behavior:

|Options |Possible Values |Description
|---------|---------------|-----------
|--folder | [any folder path] |  Creates file relative to the `client/templates` folder


Example:

```
## Template
yo yeogurt:template mytemplate

## Template with specified folder client/templates/account
yo yeogurt:template mytemplate --folder=account
```

## React Sub-generator
***Note: (The following sub-generator can only be used with React applications)***

### React

Creates 2 files

- A new React component file within the `client/scripts/components`
- A unit test file within the `test/spec/components` folder.

|Options |Possible Values |Description
|---------|---------------|-----------
|--folder | [any folder path] |  Creates file relative to the `client/scripts/components` folder


Example:

```
## React
yo yeogurt:react myreact

## React within specified folder: client/scripts/components/account
yo yeogurt:react myreact --folder=account
```

## Flux Sub-generator
***Note: (The following sub-generator can only be used with React + Flux applications)***

### Flux

Creates 6 files:

***Source Files***

- A new Flux store file within the `client/scripts/flux/stores`
- A new Flux constant file within the `client/scripts/flux/constants`
- A new Flux action file within the `client/scripts/flux/actions`

***Test Files***

- A store test file within the `test/spec/stores` folder.
- A constant test file within the `test/spec/constants` folder.
- A action test file within the `test/spec/action` folder.

Example:

```
## Flux
yo yeogurt:flux myflux
```

## Backbone Sub-generators
***Note: (The following sub-generators can only be used with Backbone applications)***

### View
Creates 3 files:

- A new template file (Jade, Handlebars, or Lo-dash depending on which you chose) within the `client/templates` folder
- A new Backbone view file within the `client/scripts/views` folder
- A unit test file within the `test/spec/views` folder.

There are also an option that can be used to change the default behavior:


|Options |Possible Values |Description
|---------|---------------|-----------
|--folder | [any folder path] |  Creates file relative to the `client/scripts/views` folder


Example:

```
## View
yo yeogurt:view myview

## View
yo yeogurt:view myview --folder=account
```

### Model

Creates 2 files:

- A new Backbone model file within `client/scripts/models`
- A unit test spec file within the `test/spec/models` folder

There are also an option that can be used to change the default behavior:


|Options |Possible Values |Description
|---------|---------------|-----------
|--folder | [any folder path] |  Creates file relative to the `client/templates` folder

Example:

```
## Model
yo yeogurt:model mymodel

## Model with specified folder
yo yeogurt:model mymodel --folder=account
```

### Collection

Creates 2 files

- A new Backbone collection file within `client/scripts/collections`
- A unit test spec file within the `test/spec/collections` folder.

There are also a couple possible options that can be used to change the default behavior:


|Options |Possible Values |Description
|---------|---------------|-----------
|--model | `[filename of model]` |  Adds the specified model name to the collection `model:` property
|--folder | [any folder path] |  Creates file relative to the `client/templates` folder

Example:

```
## Collection
yo yeogurt:model mycollection

## Collection with specified model
yo yeogurt:model mycollection --model=mymodel

## Collection with specified folder
yo yeogurt:model mycollection --folder=accounts
```

## Automated Documentation
### Dashboard
If you chose to create a Dashboard, a dashboard will be automatically generated from raeading your Jade/Swig files. After running `grunt serve` or `grunt serve:dist`, it can be accessed at `/docs/dashboard/index.html`.

For more information and usage, please refer to the `grunt-dashboard` plugin [documentation](https://github.com/larsonjj/grunt-dashboard).

### JavaScript API
If you chose to use [JSDoc](http://usejsdoc.org/), JavaScript API documenation will be automatically generated from reading your script files. After running `grunt serve` or `grunt serve:dist`, it can be accessed at `/docs/api/index.html`.

You can view an example [here](http://yeoman.github.io/generator/).

### Styleguide
If you chose to use [KSS (Knyle Style Sheets)](http://warpspire.com/posts/kss/), a Styleguide will be automatically generated from reading your Less/Sass/Stylus/CSS files. After running `grunt serve` or `grunt serve:dist`, it can be accessed at `/docs/styleguide/index.html`.

Knyle Style Sheets (KSS) is used at Github to create their [styleguide](https://github.com/styleguide) and is used in this generator via [kss-node](https://github.com/hughsk/kss-node). Be sure to look up [documentation](http://warpspire.com/posts/kss/) to see how to write KSS comments in your stylesheets.

## Adding third-party libraries
Odds are that you will need to add some third party libraries to your project at some point. To do so, it is strongly recommended that you install them using bower ([usage](http://bower.io/)). If you can't [find the package on bower](http://bower.io/search/) (very rare) or you have your own in-house libraries that you like to use, you should put them within a `client/scripts/vendor` folder (jshint is setup to ignore this folder).

Once you have your library installed, you will want to add it to your project. To do this, you'll need to add a new `<script>` tag to your base template file:

***Static Sites***

|Template Type | Server? | Base Template Location
|---------|---------------|---------
|Jade | No  | `client/templates/layouts/base.jade`
|Jade | Yes | `server/templates/layouts/base.jade`
|Swig | No |`client/templates/layouts/base.swig`
|Swig | Yes | `server/templates/layouts/base.swig`
|HTML | No | `client/templates/index.html`

***Single Page Applications***

|Library/Framework | Server? | Base Template Location
|---------|---------------|---------
|Any | No  | `client/index.html`
|Any | Yes | `server/templates/index.html`

Within your base template file, you will want to locate the `build:js({client,.tmp}) scripts/global.js` comment and add your `<script>` after it. Also, Make sure it is also located before the `endbuild` comment:

```
<!-- base template file -->

<!-- build:js({client,.tmp}) scripts/global.js -->
...
    <script src="/scripts/vendor/thirdparty.js"></script>
    <script src="/bower_components/somescript/thirdparty.js"></script>
...
<!-- endbuild -->
```

This does a couple things:

- Ensures that your libraries get optimized when running `grunt build` (will be minified and concatenated to `scripts/global.js` using [grunt-usemin](https://github.com/yeoman/grunt-usemin))
- Allows you to choose the order in which you load your scripts
- Keeps your global/third-party scripts away from your own code

Your library should now load correctly (assuming your source path is correct).

> IMPORTANT: If your third-party script will be referenced within your own code (ex. using jQuery), you need to make sure that JSHint is aware it. Check out [JSHint giving errors for third-party scripts](#jshint-giving-errors-for-third-party-scripts) to see how to make this happen.


## Deployment
### FTP Server
If you are deploying to an FTP server, you will need to make sure that you fill out the generated `.ftppass` file. It is located in the root folder of your yeogurt project.

This file looks like this:

```
{
    "host": "",
    "serverPath": "/html",
    "key1": {
        "username": "jdoe",
        "password": "jdoe1"
      }
}
```

Fill out the necessary connection information needed to access your FTP server and you should be ready to use the `grunt deploy` command.

For more info on setting up the `.ftppass` file, refer to the [grunt-ftpush](https://github.com/inossidabile/grunt-ftpush) documentation

> IMPORTANT: You will want to test your FTP connection information using an FTP client first (ex. [Filezilla](https://filezilla-project.org/)). This will ensure that you are: a) using the correct information and b) copying files to the correct directory.

## Guides
Check out the [Guides](docs/guides/README.md) section to learn how to integrate other technologies like Ruby Sass

## Common Gotchas
### Bower not installing dependencies using Git
##### Typical error message:
> fatal: unable to connect to github.com: github.com

By default, Bower uses Git to make requests for packages. If Git's request port is blocked, by a corporate VPN or network for example, bower will be unable to  download the necessary/desired packages.

##### Solution
Configure your local Git to use HTTPS instead via the following command:

```
git config --global url."https://".insteadOf git://
```

[Source](http://stackoverflow.com/questions/16298986/unable-to-connect-to-github-com-for-cloning)

### JSHint giving errors for third-party scripts
##### Typical error message:
> Backbone is not defined

When adding third-party scripts, you should always link to them using `<script>` tags within your base template file (See [Adding third-party libraries](#adding-third-party-libraries)). However, doing so does not inform JSHint that your new library is defined globally. Thus, giving you errors.

##### Solution
To remedy this situation, all you need to do is open up your `.jshintrc` file in the root directory of you project, and add your new library name to the `global:` property array:

```
// .jshintrc
{
...
    global: {
        Backbone: true // Tells JSHint that Backbone is defined globally
    }
...
}
```

## Roadmap
Check out the [Roadmap](ROADMAP.md) to see what's coming down the development pipeline.

## Contributing

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

## Release History

See [Changelog](https://github.com/larsonjj/generator-yeogurt/blob/master/CHANGELOG.md)

## License

[MIT License](LICENSE.md) - &copy; Jake Larson
