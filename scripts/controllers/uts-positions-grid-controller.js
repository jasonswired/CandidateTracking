'use strict';

/**
 * @ngdoc function
 * @name actsApp.controller:utsCandidatesGridController
 * @description
 * # UTS Candidates Controller
 * Controller of the actsApp
 */
angular.module('actsApp')
  .controller('utsPositionsGridController', ['$scope', 'actsService', 'uiGridConstants', function ($scope, actsService, uiGridConstants) {

    $scope.gridOptions = {
      data: null,
      enableFiltering: true,
      enablePaging: true,
      enableColumnResize: true,
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
          name: 'Position',
          field: 'Position',
          filter: {
            condition: uiGridConstants.filter.CONTAINS
          }
        },
        {
          name: 'PositionOpened',
          field: 'PositionOpened',
          filter: {
            condition: uiGridConstants.filter.CONTAINS
          },
          cellFilter: 'CleanDate | date: "yyyy-MM-dd"'
        },
        {
          name: 'PositionClosed',
          field: 'PositionClosed',
          filter: {
            condition: uiGridConstants.filter.CONTAINS
          },
          cellFilter: 'CleanDate | date: "yyyy-MM-dd"'
        }
      ]
    };


    $scope.gridOptions.onRegisterApi = function (gridApi) {
      //set gridApi on scope
      $scope.gridApi = gridApi;
      gridApi.selection.on.rowSelectionChanged($scope, function (row) {
        $scope.$emit('req-position-selected', row.entity);
      });
    };

    actsService.getPositions().then(function (data) {
      $scope.gridOptions.data = data;
    });
  }
  ]);
