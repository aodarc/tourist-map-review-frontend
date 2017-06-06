/**
 * Created by tix on 6/6/17.
 */
(function () {
  'use strict';

  angular
    .module('touristMapReviewFrontend')
    .factory('dataService', getDummyData);
  /** @ngInject */
  function getDummyData() {
    return {user_name: ''}
  }
})();
