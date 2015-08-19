# Styles

This "Styles" folder is designated for all of your global javascript files.
The key file in this folder is `main` as it is designated as your bootstrapping file (intializes/imports all your stylesheets) and is included in the `base.jade` file

## Adding third-party stylesheet libraries
Odds are that you will need to add some third party libraries to your project at some point. 
To do so, it is strongly recommended that you install them using [NPM](http://npmjs.com/):

```
npm install [package name] --save
```

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

#### Using Bower

Check out the instructions for using bower on the [Yeogurt README](https://github.com/larsonjj/generator-yeogurt#using-bower)
