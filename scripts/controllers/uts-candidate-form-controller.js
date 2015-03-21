'use strict';

/**
 * @ngdoc function
 * @name actsApp.controller:utsCandidateFormController
 * @description
 * # AboutCtrl
 * Controller of the actsApp
 */
angular.module('actsApp')
  .controller('utsCandidateFormController', ['$scope', 'actsService', function ($scope, actsService) {

    $scope.selectedCandidate = null;

    $scope.$on('candidate-selected', function (e, candidate) {
      actsService.getCandidate(candidate).then(function (candidateInfo) {
        $scope.selectedCandidate = candidateInfo;
      });
    });
  }
  ]);
