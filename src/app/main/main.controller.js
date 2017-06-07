(function () {
  'use strict';

  angular
    .module('touristMapReviewFrontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(Map, dummyData, userLocation, $http, dataService, $log, localStorageService) {
    var vm = this;
    // Dummy data
    vm.single_post = false;
    vm.details = {name: 'tract'};
    vm.search = 'string';

    vm.toSinglePost = function () {
      vm.single_post = true;
      for (var i = 0; i < vm.markers.length; i++) {
        vm.markers[i].setMap(null);
      }
      $log.log(vm.markers);
    };

    //Google Map
    var map = Map.mapInitialize('home-map');

    userLocation.getUserLocation().then(function (data) {
      var user_loc = new google.maps.LatLng(data.coords.latitude, data.coords.longitude)
      map.setCenter(user_loc);
      map.setZoom(15);

      var markerOptions = {
        position: user_loc,
        map: map,
        title: "Your location",
        icon: 'assets/images/marker.png'
      };

      new google.maps.Marker(markerOptions);
    });
    vm.data = dummyData;
    if (!vm.single_post) {
      vm.markers = Map.setMarkers(map, dummyData.markers);
      Map.map = map;
    }
    $http({
      method: 'GET',
      url: 'http://192.168.1.13/api/all_reviews'
    }).then(function successCallback(response) {
      $log.log(response);
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

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

    };
    console.log(vm)
  }
})();
