/**
 * Created by vikas on 11-Apr-17.
 */
(
  function () {
    'use strict';
    angular.module('signEasyApp').
      controller('searchController', ['$scope', '$state', 'messageService', function (scope, state, messageService) {
        scope.country = state.params.country;
        messageService.broadcastMessage({
          test: 'testing service without return'
        });
      }]);
  })();
