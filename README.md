<p align="center">
    <img src="https://raw.githubusercontent.com/larsonjj/generator-yeogurt/master/docs/images/logo.png" />
</p>

# Yeogurt Generator [![Build Status](https://secure.travis-ci.org/larsonjj/generator-yeogurt.png?branch=master)](https://travis-ci.org/larsonjj/generator-yeogurt) [![NPM version](https://badge.fury.io/js/generator-yeogurt.png)](http://badge.fury.io/js/generator-yeogurt) [![Coverage Status](https://coveralls.io/repos/larsonjj/generator-yeogurt/badge.png)](https://coveralls.io/r/larsonjj/generator-yeogurt)

A "Choose your own adventure" generator for creating static sites and single page applications. Helps you harness the power of your favorite tools: React + Flux, Backbone, Jade, Swig, Express, Grunt and much more!

# Table of Contents

- [What can I create with Yeogurt?](#what-can-i-create-with-yeogurt)
- [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Usage](#usage)
- [Features](#features)
    - [Included in every project](#included-in-every-project)
    - [Available Options](#available-options)
    - [Static/Server Site Options](#staticserver-site-options)
    - [Single Page Application Options](#single-page-application-options)
    - [Express Server Options](#express-server-options)
    - [Automatic File Injection](#automatic-file-injection)
- [Grunt Workflow](#grunt-workflow)
- [Sub-Generators](#sub-generators)
    - [Default (Can be used on any project)](#default-can-be-used-on-any-project)
    - [Static/Server Sites and Backbone](#static-sites-and-backbone-applications)
    - [React](#react-application)
    - [Backbone](#backbone-application)
- [Automated Documentation](#automated-documentation)
    - [Dashboard](#dashboard)
    - [JavaScript API](#javascript-api)
    - [Styleguide](#styleguide)
- [Adding third-party libraries](#adding-third-party-libraries)
- [Deployment](#deployment)
    - [FTP Server](#ftp-server)
- [Vagrant Setup](#vagrant-setup)
- [Extend Yeogurt](#extend-yeogurt)
- [Common Gotchas](#common-gotchas)
    - [Bower not installing dependencies using Git](#bower-not-installing-dependencies-using-git)
    - [JSHint giving errors for third-party scripts](#jshint-giving-errors-for-third-party-scripts)
    - [`grunt deploy` is not copying files to FTP server](#grunt-deploy-is-not-copying-files-to-ftp-server)
- [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Release History](#release-history)
- [License](#license)

## What can I create with Yeogurt?
- Build out static sites using [Jade](http://jade-lang.com/) or [Swig](http://paularmstrong.github.io/swig/).
- Create Single Page Applications using [Backbone](http://backbonejs.org/) or [React](http://facebook.github.io/react/) + [Flux](http://facebook.github.io/react/docs/flux-overview.html).
- Make your site/app full-stack by adding an [Express](http://expressjs.com/) Server with optional database, cookie session, user authentication, and security support .

Check out the [features](#features) section to see everything this generator has to offer.

## Getting Started
This generator utilizes [Yeoman](http://yeoman.io/), [Grunt](http://gruntjs.com/), and [Bower](http://bower.io/) to Scaffold out projects, automate tasks, and manage front-end dependencies respectively. If this is your first time here, it is recommended you [read about these tools](http://yeoman.io/learning/index.html) before proceeding.

### Installation
There are a few dependencies that this project relies on:

#### Node.js
Check to see if you already have Node installed. Do this by bringing up a terminal/command prompt and type `node -v`. If the response shows a version at or above `v0.10.x`, you are all set and can proceed to installing Yeoman, Grunt, and Bower. If you see an error and/or your version is too low, navigate to the [Node.js](http://nodejs.org/) website and install Node from there.

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

Optionally, you can skip the automated installation of npm and bower packages by passing in `--skip-install`. The main reason to use this is if you have spotty/no internet connection, but would still like to generate your project.

```
yo yeogurt --skip-install
```

Follow all the prompts and choose what suits you most for the project you would like to create. When you finish with all of the prompts, your project scaffold will be created and all dependencies will be installed.

***NOTE: If you used the `--skip-install` option, no dependencies will have been installed. You will need to run `npm install && bower install` in your project's root directory in order to get started running automated tasks***

Now you can run:

- `grunt` for testing and building a production version of your site.
- `grunt serve` for previewing your site/app on a development server.
- `grunt serve:docs` is the same as `grunt serve` but will also re-compile you automated documentation (won't be available if you didn't choose to use any automated documentation).
- `grunt serve:dist` for previewing a production version of your site/app.

You can learn more about what tasks are available in the [grunt tasks](#grunt-workflow) section.

> IMPORTANT: SVN users should choose the 'SVN' version control option when running the generator. Then be sure to run the `svn-init.sh` (Linux, OSX) or `svn-init.bat` (Window) script in order to correctly setup ignores for your project. These scripts will be located in the root of your project folder. It is recommended that you do this before committing any code.

Congratulations! You should now have successfully created a Yeogurt project and are ready to start building out your site/app.


## Features

### Included in every project
- Built in preview server with LiveReload
- [.editorconfig](http://editorconfig.org/) for consistent coding styles within text editors
- Automated build process that includes: compilation of preprocessors (Jade, Sass, etc), minification of CSS and HTML, uglification of Javascript, optimization of images, and processing of [usemin blocks](Usemin blocks)
- [Sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) for JavaScript and Stylesheets (Except Stylus. [Waiting on PR](https://github.com/gruntjs/grunt-contrib-stylus/pull/121))
- IE8+ Support via [HTML5shiv](https://github.com/aFarkas/html5shiv) and [consolelog](https://github.com/patik/console.log-wrapper)
    - [ES5-Shim and ES5-Sham](https://github.com/es-shims/es5-shim) Included for React apps
- JavaScript Linting with [JSHint](http://www.jshint.com/)
- Feature detection with [Modernizr](http://modernizr.com/)

### Available Options

- Project/Site naming
- Default ignores for [Git](http://git-scm.com/) or [SVN](http://subversion.apache.org/)
- Stylesheets with [Less](http://lesscss.org/), [Sass](http://sass-lang.com/) (via [node-sass](https://github.com/andrew/node-sass)), [Stylus](http://learnboost.github.io/stylus/), or CSS
- Modular JavaScript with [RequireJS](http://requirejs.org/) or [Browserify](http://browserify.org/)
- Styleguide - auto-generated styleguide for your stylesheets with [Knyle Style Sheets](http://warpspire.com/posts/kss/)
- JavaScript Documentation - auto-generated API for your scripts with [JSDoc](http://usejsdoc.org/)
- JavaScript unit testing with [Jasmine](http://jasmine.github.io/) or [Mocha](http://visionmedia.github.io/mocha/) + [Chai](http://chaijs.com/)
- Test running with [Karma](http://karma-runner.github.io/0.12/index.html)
- FTP deployment

### Static/Server Site Options
- Markup with [Jade](http://jade-lang.com/) or [Swig](http://paularmstrong.github.io/swig/)
- Dashboard - auto-generated dashboard for your site with [grunt-dashboard](https://github.com/larsonjj/grunt-dashboard)
    - Only available for Static Sites that are not using an Express server

### Single Page Application Options
- Facebook's [React](http://facebook.github.io/react/) with optional [Flux](http://facebook.github.io/react/docs/flux-overview.html) architecture

> IMPORTANT: You can only use Browserify with React (no RequireJS or Vanilla JS support)

- Backbone with [Jade](http://jade-lang.com/), [Handlebars](http://handlebarsjs.com/), or [Lo-dash](http://lodash.com/) templating

### Express Server Options

- Database support for:
    - [MySQL](http://www.mysql.com/), [PostgreSQL](http://www.postgresql.org/) using [Sequelize](http://sequelizejs.com/)
    - [MongoDB](http://www.mongodb.org/) using [Mongoose](http://mongoosejs.com/)
- Cookie Session Storage with [express-session](https://github.com/expressjs/session)
- Security with Paypal's [Lusca](https://github.com/krakenjs/lusca) module
- User authentication (Email & Password) using [Passport](http://passportjs.org/)
- [JSON Web Token](http://jwt.io/) authentication support
    - Only for Single Page Applications
- Jade, Swig server-side template rendering
    - Only for Static/Server sites (i.e. not Backbone or React)

### Automatic File Injection
A grunt task, using the [grunt-injector](https://www.npmjs.org/package/grunt-injector) plugin, looks for new/updated files in your project and automatically injects imports/includes in the appropriate places based on an injection block.

Example injection blocks:

|Filetype(s) | Start Injection Block| End Injection Block
|------------|----------------|-----
|Sass,Scss,Less,Stylus | ```// [injector]```| ```// [endinjector]```
|Jade | ```//- [injector:jade]```| ```//- [endinjector]```
|Swig | ```{# [injector:swig] #}```| ```{# [endinjector] #}```
|HTML(JS) | ```<!-- [injector:js] -->```| ```<!-- [endinjector] -->```
|HTML(CSS) | ```<!-- [injector:css] -->```| ```<!-- [endinjector] -->```

Files to be injected into:

|Filetype(s) |Project Type |Static/Single Page Application File to be injected into
|---------|---------------|---------
|Less| Any | `client/styles/main.less`
|Sass | Any | `client/styles/main.scss`
|Stylus | Any | `client/styles/main.styl`
|Jade | Static/Server Site | `client/templates/layouts/base.jade` or `server/templates/layouts/base.jade` if using express server
|Swig | Static/Server Site |`client/templates/layouts/base.swig` or `server/templates/layouts/base.swig` if using express server
|CSS, JS | Static/Server Site | `client/templates/layouts/base.{jade,swig}` or `server/templates/layouts/base.{jade,swig}` if using express server
|CSS, JS | Single Page Application | `client/index.html`


## Grunt Workflow

### `grunt`
Runs both [`grunt test`](#grunt-test) and [`grunt build`](#grunt-build).

### `grunt serve`
Starts up a development server that watches files and automatically reloads them to the browser when a change is detected.

**Extra Task Target(s)**

|Tasks| Description
|---------|-------
|grunt serve:docs| same as [`grunt serve`](#grunt-serve), but will also watch and recompile automated documentation (KSS, JSDoc, etc).
|grunt serve:dist| runs [`grunt build`](#grunt-build) and starts up a server that loads the optimized files

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
Runs [`grunt build`](#grunt-build) and pushes optimized files to a specified FTP server. (only available if FTP deployment is chosen when generating project)

***NOTE: [FTP server](#ftp-server) info is specified in the `.ftppass` file in the root of your project)***

## Sub-Generators

#### Default (Can be used on any project)
* [yeogurt:script](#script)
* [yeogurt:style](#style)

#### Static/Server Sites
* [yeogurt:template](#template)

#### React application
* [yeogurt:react](#react)
* [yeogurt:flux](#flux)

#### Backbone application
* [yeogurt:view](#view)
* [yeogurt:template](#view-template)
* [yeogurt:model](#model)
* [yeogurt:collection](#collection)

***Note: Generators need to be run from the root directory of your app.***

## Default Generators
***Note: (The following sub-generators can be used with any type of project)***

### Script
Creates a new module script.

Example:

```
$ yo yeogurt:script myscript
? Where would you like to create this script?: client/scripts
? Where would you like to create this script's test?: test/spec
```

Produces:

```
client/scripts/myscript.js
test/spec/myscript.spec.js
```

### Style
Create a new stylesheet.

Example:

```
yo yeogurt:style mystyle
? Where would you like to create this stylesheet?: client/styles
```

Produces:

```
client/styles/_mystyle.scss
```

## Static/Server Site
***Note: (The following sub-generators cannot be used with React or Backbone applications)***

### Template

Creates a jade or swig file in the `client` folder (or `server` folder if using an Express server).

Examples:

```
yo yeogurt:template mytemplate

# Page
? What type of template do you want to create?: Page
? What template you you like to extend from?: layouts/base

# Layout
? What type of template do you want to create?: Layout
? Where would you like to create this template?: {client,server}/templates/layouts

# Module
? What type of template do you want to create?: Module
? Where would you like to create this template?: {client,server}/templates/modules
```

Produces:

```
# Page
{client,server}/templates/mytemplate.{jade,swig}

# Layout
{client,server}/templates/layouts/mytemplate.{jade,swig}

# Module
{client,server}/templates/modules/mytemplate.{jade,swig}
```

***NOTE: `{client,server}` means that the template file will be created in the `client` folder, or in the `server` folder if using an Express server. In the same way, {jade,swig} means that the file extension will match the template engine you are using***

## React Sub-generators
***Note: (The following sub-generators can only be used with React applications)***

### React

Creates React JSX Component File.

Example:

```
yo yeogurt:react mycomponent
? Where would you like to create this react component?: client/scripts/components
? Where would you like to create this react component's test?: test/spec/components
```

Produces:

```
client/scripts/components/mycomponent.jsx
test/spec/components/mycomponent.spec.js
```

### Flux

Creates Flux files:

Example:

```
yo yeogurt:flux myflux
? Where would you like to create flux files?: client/scripts
? Where would you like to create flux file tests?: test/spec
```

Produces:

```
client/scripts/flux/constants/myflux.js
client/scripts/flux/actions/myflux.js
client/scripts/flux/stores/myflux.js
test/spec/flux/constants/myflux.spec.js
test/spec/flux/actions/myflux.spec.js
test/spec/flux/stores/myflux.spec.js
```

## Backbone Sub-generators
***Note: (The following sub-generators can only be used with Backbone applications)***

### View
Creates a Backbone view along with a corresponding template:

Example:

```
yo yeogurt:view myview
? Where would you like to create this view?: client/scripts/views
? Where would you like to create this view's template?: client/templates
? Where would you like to create this view's test?: test/spec/views
```

Produces:

```
client/scripts/views/myview.js
client/templates/myview.{jst,hbs,jade}
test/spec/views/myview.spec.js
```

***NOTE: `{jst,hbs,jade}` means that the file extension will match the template engine you chose: `underscore, handlebars, or jade` respectively***

### View Template
Creates a new template file (Jade, Handlebars, or Lo-dash depending on which you chose).

Example:

```
yo yeogurt:template mytemplate
? Where would you like to create this template?: client/templates
```

Produces:

```
client/templates/mytemplate.{jst,hbs,jade}
```

***NOTE: `{jst,hbs,jade}` means that the file extension will match the template engine you chose: `lo-dash, handlebars, or jade` respectively***

### Model

Creates a Backbone model.

Example:

```
yo yeogurt:model mymodel
? Where would you like to create this model?: client/scripts/models
? Where would you like to create this model's test?: test/spec/models
```

Produces:

```
client/scripts/models/mymodel.js
test/spec/models/mymodel.spec.js
```

### Collection

Creates a Backbone collection file with the ability to specify which Backbone model to use.

Example:

```
yo yeogurt:model mycollection
? Where would you like to create this collection?: client/scripts/collections
? What is the name of the model you would like to use with this collection?: mycollection-model
? What folder is the model file located in?: client/scripts/models
? Where would you like to create this collection's test?: test/spec/collections
```

Produces:

```
client/scripts/collections/mycollection.js
test/spec/collections/mycollection.spec.js
```

## Automated Documentation
### Dashboard
***NOTE: Only available for static sites***

If you chose to create a Dashboard, a dashboard will be automatically generated from reading your Jade/Swig files. After running `grunt serve` or `grunt serve:dist`, it can be accessed at `/docs/dashboard/index.html`.

For more information and usage, please refer to the `grunt-dashboard` plugin [documentation](https://github.com/larsonjj/grunt-dashboard).

### JavaScript API
If you chose to use [JSDoc](http://usejsdoc.org/), JavaScript API documentation will be automatically generated from reading your script files. After running `grunt serve` or `grunt serve:dist`, it can be accessed at `/docs/api/index.html`.

You can view an example [here](http://yeoman.github.io/generator/).

### Styleguide
If you chose to use [KSS (Knyle Style Sheets)](http://warpspire.com/posts/kss/), a Styleguide will be automatically generated from reading your Less/Sass/Stylus/CSS files. After running `grunt serve` or `grunt serve:dist`, it can be accessed at `/docs/styleguide/index.html`.

Knyle Style Sheets (KSS) is used at Github to create their [styleguide](https://github.com/styleguide) and is used in this generator via [kss-node](https://github.com/hughsk/kss-node). Be sure to look up [documentation](http://warpspire.com/posts/kss/) to see how to write KSS comments in your stylesheets.

## Adding third-party libraries
Odds are that you will need to add some third party libraries to your project at some point. To do so, it is strongly recommended that you install them using bower ([usage](http://bower.io/)):

```
bower install [package name] --save
```

Once installed, take a look at your base template and you will notice the following comments:

```
<!-- bower:js -->
<!-- endbower -->

<!-- bower:css -->
<!-- endbower -->
```

These comments will ensure all libraries and their dependencies found in your `bower.json` file are correctly ordered and injected into your base template file via [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep). Then you are all set, no need to worry about linking your libraries manually.

If you can't [find the package on bower](http://bower.io/search/) (very rare), or you have your own in-house libraries that you like to use, then you should:

- Put your scripts within a `client/scripts/vendor` folder (jshint is setup to ignore this folder)
- Put your stylesheets within a `client/styles/vendor` folder (to keep things consistant)
- Place all other file types somewhere within the `client` folder (This will make sure that your base template can access them).

If you decided to remove `<!-- bower:js -->` and/or `<!-- bower:css -->` comments from your base template (i.e. not use grunt-wiredep) and have your new library installed, you will want to add it to your project. To do this, you'll need to add a new `<script>` or `<link>` tag to your base template file:

***Static/Server Sites***

|Template Type | Server? | Base Template Location
|---------|---------------|---------
|Jade | No  | `client/templates/layouts/base.jade`
|Jade | Yes | `server/templates/layouts/base.jade`
|Swig | No |`client/templates/layouts/base.swig`
|Swig | Yes | `server/templates/layouts/base.swig`

***Single Page Applications***

|Library/Framework | Server? | Base Template Location
|---------|---------------|---------
|Any | No  | `client/index.html`
|Any | Yes | `client/index.html`

Within your base template file, you will want to locate the `build:js(client) scripts/global.js` comment for scripts and the `build:css(client) styles/global.css` comment for styles. Once located, add your `<script>` or `<link>` after the comment and make sure it is also located before the `endbuild` comment:

***Styles***
```
<!-- build:css(client) styles/global.css -->
...
    <link href="/styles/vendor/thirdparty.css"></script>
...
<!-- endbuild -->
```

***Scripts***
```
<!-- build:js(client) scripts/global.js -->
...
    <script src="/scripts/vendor/thirdparty.js"></script>
    <script src="/bower_components/somescript/thirdparty.js"></script>
...
<!-- endbuild -->
```

This does a couple things:

- Ensures that your libraries get optimized when running `grunt build` (will be minified and concatenated to `scripts/global.js` for scripts and `styles/global.css` for styles using [grunt-usemin](https://github.com/yeoman/grunt-usemin))
- Allows you to choose the order in which you load your scripts and stylesheets
- Keeps your global/third-party scripts and stylesheets away from your own code

Your library should now load correctly (assuming your source path is correct).

> IMPORTANT: If you have third-party script that will be referenced within your own code (ex. using jQuery), you need to make sure that JSHint is aware it. Check out [JSHint giving errors for third-party scripts](#jshint-giving-errors-for-third-party-scripts) to see how to make this happen.

## Deployment
### FTP Server
If you are deploying to an FTP (not SFTP) server, you will need to make sure that you fill out the generated `.ftppass` file. It is located in the root folder of your Yeogurt project.

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

> IMPORTANT: You will want to test your FTP connection information using an FTP client first (ex. [Filezilla](https://filezilla-project.org/)). This will ensure that you are: a) using the correct connection information and b) copying files to the correct directory.

## Vagrant Setup
If you would like to use Yeogurt with [Vagrant](https://www.vagrantup.com/), head over to the [yeogurt-vagrant](https://github.com/larsonjj/yeogurt-vagrant) repository for installation and setup instructions.

## Extend Yeogurt
Check out the [Guides](docs/guides/README.md) section to learn how to integrate other technologies like Ruby Sass, Bootstrap, Animate.css, etc

## Common Issues
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
    globals: {
        Backbone: true // Tells JSHint that Backbone is defined globally
    }
...
}
```

### `grunt deploy` is not copying files to FTP server

`grunt deploy` runs the [grunt-ftpush](https://github.com/inossidabile/grunt-ftpush) plugin. This plugin tries to cache files that have been transferred to an FTP server (even if there is an error). The cache is stored in the `.grunt` folder at the root of the project.

##### Solution
Delete the `.grunt` folder. Once this folder is deleted, it will remove the FTP cache and should now allow you to do a full FTP transfer using `grunt deploy`.

## Testing
To run unit tests, you have a couple options:

- `npm test`: This will run all unit tests with Mocha and send the report to [coveralls.io](http://coveralls.io) to be processed. (Don't run this for local testing)
- `npm run localtest`: This is the same as `npm test` only it doesn't send anything to coveralls.io. (Use this for local testing)
- `npm run localtest-report`: This is the same as `npm run localtest`, but it also generates an HTML report of the current code coverage.

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
