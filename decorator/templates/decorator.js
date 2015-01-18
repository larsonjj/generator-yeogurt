'use strict';

angular.module('<%= _.camelize(projectName) %>')
  .config(function($provide) {
    $provide.decorator('<%= _.camelize(name) %>', function($delegate) {
      // decorate/manipulate the $delegate
      return $delegate;
    });
  });
