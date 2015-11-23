'use strict';

angular.module('parkLocator', ['ui.router', 'ui.bootstrap', 'uiGmapgoogle-maps'])

  .config(['uiGmapGoogleMapApiProvider', 
    function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
          v: '3.20',
          libraries: 'places,geometry,visualization'
      });
  }])

  .config(['$stateProvider', '$urlRouterProvider', 
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');


      $stateProvider
        .state('home', {
          url: '/',
          views: {

            'navbar': {
              templateUrl: 'views/nav.html'
            },

            '': {
              templateUrl: 'views/main.html',
              controller: 'MainCtrl'
            },

            'map@': {
              templateUrl: 'views/partials/map.html',
              controller: 'mapCtrl'
            }
          }
        });

  }]);
