'use strict';

/**
 * @ngdoc filter
 * @name actsApp.filter:cleanMetadata
 * @function
 * @description
 * # ApplicationsFilter
 * Filter in the actsApp.
 */
angular.module('actsApp')
  .filter('CleanDate', function () {
    return function (x) {
      if (x) {
        return new Date(parseInt(x.substr(6)));
      } else { // if not empty, clean the date. else return as empty.
        return x;
      }
    };
  });
