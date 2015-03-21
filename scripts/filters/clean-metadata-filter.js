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
  .filter('CleanMetadata', function () {
    return function (text) {
      var result = String(text).replace(/\|[a-zA-Z0-9]+-[a-zA-Z0-9]+-[a-zA-Z0-9]+-[a-zA-Z0-9]+-[a-zA-Z0-9]+/g, ""); // finds guid after "|" and replaces with "" (blank)
      result = String(result).replace(/\;+/g, "; "); // find ";" and replace with "; ". At some point this needs to be smarter.
      if (text) {
        return result;
      } else { // if the text is blank, return the processed result
        return "";
      } // otherwise return blank
    }
  });
