/**
 * Created by vikas on 11-Apr-17.
 */
(function(){
  'use strict';
  angular.module('signEasyApp').controller('mapsController',['$scope','NgMap','$state','messageService',function(scope,NgMap,state,messageService){
    scope.test = 'maps';
    scope.country = state.params.country;
    NgMap.getMap().then(function() {
    });
    messageService.registerListener(function(data){
      scope.country = data;
    });
  }]);
})();
