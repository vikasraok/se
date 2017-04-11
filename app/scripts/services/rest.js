/**
 * Created by vikas on 11-Apr-17.
 */
(
  function () {
    'use strict';
    angular.module('signEasyApp').
      factory('ServiceHandler', ['$q', '$http', function (q, http) {
        function serviceGetHandler(url) {
          var deferred = q.defer();
          http.get(url).then(function (data) {
            deferred.resolve(data);
          },function (error) {
            deferred.reject(error);
          });
          return deferred.promise;
        }

        return {
          get: function (url) {
            return serviceGetHandler(url);
          }
        };
      }
      ]);
  })();
