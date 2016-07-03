(function() {
  'use strict';

  angular
    .module('touristMapReviewFrontend')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'navbar',
      bindToController: true
    };

    /** @ngInject */
    function NavbarController($auth) {
      var vm = this;
      
      vm.authenticate = function(provider) {
        $auth.authenticate(provider);
      };
      
    }
  }

})();
