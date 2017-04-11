/**
 * Created by vikas on 11-Apr-17.
 */
(
  function () {
    'use strict';
    angular.module('signEasyApp').constant('SEARCH_COUNTRY', '//restcountries.eu/rest/v2/name/').
      service('countryService', ['ServiceHandler', 'SEARCH_COUNTRY', function (ServiceHandler, baseUrl) {
        return {
          searchCountry: function (name) {
            return ServiceHandler.get(baseUrl+name);
          }
        };
      }]);

  })();
