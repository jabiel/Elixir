angular.module('starter.services', [])

.factory('ElixirSrv', function () {
    var banks = [{
        id: 1,
        name: 'PKO BP',
        outs: ['08:00', '11:45', '14:30'],
        ins: ['11:30', '15:10', '17:30']
    }, {
        id: 2,
        name: 'PKO SA',
        outs: ['08:30', '12:30', '15:00'],
        ins: ['11:00', '15:00', '17:30']
    }, {
        id: 3,
        name: 'BZ WBK',
        outs: ['8:15', '12:15', '14:45'],
        ins: ['11:00', '15:00', '17:00']
    }, {
        id: 4,
        name: 'mBank',
        outs: ['05:55', '09:55', '13:25'],
        ins: ['12:00', '15:00', '18:15']
    }, {
        id: 5,
        name: 'Idea Bank',
        outs: ['09:30', '13:30', '16:00'],
        ins: ['11:30', '15:30', '17:30']
    }, {
        id: 6,
        name: 'Alior Bank',
        outs: ['8:20', '12:20', ' 15:10'],
        ins: ['11:00', '15:00', '17:00']
    }, {
        id: 7,
        name: 'Getin Noble Bank',
        outs: ['08:15', '13:30', '14:30'],
        ins: ['10:00', '14:00', '17:00']
    }, {
        id: 8,
        name: 'Credit Agricole',
        outs: ['14:30'],
        ins: ['12:00', '16:00', '18:00']
    }, {
        id: 9,
        name: 'Millennium',
        outs: ['11:00', '14:30' , '17:30'],
        ins: ['12:00', '15:30' ,'17:15']
    }, {
        id: 10,
        name: 'BGŻ BNP Paribas',
        outs: ['08:00', '11:45', '14:15'],
        ins: ['11:00', '14:30', '17:00']
    }, {
        id: 11,
        name: 'Pocztowy',
        outs: ['09:00', '13:00', '15:00'],
        ins: ['11:00', '15:00', '17:30']
    }, {
        id: 12,
        name: 'Eurobank',
        outs: ['11:00', '15:00', '17:00'],
        ins: ['7:30', '11:30', '14:30']
    }, {
        id: 13,
        name: 'Citi Handlowy',
        outs: ['08:00', '12:15', '15:30'],
        ins: ['10:30', '14:30', '17:30']
    }, {
        id: 14,
        name: 'Raiffeisen Polbank',
        outs: ['08:00', '12:15', '15:00'],
        ins: ['10:30', '14:30', '17:30']
    }, {
        id: 15,
        name: 'Deutsche Bank',
        outs: ['07:45', '12:00', '15:00'],
        ins: ['12:00', '16:00', '17:30']
    }, {
        id: 16,
        name: 'BOŚ Bank',
        outs: ['08:35', '12:35', '15.00'],
        ins: ['11:00', '15:00', '17:30']
    }, {
        id: 17,
        name: 'BNP Paribas Bank',
        outs: ['08:00', '11:45', '14:15'],
        ins: ['11:00', '14:30', '17:00']
    }, {
        id: 18,
        name: 'Nordea Bank',
        outs: ['08:30', '11:50', '14:30'],
        ins: ['10:45', '14:45', '17:15']
    }, {
        id: 19,
        name: 'BPS',
        outs: ['08:30', '12:00', '14:00'],
        ins: ['12:00', '16:00', '18:00']
    }, {
        id: 20,
        name: 'SGB Bank',
        outs: ['08:30', '12:30', '15:30'],
        ins: ['11:30', '15:30', '17:30']
    }, {
        id: 22,
        name: 'ING Bank Śląski',
        outs: ['08:10', '11:30', '14:30'],
        ins: ['11:00', '15:00', '17:30']
    }, {
        id: 24,
        name: 'Inteligo',
        outs: ['08:00', '11:30', '14:30'],
        ins: ['11:00', '15:00', '17:30']
    }, {
        id: 26,
        name: 'Plus Bank',
        outs: ['08:00', '11:30', '14:00'],
        ins: ['11:00', '14:30', '17:00']
    }, {
        id: 28,
        name: 'Toyota Bank',
        outs: ['08:10', '11:30', '14:30'],
        ins: ['11:00', '15:00', '17:30']
    }, {
        id: 30,
        name: 'Nest Bank (Smart)',
        outs: ['08:00', '11:00', '14:00'],
        ins: ['11:30', '15:30', '17:30']
    }, {
        id: 31,
        name: 'T-Mobile Bank',
        outs: ['08:20', '12:20', '15:10'],
        ins: ['11:00', '15:00', '17:00']
    }, {
        id: 32,
        name: 'VW Bank',
        outs: ['07:55', '11:45', '14:15'],
        ins: ['12:00', '16:00', '18:00']
    }, {
        id: 33,
        name: 'BPH',
        outs: ['10:30', '14:30', '17:00'],
        ins: ['11:45', '15:45', '17:00']
    }, {
        id: 34,
        name: 'Biz Bank',
        outs: ['08:00', '12:00', '14:30'],
        ins: ['11:30', '15:30', '17:30']
    //}, {
    //    id: 35,
    //    name: 'Bank BPS',
    //    outs: ['15:00', '15:00', '15:00'],
    //    ins: ['12:00', '16:00', '18:00']
    }, {
        id: 36,
        name: 'Bank Zachodni WBK',
        outs: ['08:15', '12:15', '14:45'],
        ins: ['18:00', '18:00', '18:00']
    }];

    var monthList = ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"];


    var epochToTimeString = function (ep) {
        var h = Math.floor(ep / 3600);
        var m = (ep - (h * 3600)) / 60;

        var ret = '';
        if (h < 10)
            ret += '0'
        ret += h + ':';
        if (m < 10)
            ret += '0'
        ret += m;
        return ret;
    }

    function calcBankInOutTimes(sel)
    {
        if (!sel || !sel.epoh || !sel.bankFrom || !sel.bankTo)
        {
            console.log('sel is null!');
            return null;
        }
        
        var t = epochToTimeString(sel.epoh);
        var out = null;
        var iin = null;
        var nextDay = false;
        
        for (var i = 0; i < sel.bankFrom.outs.length; i++)
            if (t < sel.bankFrom.outs[i]) {
                out = sel.bankFrom.outs[i];
                break;
            }

        if (!out) {
            nextDay = true;
            out = sel.bankFrom.outs[0];
        }

        for (var i = 0; i < sel.bankTo.ins.length; i++)
            if (out < sel.bankTo.ins[i]) {
                iin = sel.bankTo.ins[i];
                break;
            }

        if (!iin) {
            nextDay = true;
            iin = sel.bankTo.ins[0];
        }

        var ret = {
            nextDay: nextDay,
            out: out,
            in: iin
        };
        return ret;
    }

    function calcDate(sel)
    {
        var ret = calcBankInOutTimes(sel);
        //console.log('ret', ret);

        if (!ret)
            return null;

        if (sel.bankFrom.id == sel.bankTo.id)
            return "w ciągu kilku minut";
        
        var sd = new Date(sel.date); // original date
        var d = new Date(sel.date);  // final date (will be calculated)
        var dateIsToday = (d.getDate() == sel.now.getDate());
        if (ret.nextDay)
            d.setDate(sd.getDate() + 1);
        //console.log('d', d, 'getDay', d.getDay(), 'dateIsToday', dateIsToday);

        // sat or sun
        if (d.getDay() == 0 || d.getDay() == 6) {
            var mon = 0;
            if (d.getDay() == 0) {
                d.setDate(d.getDate() + 1);
                console.log('d is sunday');
            }

            if (d.getDay() == 6) {
                d.setDate(d.getDate() + 2);
                console.log('d is saturday');
            }
            return "w poniedziałek " + d.getDate() + " " + monthList[d.getMonth()].toLowerCase() + " o " + ret.in;
        } else {
            var msg2 = "";
            if (dateIsToday) {
                if (ret.nextDay)
                    msg2 = "jutro o ";
                else
                    msg2 = "dzisiaj o ";
            } else {
                msg2 = d.getDate() + " " + monthList[d.getMonth()].toLowerCase() + " o ";
            }
            msg2 += ret.in;

            return msg2;
        }
    }

    return {
        getBanks: function () {
            banks.sort(function (a, b) {
                var x = a.name.toLowerCase();
                var y = b.name.toLowerCase();
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                //return a.name - b.name;
            });
            return banks;
        },
        calcDate: calcDate,
        epochToTimeString: epochToTimeString,
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
