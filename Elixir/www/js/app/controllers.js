angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $filter, ElixirSrv, $localstorage) {

    $scope.select = {};
    $scope.ret = {};

    function init()
    {
        var now = new Date();
        
        var h = now.getHours() * 60 * 60;
        var m = now.getMinutes() + 1;
        while (m % 5 != 0)
            m++;
        
        $scope.select.now = now;
        $scope.select.epoh = h + (m * 60);
        $scope.banks = ElixirSrv.all();

        $scope.select.bankFrom = ElixirSrv.get($localstorage.get('bankFrom'));
        $scope.select.bankTo = ElixirSrv.get($localstorage.get('bankTo'));
        $scope.calcElixir();
    }

    $scope.epochToTimeString = ElixirSrv.epochToTimeString;

    $scope.calcElixir = function()
    {
        $scope.ret = ElixirSrv.calc($scope.select);
        if ($scope.ret)
        {
            var msg = 'Pieniądze będą na koncie ';
            if ($scope.ret.nextDay)
                msg += " jutro o ";
            else
                msg += " dzisiaj o ";

            $scope.ret.msg = msg;

            $localstorage.set('bankFrom', $scope.select.bankFrom.id);
            $localstorage.set('bankTo', $scope.select.bankTo.id);
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
            timePickerCallback(val);
        }
    };

    function timePickerCallback(val) {
        if (typeof (val) === 'undefined') {
            console.log('Time not selected');
        } else {
            $scope.select.epoh = val;
            $scope.calcElixir();
            //var selectedTime = new Date(new Date(val * 1000).toISOString());
            //console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
        }
    }

    var weekDaysList = ["Nie", "Pon", "Wto", "Sro", "Czw", "Pia", "Sob"];
    var monthList = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    $scope.datepickerObject = {
        titleLabel: 'Title',  //Optional
        todayLabel: 'Dzisiaj',  //Optional
        closeLabel: 'Zamknij',  //Optional
        setLabel: 'Set',  //Optional
        setButtonType: 'button-assertive',  //Optional
        todayButtonType: 'button-assertive',  //Optional
        closeButtonType: 'button-assertive',  //Optional
        inputDate: $scope.select.now,  //Optional
        mondayFirst: true,  //Optional
        weekDaysList: weekDaysList, //Optional
        monthList: monthList, //Optional
        templateType: 'popup', //Optional
        showTodayButton: 'true', //Optional
        modalHeaderColor: 'bar-positive', //Optional
        modalFooterColor: 'bar-positive', //Optional
        callback: function (val) {  //Mandatory
            datePickerCallback(val);
        },
        dateFormat: 'yyyy-MM-dd', //Optional
        closeOnSelect: false, //Optional
    };

    var datePickerCallback = function (val) {
        if (typeof (val) === 'undefined') {
            console.log('No date selected');
        } else {
            console.log('Selected date is : ', val)
            $scope.calcElixir();
        }
    };

    init();
})
.controller('AboutCtrl', function ($scope) { });

