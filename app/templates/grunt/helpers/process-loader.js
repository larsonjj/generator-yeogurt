// Iterate over "process" key in configuration object
// Dynamically builds inputs and outputs for for Grunt tasks
// Ex: { '.tmp/scripts/vendor.js': [ 'node_modules/jquery/dist/jquery.js' ] }
var processLoader = function processLoader(dir, config, type) {
  var fileObj = {};
  var typeDir;
  if (config.process) {
    for (var key in config.process) {
      // output file(s) to directory that maps to current process key
      typeDir = config.directories[key] ? '/' + config.directories[key].replace(/^_/, '') + '/' : '/';
      for (var file in config.process[key]) {
        if (!type || type === key) {
          fileObj[config.directories[dir] +
          typeDir +
          config.process[key][file].output] = config.process[key][file].input;
        }
      }
    }
  }
  return fileObj;
};

module.exports = processLoader;
