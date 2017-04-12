/**
 * Created by vikas on 11-Apr-17.
 */
(
  function () {
    angular.module('signEasyApp').service('messageService', [function () {
      var listeners = {};
      var count = 0;
      this.registerListener = function (listener) {
        listeners[count] = listener;
        count++;
        return (function (currentCount) {
          return function () {
            delete listeners[currentCount];
          };
        })(count);
      };
      this.broadcastMessage = function (message) {
        var keys = Object.keys(listeners);
        for (var i = 0; i < keys.length; i++) {
          listeners[keys[i]](message);
        }
      };
    }]);
  })();
