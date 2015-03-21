'use strict';

/**
 * @ngdoc function
 * @name actsApp.controller:utsApplicationFormController
 * @description
 * # AboutCtrl
 * Controller of the actsApp
 */
angular.module('actsApp')
  .controller('utsApplicationFormController', ['$scope', 'actsService', function ($scope, actsService) {

    $scope.selectedApplicant = null;

    $scope.$on('application-selected', function (e, application) {
      actsService.getApplication(application).then(function (applicationInfo) {
        $scope.selectedApplicant = applicationInfo;
      });
    });
  }
  ]);
