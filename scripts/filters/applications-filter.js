'use strict';

/**
 * @ngdoc filter
 * @name actsApp.filter:ApplicationsFilter
 * @function
 * @description
 * # ApplicationsFilter
 * Filter in the actsApp.
 */
angular.module('actsApp')
  .filter('ApplicationsFilter', function () {
    return function (input) {
      return 'ApplicationsFilter filter: ' + input;
    };
  });
