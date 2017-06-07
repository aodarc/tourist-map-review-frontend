(function () {
  'use strict';

  angular
    .module('touristMapReviewFrontend')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar(dataService) {
    return {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '=',
        srch: '=',
        data: '='
      },
      controller: NavbarController,
      controllerAs: 'navbar',
      bindToController: true
    };

    /** @ngInject */
    function NavbarController($auth, $scope, dataService, $log, localStorageService) {
      var vm = this;
      $log.log(vm.data, $scope);
      vm.authenticate = function (provider) {
        $auth.authenticate(provider)
          .then(function (response) {
            $log.log($auth.isAuthenticated())
          })
          .catch(function (response) {
            // Something went wrong.
          });
      };
      vm.LogIn = function () {
        localStorageService.set('user_name', 'Alex');
        vm.is_login = true;
        vm.user_name = 'Alex';
        dataService.user_name = vm.user_name;
        window.user_name = vm.user_name
      };
      vm.logOut = function () {
        localStorageService.remove('user_name');
        vm.is_login = false;
        vm.user_name = false;
        dataService.user_name = vm.user_name;
        window.user_name = vm.user_name

      }

    }
  }

})();
