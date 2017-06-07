/**
 * Created by Alexander on 21.05.2016.
 */
(function () {
  'use strict';
  // require('google');

  angular
    .module('touristMapReviewFrontend')
    .factory('Map', Map);
  function Map() {
    var infowindow = new google.maps.InfoWindow();
    var vm = this;

    function setMarkers(map, locations) {
      var marker, i;
      var markers = [];
      for (i = 0; i < locations.length; i++) {
        var title = locations[i].title;
        var img = locations[i].img;
        var sh_d = locations[i].short_description;

        var latlngset = new google.maps.LatLng(locations[i].location[0], locations[i].location[1]);

        var markerOptions = {
          position: latlngset,
          map: map,
          title: locations[i].title
          //icon: 'assets/images/marker.png'
        };

        marker = new google.maps.Marker(markerOptions);
        markers.push(marker);
        map.setCenter(marker.getPosition());

        var windowContent = '<div class="marker-info media" style="width: 300px">' +
          '<a class="pull-left" href="#/video_page"><img width="64px" height="64px" class="media-object" src="' + img + '"></a>' +
          '<div class="media-body"><h4 class="media-heading">' + locations[i].title + '</h4><p>' + sh_d + '</p><h5 class="media-heading"></h5></div>' +
          '</div>';


        google.maps.event.addListener(marker, 'mouseover', (function (marker, windowContent, infowindow) {
          if (infowindow !== void 0) {
            infowindow.close();
          }
          return function () {
            infowindow.setContent(windowContent);
            infowindow.open(map, marker);
          };
        })(marker, windowContent, infowindow));
      }
      return markers
    }


    function mapInitialize(divId, lat, lon, scrollwheel) {
      if (scrollwheel === undefined) {
        scrollwheel = true
      }
      var mapOptions = {
        zoom: 14,
        mapTypeId: 'terrain',
        scrollwheel: scrollwheel
      };
      if (lat && lon) {
        mapOptions.center = new google.maps.LatLng(lat, lon)
      }
      window.map = new google.maps.Map(document.getElementById(divId), mapOptions);
      return window.map
    }

    return {
      mapInitialize: mapInitialize,
      setMarkers: setMarkers
    }
  }
})();
