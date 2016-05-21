/**
 * Created by Alexander on 21.05.2016.
 */
(function() {
    'use strict';

    angular
        .module('touristMapReviewFrontend')
        .factory('getUserLocation', getUserLocation);
    /** @ngInject */
    function getUserLocation(geolocation, Map) {

        function useLocationInitializeMap(divMapId) {
            geolocation.getLocation()
                .then(function(data) {
                    return { lat: data.coords.latitude, lon: data.coords.longitude };
                })
                .then(function(res) {
                    Map.mapInitialize(res.lat, res.lon, divMapId, false);

                })
        }
        return useLocationInitializeMap
    }
})();
