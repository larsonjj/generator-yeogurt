# Installing Underscore.string
Want to use [Underscore.string](http://daneden.github.io/Underscore.string/)? Follow this guide to get up and running with it quickly.

## Steps

### 1. Install Underscore.string library
From the root of you project folder, open up a terminal/command prompt and run:

```
bower install underscore.string --save
```

This will download the library, place it in the `client/bower_components` folder, and save a reference to it in your `bower.json` file.

### 2. Add library to your base template

#### Using default dependency injection via [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)

No futher action is required. Note that the Underscore.string library will be automatically injected into your base template between the `<!-- bower:js -->` and `<!-- endbower -->` comments

#### Without dependency injection

If you decided to not use the `<!-- bower:js -->` comments to auto-inject your bower dependencies via [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep), then follow the steps below.

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

Once you have located the base template file for your project, navigate to the `<!-- build:js(client) scripts/global.js -->` comment and add the needed script:

```html
<!-- build:js(client) scripts/global.js -->
...
<script type="text/javascript" src="/bower_components/underscore.string/dist/underscore.string.min.js"></script>
...
<!-- endbuild -->
```


## Usage
After following all of the steps outlined above, you should be all set. Start up your development server with `grunt serve` and begin building with Underscore.string.


## Extras

### Using with Underscore or Lo-dash
If you would like to use Underscore.string with [Underscore](http://underscorejs.org/) or [Lo-dash](http://lodash.com/) to gain [chaining ability](https://github.com/epeli/underscore.string#underscorestring-), just add the following to your base template `<!-- build:js(client) scripts/global.js -->` comments:

```html
<!-- build:js(client) scripts/global.js -->
...
// Place under the `<!-- endbower -->` cooment and both the Underscore/Lo-dash and Underscore.string scripts
<script type="text/javascript">
  _.mixin(_.string.exports());
</script>
...
```
