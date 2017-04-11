/**
 * Created by vikas on 11-Apr-17.
 */
(
  function () {
    'use strict';
    angular.module('signEasyApp').config([
      '$stateProvider', '$urlRouterProvider', function (stateProvider, urlRouterProvider) {
        stateProvider.state('main', {
          url : '/search-country',
          views : {
            '' :{
              templateUrl : 'views/country/main.html',
              controller : 'countryController'
            }
          }
        });
        urlRouterProvider.otherwise('/search-country');
      }
    ]);
  })();
