angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $cordovaGeolocation, $localstorage) {

    var map = null;
    $scope.mapOptions = { center: { latitude: 45, longitude: -73 }, zoom: 8 };


    google.maps.event.addDomListener(window, 'load', function () {
        

        //navigator.geolocation.getCurrentPosition(function (pos) {
        //    map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        //    var myLocation = new google.maps.Marker({
        //        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        //        map: map,
        //        title: "My Location"
        //    });
        //});

        $scope.map = initMap();
    });

    function initMap(lat, lng)
    {
        console.log('initMap', lat, lng);
        var myLatlng = new google.maps.LatLng(lat, lng);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        return map;
    }

    function init()
    {
        
        var posOptions = { timeout: 10000, enableHighAccuracy: false };
        $cordovaGeolocation
          .getCurrentPosition(posOptions)
          .then(function (position) {
              var lat = position.coords.latitude;
              var lng = position.coords.longitude;
              //alert('LOCATION:' + lat + ', ' + lng);

              $scope.mapOptions = { center: { latitude: lat, longitude: -lng }, zoom: 8 };

              initMap(lat, lng);


          }, function (err) {
              alert('Error: ' + err.code + 'msg: '+err.message );
          });
    }

    
    init();
})
.controller('AboutCtrl', function ($scope) {
    $scope.gotoWebsite = function () {
        window.open('http://jabiel.pl', '_system');
    }
});

