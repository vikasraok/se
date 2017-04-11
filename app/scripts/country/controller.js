/**
 * Created by vikas on 11-Apr-17.
 */
(
  function () {
    'use strict';
    angular.module('signEasyApp').
      controller('countryController', ['$scope', 'countryService', function (scope, restCall) {
        scope.country = {
          name: null,
          search: function () {
            if (this.name) {
            }
            this.name = null;
          }
        };
        scope.getCountry = function (viewValue) {
          return restCall.searchCountry(viewValue).then(function (response) {
            return response.data;
          });
        };
      }]);
  })();
