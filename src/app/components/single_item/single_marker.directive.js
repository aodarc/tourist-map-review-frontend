(function() {
  'use strict';

  angular
    .module('touristMapReviewFrontend')
    .directive('singleMarker', singleMarker);

  /** @ngInject */
  function singleMarker() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/single_item/single_marker.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'sm',
      bindToController: true
    };

    /** @ngInject */
    function NavbarController($auth, $log) {
      var vm = this;

      vm.authenticate = function(provider) {
        $auth.authenticate(provider)
          .then(function(response) {
            $log.log($auth.isAuthenticated())
          })
          .catch(function(response) {
          // Something went wrong.
          });
        alert('this');
        console.log('yyy')
      };


    }
  }

})();
