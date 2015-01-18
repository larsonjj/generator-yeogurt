'use strict';

angular.module('<%= _.camelize(projectName) %>')
  .filter('<%= _.camelize(name) %>', function() {
    return function(input) {
      return '<%= _.camelize(name) %> filter: ' + input;
    };
  });
