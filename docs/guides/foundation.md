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

Locate your base template with the following table:

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

Once you have located the base template file for your project, navigate to the `<!-- build:js(client) scripts/global.js -->` comment and add the needed script:

```html
<!-- build:js(client) scripts/global.js -->
...
<!-- Place under jQuery -->
<script src="/bower_components/foundation/js/vendor/fastclick.js"></script>
<script src="/bower_components/foundation/js/foundation.js"></script>
...
<!-- endbuild -->
```

Now, navigate to the `<!-- build:css(client) styles/global.css -->` comment and add the needed stylesheet:

```html
<!-- build:css(client) styles/global.css -->
...
<link rel="stylesheet" type="text/css" href="/bower_components/foundation/css/normalize.css">
<link rel="stylesheet" type="text/css" href="/bower_components/foundation/css/foundation.css">
...
<!-- endbuild -->
```

### 3. Initialize Foundation JavaScript

Foundation javascript doesn't automatically initialize itself, so you will need to add the following snippet to the end of your `client/scripts/app.js` file:

```
$(document).foundation();
```

## Usage
After following all of the above steps, you should be all set. Start up your development server with `grunt serve` and begin building with Foundation.
