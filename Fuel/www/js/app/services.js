angular.module('starter.services', [])

.factory('MapSrv', function () {
    var map;
    var markers = [];

    function setMarkersMap(map) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }

    return {
        initMap: function (lat, lng, elementId) {
            var myLatlng = new google.maps.LatLng(lat, lng);

            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            map = new google.maps.Map(document.getElementById(elementId), mapOptions);
            return map;
        },
        moveMap: function (lat, lng) {
            var center = new google.maps.LatLng(lat, lng);
            map.panTo(center);
        },
        createMarker: function (lat, lng, title) {
            var mrkr = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                map: map,
                title: title
            });
            markers.push(mrkr);
            return mrkr;
        },
        deleteMarkers: function () {
            setMarkersMap(null);
            markers = [];
        },
        get: function (chatId) {
            for (var i = 0; i < banks.length; i++) {
                if (banks[i].id === parseInt(chatId)) {
                    return banks[i];
                }
            }
            return null;
        }
    }
})
.factory('$localstorage', ['$window', function($window) {
    return {
        set: function(key, value) {
            $window.localStorage[key] = value;
        },
        get: function(key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        setObject: function(key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function(key) {
            return JSON.parse($window.localStorage[key] || '{}');
        }
    }
}]);
