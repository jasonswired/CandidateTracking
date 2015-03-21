'use strict';

/**
 * @ngdoc overview
 * @name actsApp
 * @description
 * # actsApp
 *
 * Main module of the application.
 */
angular
  .module('actsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.grid',
    'ui.grid.pagination',
    'ui.grid.selection',
    'ui.grid.autoResize'
  ]);
//.config(function ($routeProvider) {
//  //$routeProvider
//    //.when('/', {
//    //  templateUrl: 'views/main.html',
//    //  controller: 'MainCtrl'
//    //})
//    //.when('/about', {
//    //  templateUrl: 'views/about.html',
//    //  controller: 'AboutCtrl'
//    //})
//    //.otherwise({
//    //  redirectTo: '/'
//    //});
//});
