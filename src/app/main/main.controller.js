(function() {
  'use strict';

  angular
    .module('touristMapReviewFrontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(Map, getUserLocation, $http, $log) {
    var vm = this;
    //Slider options
    vm.interval = 5000;
    vm.noWrapSlides  =false;
    vm.active = 0;
    vm.slides = ['assets/images/panorama1.jpg',
    'assets/images/panorama2.JPG',
    'assets/images/panorama3.JPG'
    ];
    //Google Map
    getUserLocation('home-map');
    
    
    $http({
            method: 'GET',
            url: 'http://192.168.1.13/api/all_reviews'
          }).then(function successCallback(response) {
              $log.log(response);
            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
  }
})();
