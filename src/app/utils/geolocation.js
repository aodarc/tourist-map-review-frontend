/**
 * Created by Alexander on 21.05.2016.
 */
(function () {
  'use strict';

  angular
    .module('touristMapReviewFrontend')
    .factory('userLocation', getUserLocation);
  /** @ngInject */
  function getUserLocation(geolocation) {

    function useLocationInitializeMap() {
      return geolocation.getLocation()
    }

    return {getUserLocation: useLocationInitializeMap}
  }
})();
