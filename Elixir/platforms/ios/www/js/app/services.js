angular.module('starter.services', [])

.factory('ElixirSrv', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
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
        name: 'Bank Millennium',
        outs: ['11:00', '14:30' , '17:30'],
        ins: ['12:00', '15:30' ,'17:15']
    }, {
        id: 10,
        name: 'BGŻ BNP Paribas',
        outs: ['08:00', '11:45', '14:15'],
        ins: ['11:00', '14:30', '17:00']
    }, {
        id: 11,
        name: 'Bank Pocztowy',
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
        name: 'Bank BPS',
        outs: ['08:30', '12:00', '14:00'],
        ins: ['11:00', '15:00', '17:00']
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
        name: 'Bank SMART',
        outs: ['08:00', '12:00', '14:15'],
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
    }];


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

    return {
        all: function () {
            return banks;
        },
        calc: function (sel) {
            if (!sel || !sel.epoh || !sel.bankFrom || !sel.bankTo)
                return null;

            var t = epochToTimeString(sel.epoh);
            var out = null;
            var iin = null;
            var nextDay = false;
            var msg = "";
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
                in: iin,
                msg: msg
            };
            return ret;
        },
        epochToTimeString: epochToTimeString,
        remove: function (chat) {
            banks.splice(chats.indexOf(chat), 1);
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
