/**
 * Created by vikas on 11-Apr-17.
 */
(
  function () {
    'use strict';
    angular.module('signEasyApp').directive('citySearch', ['cityService', function (restCall) {
      return {
        restrict: 'A',
        template: '<input uib-typeahead=\"city as city.name for city in cities | filter : {name : $viewValue} | limitTo : 5\">',
        replace: true,
        link: function (scope) {
          scope.cities = restCall.city;
        }
      };
    }]);
  })();
