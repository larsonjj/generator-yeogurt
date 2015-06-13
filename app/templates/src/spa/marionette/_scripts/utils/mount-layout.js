var Wreqr = require('../wreqr');

// Mounts a specified layout view
var mountLayout = function(LayoutView) {
  var layoutView = new LayoutView();

  // Trigger mounting base layout within DOM
  Wreqr.trigger('app:show', layoutView);

  return layoutView;
};

module.exports = mountLayout;
