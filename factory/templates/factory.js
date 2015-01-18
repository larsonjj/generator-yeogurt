'use strict';

angular.module('<%= _.camelize(projectName) %>')
  .factory('<%= _.camelize(name) %>', function() {
    // Private API
    var name = 'yeogurt';

    // Public API
    return {
      aMethod: function() {
        return name;
      }
    };
  });
