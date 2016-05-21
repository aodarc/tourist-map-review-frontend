(function() {
  'use strict';

  angular
    .module('touristMapReviewFrontend')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
