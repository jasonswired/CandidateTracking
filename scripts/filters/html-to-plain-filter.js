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
  .filter('HtmlToPlainText', function () {
    return function (text) {
        var result = String(text).replace(/<[^>]+>/gm, '');
        return result.replace(/&nbsp;/g, ' ');
    };
  });
