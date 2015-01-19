'use strict';

angular.module('<%= _.camelize(projectName) %>')
  .service('<%= _.camelize(name) %>', function() {
    this.serviceMethod = function() {
      // ...code
    };
  });
