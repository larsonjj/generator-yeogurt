# Installing Lo-dash
Note a fan or [underscore](http://underscorejs.org/)? Want to use [Lo-dash](http://lodash.com/)? Follow this guide to get up and running with it quickly.

## Steps

### 1. Install lodash library
From the root of you project folder, open up a terminal/command prompt and run:

```
bower install lodash --save
```

This will download the library, place it in the `client/bower_components` folder, and save a reference to it in your `bower.json` file.

### 2. Add library to your base template

#### Using default dependency injection via [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)

You will need to inform the grunt-wiredep task about which Lo-dash build you would like to use (I prefer the lodash.underscore build). To do this:

- Open up the `grunt/config/util/wiredep.js` file
- Add the following to the `overrides` object:

```
'lodash': {
  'main': 'lodash.underscore.js'
}
```

No futher action is required. Note that the Lo-dash library will be automatically injected into your base template between the `<!-- bower:js -->` and `<!-- endbower -->` comments

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
<script type="text/javascript" src="/bower_components/lodash/dist/lodash.underscore.js"></script>
...
<!-- endbuild -->
```

## Usage
After following all of the above steps, you should be all set. Start up your development server with `grunt serve` and begin building with lodash.
