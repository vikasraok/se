/**
 * Created by vikas on 12-Apr-17.
 */
(function(){
  angular.module('signEasyApp').directive('countrySearch',['countryService',function(restCall){
    return {
      restrict : 'A',
      replace : true,
      template : '<input uib-typeahead=\"country as country.name for country in getCountry($viewValue)\" typeahead-min-length=\"2\">',
      link : function(scope){
        scope.getCountry = function (viewValue) {
          return restCall.searchCountry(viewValue).then(function (response) {
            return response.data;
          });
        };
      }
    };
  }]);
})();
