/**
 * Created by Alexander on 21.05.2016.
 */
(function() {
  'use strict';


    angular
    .module('touristMapReviewFrontend')
    .factory('Map', Map);
    function Map() {
      var infowindow = new google.maps.InfoWindow();

      function setMarkers(map, locations){
          var marker, i;
           for (i = 0; i < locations.length; i++){
                var title = locations[i].title;
                var img = locations[i].pictures ? locations[i].pictures.sizes[0].link : "";
                var zipcode = locations[i].zipcode;
                var address =  locations[i].address;
                var city =  locations[i].city;
                var state =  locations[i].state;
                var price =  locations[i].price;
                var latlngset = new google.maps.LatLng(locations[i].location[0], locations[i].location[1]);

                var markerOptions = {
                   position: latlngset,
                   map: map,
                   title: locations[i].title,
                   //icon: 'assets/images/marker.png'
               };

                marker = new google.maps.Marker(markerOptions);
                map.setCenter(marker.getPosition());

                var windowContent = '<div class="marker-info media">' +
                                   '<a class="pull-left" href="#/video_page"><img width="64px" height="64px" class="media-object" src="'+ img + '"></a>' +
                                   '<div class="media-body"><h4 class="media-heading">'+ zipcode +' ' + address + '</h4><p>'+ city +' '+ state + '</p><h5 class="media-heading">$ ' + price +'</h5></div>'+
                                '</div>';


               google.maps.event.addListener(marker,'mouseover', (function(marker,windowContent,infowindow){
                 if (infowindow !== void 0) {
                   infowindow.close();
                 }
                       return function() {
                          infowindow.setContent(windowContent);
                          infowindow.open(map,marker);
                       };
                   })(marker, windowContent, infowindow));
             }
        }


      function mapInitialize(lat, lon, divId, scrollwheel){
        if (scrollwheel === undefined){
          scrollwheel = true
        }
        var mapOptions = {
          center: new google.maps.LatLng(lat, lon),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: scrollwheel
        };
        var map = new google.maps.Map(document.getElementById(divId),
        mapOptions);

        //setMarkers(map,locations)
      }

      return{
        mapInitialize: mapInitialize
      }
    }
})();
