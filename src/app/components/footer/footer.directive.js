(function() {
  'use strict';

  angular
    .module('touristMapReviewFrontend')
    .directive('acmeFooter', acmeFooter);

  /** @ngInject */
  function acmeFooter() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
        creationDate: '='
      },
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    /** @ngInject */
    function FooterController() {
      //var vm = this;

    }
  }

})();
