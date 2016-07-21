angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $cordovaGeolocation, $localstorage, MapSrv) {

    var map = null;
    var markers = null;

    google.maps.event.addDomListener(window, 'load', function () {
        consle.log("zzz");
    });

    $scope.btn = function () {

        MapSrv.moveMap();
    }

    function init()
    {   
        var posOptions = { timeout: 10000, enableHighAccuracy: false };
        $cordovaGeolocation
          .getCurrentPosition(posOptions)
          .then(function (position) {
              var lat = position.coords.latitude;
              var lng = position.coords.longitude;
              
              $scope.map = MapSrv.initMap(lat, lng, "map");

              MapSrv.createMarker(lat, lng, "tararara");
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

