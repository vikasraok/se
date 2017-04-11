/**
 * Created by vikas on 11-Apr-17.
 */
(
  function () {
    'use strict';
    angular.module('signEasyApp').config([
      '$stateProvider', '$urlRouterProvider', function (stateProvider, urlRouterProvider) {
        stateProvider.state('main', {
          url: '/search-country',
          templateUrl: 'views/country/main.html',
          controller: 'countryController'
        }).state('city', {
          url: '/city-details',
          templateUrl: 'views/city/main.html',
          controller: 'cityController',
          params: {country: null}
        });
        urlRouterProvider.otherwise('/search-country');
      }
    ]);
  })();
