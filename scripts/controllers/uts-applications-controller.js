'use strict';

/**
 * @ngdoc function
 * @name actsApp.controller:utsCandidatesController
 * @description
 * # UTS Candidates Controller
 * Controller of the actsApp
 */
angular.module('actsApp')
  .controller('utsApplicationsController', ['$scope', 'actsService', 'uiGridConstants', function ($scope, actsService, uiGridConstants) {
    $scope.$on('req-application-selected', function(e, application) {
      $scope.$broadcast('application-selected', application);
    })
  }
  ]);
