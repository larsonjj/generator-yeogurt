// Iterate over "vendor" key in configuration object
// Dynamically builds inputs and outputs for for Grunt tasks
// Ex: { '.tmp/scripts/global.js': [ 'node_modules/jquery/dist/jquery.js' ] }
var vendorLoader = function vendorLoader(dir, config, type) {
  var fileObj = {};
  var typeDir;
  if (config.vendor) {
    for (var key in config.vendor) {
      // output file(s) to directory that maps to current vendor key
      typeDir = config.directories[key] ? '/' + config.directories[key].replace(/^_/, '') + '/' : '/';
      for (var file in config.vendor[key]) {
        if (!type || type === key) {
          fileObj[config.directories[dir] +
          typeDir +
          config.vendor[key][file].output] = config.vendor[key][file].input;
        }
      }
    }
  }
  return fileObj;
};

module.exports = vendorLoader;
