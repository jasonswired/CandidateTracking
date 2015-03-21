'use strict';

/**
 * @ngdoc function
 * @name actsApp.controller:utsCandidatesController
 * @description
 * # UTS Candidates Controller
 * Controller of the actsApp
 */
angular.module('actsApp')
  .controller('utsCandidatesController', ['$scope', 'actsService', 'uiGridConstants', function ($scope, actsService, uiGridConstants) {
    $scope.$on('req-candidate-selected', function(e, candidate) {
      $scope.$broadcast('candidate-selected', candidate);
    })
  }
  ]);
