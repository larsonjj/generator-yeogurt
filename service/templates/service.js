'use strict';

angular.module('<%= _.camelize(projectName) %>')
  .service('<%= _.camelize(name) %>', function() {
    // Angular instantiates a singleton by calling "new" on this function
  });
