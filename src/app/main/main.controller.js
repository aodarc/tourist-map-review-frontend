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
    };

    //Google Map
    var map = Map.mapInitialize('home-map');

    userLocation.getUserLocation().then(function (data) {
      map.setCenter(new google.maps.LatLng(data.coords.latitude, data.coords.longitude));
      map.setZoom(15)
    });
    vm.data = dummyData;
    if (!vm.single_post) {
      var locations = [
        {
          title: 'title1',
          img: 'assets/images/map.png',
          location: [49.836162, 24.011409]
        },
        {
          title: 'title3',
          img: 'assets/images/map.png',
          location: [49.835580, 24.014092]
        }, {
          title: 'title3',
          img: 'assets/images/map.png',
          location: [49.835415, 24.006442]
        }];
      Map.setMarkers(map, locations);
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
