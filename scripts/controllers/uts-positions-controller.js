'use strict';

/**
 * @ngdoc function
 * @name actsApp.controller:utsPositionsController
 * @description
 * # UTS Positions Controller
 * Controller of the actsApp
 */
angular.module('actsApp')
  .controller('utsPositionsController', ['$scope', 'actsService', 'uiGridConstants', function ($scope, actsService, uiGridConstants) {
    $scope.$on('req-position-selected', function (e, position) {
      $scope.$broadcast('position-selected', position);
    })
  }
  ]);
