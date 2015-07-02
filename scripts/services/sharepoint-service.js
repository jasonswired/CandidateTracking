'use strict';

/**
 * @ngdoc service
 * @name actsApp.SharepointService
 * @description
 * # SharepointService
 * Service in the actsApp.
 */
angular.module('actsApp')
  .service('SharepointService', function ($http) {
    $scope.getContext = function () {
      console.log('Get Sharepoint context');
    }

    $scope.getListItems = function (listName, siteUrl){ //get sharepoint list items via list name and site url
    	if(typeof siteUrl == 'undefined'){
			siteUrl = _spPageContextInfo.webAbsoluteUrl;
		}
		return $http.get(siteUrl+"/_api/lists/getbytitle('"+listName+"')/items?$select=*");
    }

    $scope.getLists = function() {

    }
  });
