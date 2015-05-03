// Iterate over "vendor" key in configuration object
// Dynamically builds inputs and outputs for Grunt tasks
// Ex: { '.tmp/scripts/vendor.js': [ 'node_modules/jquery/dist/jquery.js' ] }
var vendorLoader = function vendorLoader(config) {
  var _config = config || {};
  var fileObj = {};
  var typeDir;
  if (_config.vendor) {
    for (var key in _config.vendor) {
      // output file(s) to directory that maps to current vendor key
      typeDir = _config.confObj.directories[key] ?
        '/' + _config.confObj.directories[key].replace(/^_/, '') + '/' : '/';
      for (var file in _config.vendor[key]) {
        if (!_config.type || _config.type === key) {
          fileObj[_config.confObj.directories[_config.dir] +
          typeDir +
          _config.vendor[key][file].output] = _config.vendor[key][file].input;
        }
      }
    }
  }
  return fileObj;
};

module.exports = vendorLoader;
