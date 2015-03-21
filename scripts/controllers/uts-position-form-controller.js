'use strict';

/**
 * @ngdoc function
 * @name actsApp.controller:utsCandidateFormController
 * @description
 * # AboutCtrl
 * Controller of the actsApp
 */
angular.module('actsApp')
  .controller('utsPositionFormController', ['$scope', 'actsService', function ($scope, actsService) {

    $scope.selectedPosition = null;

    $scope.$on('position-selected', function (e, position) {
      actsService.getPosition(position).then(function (positionInfo) {
        $scope.selectedPosition = positionInfo;
      });
    });
  }
  ]);
