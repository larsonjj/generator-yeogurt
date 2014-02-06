<img src="http://i.imgur.com/obNKseX.png" />

# Yeogurt Generator [![Build Status](https://secure.travis-ci.org/larsonjj/generator-yeogurt.png?branch=master)](https://travis-ci.org/larsonjj/generator-yeogurt) [![NPM version](https://badge.fury.io/js/generator-yeogurt.png)](http://badge.fury.io/js/generator-yeogurt)

A [Yeoman](http://yeoman.io) generator for creating a sensible structure to client-based work.


## Getting Started

- First off, You will need to have [Node.js](http://nodejs.org/) `>= 0.10` installed. <br>
- Be sure to install yeoman of course! `npm install -g yo` <br>
- Install the generator: `npm install -g generator-yeogurt` <br>
- Run the generator: `yo yeogurt`

## Features

**Available Scaffolding Options:**

- Project/Site naming
- CSS Preprocessing with [LESS](http://lesscss.org/) or [Sass](http://sass-lang.com/)
- Modular JavaScript with [RequireJS](http://requirejs.org/) or [Browserify](http://browserify.org/)
- IE8+ Support via [HTML5shiv](https://github.com/aFarkas/html5shiv) and [RespondJS](https://github.com/scottjehl/Respond)
- JavaScript Linting with [JSHint](http://www.jshint.com/)
- Default ignores for [Git](http://git-scm.com/) or [SVN](http://subversion.apache.org/)
- Build deployment to FTP server

**Included by default:**

- Template inspiration from [HTML5 Boilerplate](http://html5boilerplate.com/)
- [Jade](http://jade-lang.com/) markup templating
- Feature detection with [Modernizr](http://modernizr.com/)
- Built in preview server with LiveReload
- [.editorconfig](http://editorconfig.org/) for consistent coding styles within text editors
- JavaScript unit testing with [Mocha](http://visionmedia.github.io/mocha/), [Chai](http://chaijs.com/), and [PhantomJS](http://phantomjs.org/)
- Automatic build process that includes concatenation, image optimization, CSS and HTML minification, and JS uglification.
- Dynamic Dashboard - auto-generated dashboard for your site (focused on client-based work)
- [Sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) for both JavaScript and Sass/LESS

## Grunt Tasks
- `grunt server`<br>
Starts up a development server that watches for local file changes and automatically reloads them to the browser.

- `grunt test`<br>
Runs JSHint and Mocha to lint and unit test JavaScript, respectively.

- `grunt build`<br>
Builds out an optimised site through minification of CSS and HTML, as well as  uglification and optimisation(RequireJS) of Javascript.

- `grunt zip`<br>
Runs `grunt build` and compresses the entire site to a ZIP file

- `grunt deploy`<br>
Runs `grunt zip` and pushes both production-ready files and zip file to a specified FTP server

## Dynamic Dashboard
Here is what the dashboard looks like when you run `grunt server`:<br>
![](http://i.imgur.com/yW4QC3e.png =650x)

It is 'dynamic' because it is generated at compile time using comments placed at the top of development files. An example of these comments in a template file is as follows:

```
//- Dashboard Data
    !##
    {
        "status": "development",
        "blocks": [
            {"blockName": "content", "width": "100px", "height": "100px", "bgcolor": "#9d9d9d", "textColor": "#fff", "fontSize": "10px"}
        ]
    }
    ##!
```
For Jade pages, components, templates, and modules, these comments create the ability to pass data directly to the dashboard. In the above code example, we are setting a template file's status to be in 'development' and are adding a content block with a name of 'content' and a couple of CSS properties


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/larsonjj/generator-yeogurt/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

