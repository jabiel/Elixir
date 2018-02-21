angular.module('starter.controllers', [/*'starter.services'*/])

    .controller('DashCtrl', function ($scope, $filter, ElixirData, ElixirService, $localstorage, $ionicPlatform) {

    $scope.select = {};
    $scope.ret = {};
    $scope.banks = [];

    function init()
    {
        var now = new Date();
        
        var h = now.getHours() * 60 * 60;
        var m = now.getMinutes() + 1;
        while (m % 5 !== 0)
            m++;
        
        $scope.select.now = now;
        $scope.select.date = now;
        $scope.select.epoh = h + (m * 60);
        $scope.banks = ElixirData.getBanks();
        $scope.timePickerObject.inputEpochTime = $scope.select.epoh;
        $scope.datepickerObject.inputDate = $scope.select.date;

        $scope.select.bankFrom = ElixirData.getBankById($localstorage.get('bankFrom'));
        $scope.select.bankTo = ElixirData.getBankById($localstorage.get('bankTo'));
        $scope.calcElixir();
    }

    $scope.epochToTimeString = ElixirService.epochToTimeString;

    $scope.calcElixir = function()
    {
        var msg2 = ElixirService.calcDate($scope.select);
        if (msg2) {
            $scope.ret.msg = "Pieniądze pojawią się na koncie ";
            $scope.ret.msgBold = msg2.msg;
            $scope.ret.date = msg2.date;

            $localstorage.set('bankFrom', $scope.select.bankFrom.id);
            $localstorage.set('bankTo', $scope.select.bankTo.id);

        } else {
            $scope.ret.msg = "";
            $scope.ret.msgBold = "";
            $scope.ret.date = new Date();
        }
    };
    
    
    $scope.timePickerObject = {
        inputEpochTime: $scope.select.epoh, //((new Date()).getHours() * 60 * 60),  //Optional
        step: 5,  //Optional
        format: 24,  //Optional
        titleLabel: 'Czas przelewu',  //Optional
        setLabel: 'Ustaw',  //Optional
        closeLabel: 'Zamknij',  //Optional
        setButtonType: 'button-positive',  //Optional
        closeButtonType: 'button-stable',  //Optional
        callback: function (val) {    //Mandatory
            if (typeof (val) !== 'undefined') {
                $scope.select.epoh = val;
                $scope.calcElixir();
            }
        }
    };

    var weekDaysList = ["Nie", "Pon", "Wto", "Sro", "Czw", "Pia", "Sob"];
    var monthList = ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"];

    $scope.datepickerObject = {
        titleLabel: 'Title',  //Optional
        todayLabel: 'Dzisiaj',  //Optional
        closeLabel: 'Anuluj',  //Optional
        setLabel: 'Set',  //Optional
        setButtonType: 'button-assertive',  //Optional
        todayButtonType: 'button-assertive',  //Optional
        closeButtonType: 'button-assertive',  //Optional
        inputDate: $scope.select.date,  //Optional
        mondayFirst: true,  //Optional
        weekDaysList: weekDaysList, //Optional
        monthList: monthList, //Optional
        templateType: 'popup', //Optional
        showTodayButton: 'true', //Optional
        modalHeaderColor: 'bar-positive', //Optional
        modalFooterColor: 'bar-positive', //Optional
        callback: function (val) {  //Mandatory
            if (typeof (val) !== 'undefined') {
                $scope.select.date = val;
                $scope.calcElixir();
            }
        },
        dateFormat: 'yyyy-MM-dd', //Optional
        closeOnSelect: false, //Optional
    };

    $scope.setReminder = function () {
        cordova.plugins.notification.local.schedule({
            title: 'My first notification',
            text: 'Thats pretty easy...',
            foreground: true
        });

        cordova.plugins.notification.local.schedule({
            title: 'Kiedy Przelew przypomina',
            text: 'Pieniadze powinny byc na koncie w ' + $scope.select.bankTo.name,
            foreground: true,
            trigger: { at: $scope.ret.date }
        });
    }

    init();
    $ionicPlatform.ready(function () {
        
    });

    
})
    .controller('AboutCtrl', function ($scope, $ionicPlatform, $window) {
        $ionicPlatform.ready(function () {
            cordova.getAppVersion.getVersionNumber().then(function (version) {
                $scope.appVersion = version;
            });
        });

        $scope.gotoWebsite = function (url) {
            window.open(url, '_system');
        }
        $scope.sendMessage = function () {
            $window.open('mailto:jabiel@o2.pl?Subject=KiedyPrzelew', '_system', 'location=yes');


            $window.location.href = 'mailto:jabiel@o2.pl?Subject=KiedyPrzelew';
        }
        

    });

