/**
 * Created by vikas on 11-Apr-17.
 */
(
  function () {
    'use strict';
    angular.module('signEasyApp').
      controller('countryController', ['$scope','$state', function (scope,state) {
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
      }]);
  })();
