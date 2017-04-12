/**
 * Created by vikas on 11-Apr-17.
 */
(
  function () {
    'use strict';
    angular.module('signEasyApp').
      controller('cityController', ['$scope', '$state', function (scope, state) {
        if (state.params.country) {
          localStorage.setItem('country', JSON.stringify(state.params.country));
        } else {
          state.params.country = JSON.parse(localStorage.getItem('country'));
        }
      }]);
  })();
