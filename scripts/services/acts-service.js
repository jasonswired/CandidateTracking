'use strict';

/**
 * @ngdoc service
 * @name actsApp.ActsService
 * @description
 * # SharepointService
 * Service in the actsApp.
 */
angular.module('actsApp')
  .service('actsService', ['$http','$location',  function ($http, $location) {

    //var SERVER = 'test-data/';
    var SERVER = $location.protocol() + '://' + $location.host() + "/sites/ACTS/_vti_bin/listdata.svc/"

    /**
     * Return applications
     * @returns {Promise}
     */
    this.getApplications = function () {
      var promise = $http.get(SERVER + 'Applications?$select=Title,InterviewNotes').then(function (response) {
        return response.data.d.results;
      });

      return promise;
    }
    
    // this can be updated

    /**
     * Return Application
     * @param data
     * @returns {formatCodeToRegex.d|*|DATE_FORMATS.d|e.d|Mf.d}
     */
    this.getApplication = function(data){
      var url = data.__metadata.uri;

      var promise = $http.get(url).then(function(response) {
        return response.data.d;
      });

      return promise;
    }


    /**
     * Return Open Positions
     * @returns {Promise}
     */
    this.getPositions = function () {
      var promise = $http.get(SERVER + 'Positions?$select=Position,PositionOpened,PositionClosed ').then(function(response){
        return response.data.d.results;
      });

      return promise;
    }

    /**
     * Return Position
     * @param data
     * @returns {formatCodeToRegex.d|*|DATE_FORMATS.d|e.d|Mf.d}
     */
    this.getPosition = function(data){
      var url = data.__metadata.uri;

      var promise = $http.get(url).then(function(response) {
        return response.data.d;
      });

      return promise;
    }



    /**
     * Return Candidates
     * @returns {Promise}
     */
    this.getCandidates = function () {
      var promise = $http.get(SERVER + 'Candidates?$select=Fullname,SkillsValue').then(function(response){
        return response.data.d.results;
      });

      return promise;
    }

    /**
     * Return Candidate
     * @param data
     * @returns {formatCodeToRegex.d|*|DATE_FORMATS.d|e.d|Mf.d}
     */
    this.getCandidate = function(data){
      var url = data.__metadata.uri + '?$expand=Attachments';

      var promise = $http.get(url).then(function(response) {
        return response.data.d;
      });

      return promise;
    }
  }
  ]);
