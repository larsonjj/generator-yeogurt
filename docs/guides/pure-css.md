# Installing Pure.css
Want to use [Pure.css](http://purecss.io/)? Follow this guide to get up and running with it quickly.

## Steps

### 1. Install Pure.css library
From the root of you project folder, open up a terminal/command prompt and run:

```
bower install pure --save
```

This will download the library, place it in the `client/bower_components` folder, and save a reference to it in your `bower.json` file.

### 2. Add library to your base template

#### Using default dependency injection via [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)

No futher action is required. Note that the pure.css library will be automatically injected into your base template between the `<!-- bower:css -->` and `<!-- endbower -->` comments

#### Without dependency injection

If you decided to not use the `<!-- bower:css -->` comments to auto-inject your bower dependencies via [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep), then follow the steps below.

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
|Any | Yes | `client/index.html`

Once you have located the base template file for your project, navigate to the `<!-- build:css(client) styles/global.css -->` comment and add the needed script:

```html
<!-- build:css(client) styles/global.css -->
...
<link rel="stylesheet" type="text/css" href="/bower_components/pure/pure-min.css">
...
<!-- endbuild -->
```


## Usage
After following all of the steps outlined above, you should be all set. Start up your development server with `grunt serve` and begin building with Pure.css.
