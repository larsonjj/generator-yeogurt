// Iterate over "vendor" key in configuration object
// Dynamically builds inputs and outputs for Grunt tasks
// Ex: { '.tmp/scripts/vendor.js': [ 'node_modules/jquery/dist/jquery.js' ] }
var vendorLoader = function vendorLoader(config) {
  var _config = config || {};
  var _type = _config.type;
  var fileObj = {};
  var typeDir;
  if (_config.confObj.vendor) {
    for (var key in _config.confObj.vendor) {
      if (!_type || _type === key) {
        // output file(s) to directory that maps to current vendor key
        typeDir = _config.confObj.directories[key] ?
          '/' + _config.confObj.directories[key].replace(/^_/, '') + '/' : '/';
        fileObj[_config.confObj.directories[_config.dir] +
        typeDir +
        _config.confObj.vendor[key].output] = _config.confObj.vendor[key].input;
      }
    }
  }
  return fileObj;
};

module.exports = vendorLoader;
