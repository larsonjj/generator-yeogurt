# Installing Foundation
Want to use [Foundation](http://foundation.zurb.com/)? Follow this guide to get up and running with it quickly.

## Steps

### 1. Install Foundation CSS Framework
From the root of you project folder, open up a terminal/command prompt and run:

```
bower install foundation --save
```

This will download the library and place it in the `client/bower_components` folder

### 2. Add library to your base template

#### Using CSS, Less, or Stylus
##### Using default dependency injection via [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)

No futher action is required. Note that the foundation css will be automatically injected into your base template between the `<!-- bower:css -->` and `<!-- endbower -->` comments and the foundation javascript will be injected between the `<!-- bower:js -->` and `<!-- endbower -->` comments

##### Without dependency injection

If you decided to not use the `<!-- bower:css -->` or `<!-- bower:js -->` comments to auto-inject your bower dependencies via [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep), then follow the steps below.

Next, [Locate your base template](#locate-base-template)

Once you have located the base template file for your project, navigate to the `<!-- build:js(client) scripts/global.js -->` comment and add the needed script:

```html
<!-- build:js(client) scripts/global.js -->
...
<!-- Place under jQuery -->
<script src="/bower_components/foundation/js/vendor/fastclick.js"></script>
<script src="/bower_components/jquery.cookie/jquery.cookie.js"></script>
<script src="/bower_components/jquery-placeholder/jquery.placeholder.js"></script>
<script src="/bower_components/foundation/js/foundation.js"></script>
...
<!-- endbuild -->
```

Now, navigate to the `<!-- build:css(client) styles/global.css -->` comment and add the needed stylesheet:

```html
<!-- build:css(client) styles/global.css -->
...
<link rel="stylesheet" type="text/css" href="/bower_components/foundation/css/foundation.css">
...
<!-- endbuild -->
```

#### Using Sass/Scss
##### Using default dependency injection via [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)

Add foundation to your exclude list within the `grunt/config/util/wiredep.js` 'app' task:

```
// packages to ignore
exclude: [
  ...
  'bower_components/foundation/css'
  ...
],
```

You will also need to add the neccessary @import to your main stylesheet (`grunt-wiredep` does not seem to detect the foundation library for `scss`):

```
// sass
@import ../bower_components/foundation/scss/foundation.scss

// scss
@import "../bower_components/foundation/scss/foundation.scss";
```

Note that the foundation javascript will be automatically injected into your base template being injected between the `<!-- bower:js -->` and `<!-- endbower -->` comments

##### Without dependency injection

If you decided to not use the `// bower:scss` or `<!-- bower:js -->` comments to auto-inject your bower dependencies via [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep), then follow the steps below.

Locate your base stylesheet @ `client/styles/main.{scss/sass}`

Once you have located the base stylesheet file for your project, add the needed `@import` statement:

```
// sass
@import ../bower_components/foundation/scss/foundation.scss

// scss
@import "../bower_components/foundation/scss/foundation.scss";
```

Next, [Locate your base template](#locate-base-template)

Once you have located the base template file for your project, navigate to the `<!-- build:js(client) scripts/global.js -->` comment and add the needed script:

```html
<!-- build:js(client) scripts/global.js -->
...
<!-- Place under jQuery -->
<script src="/bower_components/foundation/js/vendor/fastclick.js"></script>
<script src="/bower_components/jquery.cookie/jquery.cookie.js"></script>
<script src="/bower_components/jquery-placeholder/jquery.placeholder.js"></script>
<script src="/bower_components/foundation/js/foundation.js"></script>
...
<!-- endbuild -->
```


### 3. Initialize Foundation JavaScript

Foundation javascript doesn't automatically initialize itself, so you will need to add the following snippet to the end of your `client/scripts/main.js` file:

```
$(document).foundation();
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
After following all of the above steps, you should be all set. Start up your development server with `grunt serve` and begin building with Foundation.
