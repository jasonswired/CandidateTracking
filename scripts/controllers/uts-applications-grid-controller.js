'use strict';

/**
 * @ngdoc function
 * @name actsApp.controller:utsApplicationsController
 * @description
 * # UTS Applications Controller
 * Controller of the actsApp
 */
angular.module('actsApp')
  .controller('utsApplicationsGridController', ['$scope', 'actsService', 'uiGridConstants', function ($scope, actsService, uiGridConstants) {

    $scope.gridOptions = {
      data: null,
      enableFiltering: true,
      enablePaging: true,
      enableColumnResize : true,
      enableRowSelection: true,
      enableRowHeaderSelection: false,
      modifierKeysToMultiSelect: false,
      multiSelect: false,
      noUnselect: true,
      pagingOptions: {
        pageSizes: [10, 20, 50],
        pageSize: 10,
        currentPage: 1
      },
      columnDefs: [
        {
          name: 'Title',
          field: 'Title',
          filter: {
            condition: uiGridConstants.filter.CONTAINS
          }
        },
        {
          name: 'Notes',
          field: 'InterviewNotes',
          filter: {
            condition: uiGridConstants.filter.CONTAINS
          }
        }
      ]
    };

    $scope.gridOptions.onRegisterApi = function (gridApi) {
      //set gridApi on scope
      $scope.gridApi = gridApi;
      gridApi.selection.on.rowSelectionChanged($scope, function (row) {
        $scope.$emit('req-application-selected', row.entity);
      });
    };


    actsService.getApplications().then(function (data) {
      $scope.gridOptions.data = data;
    });
  }
  ]);
