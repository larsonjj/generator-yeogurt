# Installing Underscore
Note a fan or [Lo-dash](http://lodash.com/)? Want to use [Underscore](http://underscorejs.org/)? Follow this guide to get up and running with it quickly.

## Steps

### 1. Install Underscore library
From the root of you project folder, open up a terminal/command prompt and run:

```
bower install underscore --save
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

Once you have located the base template file for your project, navigate to the `<!-- build:js(client) scripts/global.js -->` comment and make the following changes:

```diff
<!-- build:js(client) scripts/global.js -->
...
// Remove lo-dash if it's there
-    <script src="/bower_components/lodash/dist/lodash.js"></script>
+    <script type="text/javascript" src="/bower_components/underscore.string/dist/underscore.string.min.js"></script>
...
<!-- endbuild -->
```

## Usage
After following all of the above steps, you should be all set. Start up your development server with `grunt serve` and begin building with Underscore.
