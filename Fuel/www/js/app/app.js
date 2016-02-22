// Ionic Starter App
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {

        if (!AdMob) { alert('admob plugin not ready'); return; }
        //console.log('AdMob', AdMob);
        //AdMob.setOptions({
        //    // adSize: 'SMART_BANNER',
        //    // width: integer, // valid when set adSize 'CUSTOM'
        //    // height: integer, // valid when set adSize 'CUSTOM'
        //    position: AdMob.AD_POSITION.BOTTOM_CENTER,
        //    // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
        //    bgColor: 'black', // color name, or '#RRGGBB'
        //    // x: integer,    // valid when set position to 0 / POS_XY
        //    // y: integer,    // valid when set position to 0 / POS_XY
        //    isTesting: true, // set to true, to receiving test ad for testing purpose
        //    // autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
        //});
        AdMob.createBanner({
            adId: 'ca-app-pub-0757678805524137/4974429284',
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow: true
        });
        
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {


    $ionicConfigProvider.platform.android.tabs.position('bottom');
    
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
    url: '/dash',
    views: {
        'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
        }
    }
    })
    .state('tab.about', {
    url: '/about',
    views: {
        'tab-about': {
        templateUrl: 'templates/tab-about.html',
        controller: 'AboutCtrl'
        }
    }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

});
