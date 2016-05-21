(function() {
  'use strict';

  angular
    .module('touristMapReviewFrontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(Map, getUserLocation) {
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

  }
})();
