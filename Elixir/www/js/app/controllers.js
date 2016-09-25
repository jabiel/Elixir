angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $filter, ElixirSrv, $localstorage) {

    $scope.select = {};
    $scope.ret = {};
    $scope.banks = [];

    function init()
    {
        var now = new Date();
        
        var h = now.getHours() * 60 * 60;
        var m = now.getMinutes() + 1;
        while (m % 5 != 0)
            m++;
        
        $scope.select.now = now;
        $scope.select.date = now;
        $scope.select.epoh = h + (m * 60);
        $scope.banks = ElixirSrv.getBanks();
        $scope.timePickerObject.inputEpochTime = $scope.select.epoh;
        $scope.datepickerObject.inputDate = $scope.select.date;

        $scope.select.bankFrom = ElixirSrv.get($localstorage.get('bankFrom'));
        $scope.select.bankTo = ElixirSrv.get($localstorage.get('bankTo'));
        $scope.calcElixir();
    }

    $scope.epochToTimeString = ElixirSrv.epochToTimeString;

    $scope.calcElixir = function()
    {
        var msg2 = ElixirSrv.calcDate($scope.select);
        if (msg2) {
            $scope.ret.msg = "Pieniądze pojawią się na koncie ";
            $scope.ret.msgBold = msg2;

            $localstorage.set('bankFrom', $scope.select.bankFrom.id);
            $localstorage.set('bankTo', $scope.select.bankTo.id);

        } else {
            $scope.ret.msg = "";
            $scope.ret.msgBold = "";
        }
        

        //var result = ElixirSrv.calc($scope.select);
        //$scope.ret = result;
        //if (result)
        //{
        //    var msg = "Pieniądze pojawią się na koncie ";
        //    var msg2 = "";
            
        //    if ($scope.select.bankFrom.id == $scope.select.bankTo.id) {
        //        msg2 = "w ciągu kilku minut";
        //        $scope.ret.in = "";
        //    } else {
        //        var sd = new Date($scope.select.date); // original date
        //        var d = new Date($scope.select.date);  // final date (will be calculated)
        //        var dateIsToday = (d.getDate() == $scope.select.now.getDate());
        //        if (result.nextDay)
        //            d.setDate(sd.getDate() + 1);
        //        console.log('d', d, dateIsToday, d.getDay());

        //        // sat or sun
        //        if (d.getDay() == 0 || d.getDay() == 6) {
        //            var mon = 0;
        //            if (d.getDay() == 0)
        //            {
        //                mon++;
        //                console.log('d is sunday');
        //            }

        //            if (d.getDay() == 6)
        //            {
        //                mon += 2;
        //                console.log('d is saturday');
        //            }
                    
        //            d.setDate(d.getDate() + mon);
        //            console.log('d2', d, 'getDay()', d.getDate());
        //            msg2 = "w poniedziałek " + d.getDate() + " " + monthList[d.getMonth()].toLowerCase() + " o";
        //        } else {
        //            if (dateIsToday) {
        //                if (result.nextDay)
        //                    msg2 = "jutro o ";
        //                else 
        //                    msg2 = "dzisiaj o ";
        //            } else {
        //                msg2 = d.getDate() + " " + monthList[d.getMonth()].toLowerCase() + " o";
        //            }

        //        }
                
        //        msg2 += " "+$scope.ret.in;
        //    }  

        //    $scope.ret.msg = msg;
        //    $scope.ret.msgBold = msg2;

        //    $localstorage.set('bankFrom', $scope.select.bankFrom.id);
        //    $localstorage.set('bankTo', $scope.select.bankTo.id);
        //}
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

    init();
})
.controller('AboutCtrl', function ($scope) {
    $scope.gotoWebsite = function () {
        window.open('http://jabiel.pl', '_system');
    }
});

