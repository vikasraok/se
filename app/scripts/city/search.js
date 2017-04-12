/**
 * Created by vikas on 11-Apr-17.
 */
(
  function () {
    'use strict';
    angular.module('signEasyApp').
      controller('searchController', ['$scope', '$state','messageService', function (scope, state,messageService) {
        scope.country = state.params.country;
        scope.updateCountry = function(country){
          messageService.broadcastMessage(country);
          localStorage.setItem('country', JSON.stringify(country));
        };
        scope.updateCity = function(city){
          scope.country.latlng[0]= city.lat;
          scope.country.latlng[1] = city.lon;
          messageService.broadcastMessage(scope.country);
        };
      }]);
  })();
