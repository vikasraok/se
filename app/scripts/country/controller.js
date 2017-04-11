/**
 * Created by vikas on 11-Apr-17.
 */
(
  function () {
    'use strict';
    angular.module('signEasyApp').
      controller('countryController', ['$scope', 'countryService','$state', function (scope, restCall,state) {
        scope.country = {
          name: null,
          search: function () {
            if (this.name) {
              state.go('city',{
                country : this.name
              });
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
