'use strict';

angular.module('parkLocator', ['ui.router', 'ui.bootstrap', 'uiGmapgoogle-maps', 'flash', 'smoothScroll', 'dcbImgFallback'])

  .config(['uiGmapGoogleMapApiProvider', 
    function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
          v: '3.20',
          libraries: 'places, geometry'
      });
  }])

  .config([ '$httpProvider', function ($httpProvider) {

    $httpProvider.interceptors.push('httpInterceptor');
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    
  }])

  .config(['$stateProvider', '$urlRouterProvider', 
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');


      $stateProvider
        .state('home', {
          url: '/',
          views: {

            'navbar': {
              templateUrl: 'views/partials/navbar.html'
            },

            '': {
              templateUrl: 'views/main.html'
            }

          }
        })

        .state('home.park', {
          url: ':name',
          templateUrl: 'views/park-information.html',
          controller: 'parkCtrl'

        })

        .state('home.park.section', {
          url: '/:sectionName',
          templateUrl: 'views/course-section.html',
          controller: 'sectionCtrl'
        });

  }]);
