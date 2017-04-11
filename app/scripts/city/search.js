/**
 * Created by vikas on 11-Apr-17.
 */
(
  function () {
    'use strict';
    angular.module('signEasyApp').controller('searchController', ['$scope', '$state', function (scope, state) {
      scope.country  = state.params.country;
      console.log(scope.country);
    }]);
  })();
