# Scripts

This "Scripts" folder is designated for all of your global stylesheet files.
The key file in this folder is `main.js` as it is designated as your bootstrapping file (intializes all your scripts) and is included in the `base.jade` file

By default, ES6/2015 features are enabled in your scripts by using [Babel](https://babeljs.io)

## Adding third-party script libraries
Odds are that you will need to add some third party libraries to your project at some point. 
To do so, it is strongly recommended that you install them using [NPM](http://npmjs.com/):

```
npm install [package name] --save
```

Once installed, you can access scripts within your JavaScript files like so:

```js
// Example using jquery

// ES5
var $ = require('jquery');

$(function() {
  console.log('Hello');
});

// ES6
import $ from 'jquery';

$(() => {
  console.log('Hello');
});
```

#### Using Non-CommonJS modules with browserify-shim

Sometimes you need to use libraries that attach themselves to the window object and don't work with browserify very well.
In this case, you can use a transform called [browserify-shim](https://github.com/thlorenz/browserify-shim).

***Step 1: Install browserify-shim transform for browserify***

Browserify doesn't support Non-CommonJS scripts out of the box (jQuery plugins, window.* libs, etc), but you can install a transform called 'browserify-shim' to remedy that:

```
npm install --save-dev browserify-shim
```

***Step 2: Install desired npm package***

Now you can install your desired npm package:

```
// Example: jQuery plugin

npm install --save slick-carousel
```

***Step 3: Setup browserify-shim***

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

***Step 4: Import file to your project***

Now you can include your desired module/lib within your `src/_scripts/main.js` file:

```js
// ES5
require('slick-carousel');

// ES6
import 'slick-carousel';

...

$('#someId').slick(); // Activates slick plugin
```

#### Using Bower

Check out the instructions for using bower on the [Yeogurt README](https://github.com/larsonjj/generator-yeogurt#using-bower)
