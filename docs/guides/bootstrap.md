# Installing Bootstrap
Want to use [Bootstrap](http://getbootstrap.com/)? Follow this guide to get up and running with it quickly.

## Steps

### 1. Install Bootstrap CSS Framework
From the root of you project folder, open up a terminal/command prompt and run:

```
// less/css
bower install bootstrap --save

// sass/scss
bower install bootstrap-sass-official --save

// stylus
bower install bootstrap-stylus --save
```

This will download the library and place it in the `client/bower_components` folder

### 2. Add library to your base template/stylesheet

#### Using CSS

##### Using default dependency injection via [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)

No futher action is required. Note that the bootstrap css will be automatically injected into your base template between the `<!-- bower:css -->` and `<!-- endbower -->` comments with the bootstrap javascript being injected between the `<!-- bower:js -->` and `<!-- endbower -->` comments

##### Without dependency injection

If you decided to not use the `<!-- bower:css -->` or `<!-- bower:js -->` comments to auto-inject your bower dependencies via [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep), then follow the steps below.

Next, [Locate your base template](#locate-base-template)

Once you have located the base template file for your project, navigate to the `<!-- build:js(client) scripts/global.js -->` comment and add the needed script:

```html
<!-- build:js(client) scripts/global.js -->
...
<script src="/bower_components/bootstrap/dist/js/bootstrap.js"></script>
...
<!-- endbuild -->
```

Now, navigate to the `<!-- build:css(client) styles/global.css -->` comment and add the needed stylesheet:

```html
<!-- build:css(client) styles/global.css -->
...
<link rel="stylesheet" type="text/css" href="/bower_components/bootstrap/dist/css/bootstrap.css">
...
<!-- endbuild -->
```

#### Using Sass/Scss, Less, or Stylus
##### Using default dependency injection via [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)

Locate your base stylesheet @ `client/styles/main.{less,scss/sass,styl}`

Once you have located the base stylesheet file for your project, add the needed `$icon-font-path` statement:

```
// sass/scss (must be placed above the @import)
$icon-font-path: "../bower_components/bootstrap-sass-official/fonts/bootstrap/"

// less (must be placed below @import)
@icon-font-path: "../bower_components/bootstrap/fonts/";

// stylus
$icon-font-path = "../bower_components/bootstrap-stylus/fonts/";
```

***For Less only***
Add bootstrap to your exclude list within the `grunt/config/util/wiredep.js` 'app' task:

```
// packages to ignore
exclude: [
  ...
  // less
  'bower_components/bootstrap/dist/css'
  ...
],
```

***For Stylus only***
`grunt-wiredep` is not "smart" enough to read the `bootstrap-stylus` directory, so you will need to explicitly tell it where the files are that you need. To override bower package that contains the needed boostrap files, add the following to your `bower.json` file:

```
"overrides": {
  "bootstrap-stylus": {
    "main": [
      "bootstrap/variables.styl",
      "bootstrap/utilities.styl",
      "bootstrap/buttons.styl",
      "bootstrap/scaffolding.styl",
      "bootstrap/mixins/*.styl",
      "bootstrap/**/!(variables|utilities|buttons|scaffolding).styl",
      "js/**/!(popover.js)",
      "js/popover.js"
    ]
  }
}
```

Note that the bootstrap imports will be automatically injected into your base stylesheet between the `// bower:{less,styl,sass/scss}` and `// endbower` comments with the bootstrap javascript being injected between the `<!-- bower:js -->` and `<!-- endbower -->` comments

##### Without dependency injection

If you decided to not use the `// bower:{less,stylus,sass/scss}` comments to auto-inject your bower dependencies via [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep), then follow the steps below.

Locate your base stylesheet @ `client/styles/main.{less,scss/sass,styl}`

Once you have located the base stylesheet file for your project, add the needed `@import` statement:

```
// sass
@import ../bower_components/bootstrap-sass-official/stylesheets/_bootstrap.scss

// scss
@import "../bower_components/bootstrap-sass-official/stylesheets/_bootstrap.scss";

// less
@import "../bower_components/bootstrap/less/bootstrap.less";

// stylus
@import "../bower_components/bootstrap-stylus/bootstrap";
```

Next, [Locate your base template](#locate-base-template)

Once you have located the base template file for your project, navigate to the `<!-- build:js(client) scripts/global.js -->` comment and add the needed script:

```html
<!-- build:js(client) scripts/global.js -->
...
<!-- Less -->
<script src="/bower_components/bootstrap/dist/js/bootstrap.js"></script>

<!-- Sass/Scss -->
<script src="/bower_components/bootstrap-sass-official/javascripts/bootstrap.js"></script>

<!-- Stylus -->
<script src="/bower_components/bootstrap-stylus/javascripts/affix.js"></script>
<script src="/bower_components/bootstrap-stylus/javascripts/alert.js"></script>
<script src="/bower_components/bootstrap-stylus/javascripts/button.js"></script>
<script src="/bower_components/bootstrap-stylus/javascripts/carousel.js"></script>
<script src="/bower_components/bootstrap-stylus/javascripts/collapse.js"></script>
<script src="/bower_components/bootstrap-stylus/javascripts/dropdown.js"></script>
<script src="/bower_components/bootstrap-stylus/javascripts/modal.js"></script>
<script src="/bower_components/bootstrap-stylus/javascripts/popover.js"></script>
<script src="/bower_components/bootstrap-stylus/javascripts/scrollspy.js"></script>
<script src="/bower_components/bootstrap-stylus/javascripts/tab.js"></script>
<script src="/bower_components/bootstrap-stylus/javascripts/tooltip.js"></script>
<script src="/bower_components/bootstrap-stylus/javascripts/transition.js"></script>
...
<!-- endbuild -->
```

### 3. Handle fonts

Bootstrap comes bundled with glyphicons, which are font files. If you want to use them, you will need to make sure that they correctly get copied over during the `grunt build` process. You can easily do this by adding the following to the `grunt/config/util/copy.js` file:

```
// Locate the 'src' property and add the following string
src: [
  ...
  // scss/sass
  'bower_components/bootstrap-sass-official/**/*.{woff,ttf,eot,svg}'

  // less/css
  'bower_components/bootstrap/**/*.{woff,ttf,eot,svg}'

  // stylus
  'bower_components/bootstrap-stylus/**/*.{woff,ttf,eot,svg}'
  ...
]
```

## Locate Base Template

Find your base template with the following table:

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
|Any | Yes | `client/index.html`

## Usage
After following all of the above steps, you should be all set. Start up your development server with `grunt serve` and begin building with Bootstrap.
