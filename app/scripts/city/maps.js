/**
 * Created by vikas on 11-Apr-17.
 */
(function(){
  'use strict';
  angular.module('signEasyApp').controller('mapsController',['$scope','NgMap','$state','messageService',function(scope,NgMap,state,messageService){
    scope.test = 'maps';
    scope.country = state.params.country;
    NgMap.getMap().then(function(map) {
      /*console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);*/
    });
    messageService.registerListener(function(data){
      console.log(data);
    });
  }]);
})();
