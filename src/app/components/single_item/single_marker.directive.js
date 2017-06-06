(function () {
  'use strict';

  angular
    .module('touristMapReviewFrontend')
    .directive('singleMarker', singleMarker);

  /** @ngInject */
  function singleMarker(dataService) {
    return {
      restrict: 'E',
      templateUrl: 'app/components/single_item/single_marker.html',
      scope: {
        details: '=',
        comment: '='
      },
      controller: SingleMarkerController,
      controllerAs: 'sm',
      bindToController: true
    };

    /** @ngInject */
    function SingleMarkerController($auth, Map, dummyData, dataService, $log, localStorageService) {
      var vm = this;
      console.log(this.details);
      vm.user_name = dataService.user_name;
      vm.data = dummyData;
      var map = window.map;
      Map.setMarkers(map, [dummyData.marker]);

      vm.sentComment = function (comment) {
        $log.log(vm);
        vm.data.marker.comments.push({user: 'Alex', text: comment});
      };

      vm.authenticate = function (provider) {
        $auth.authenticate(provider)
          .then(function (response) {
            $log.log($auth.isAuthenticated())
          })
          .catch(function (response) {
            // Something went wrong.
          });
      };


    }
  }

})();
