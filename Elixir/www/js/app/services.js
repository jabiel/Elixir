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
        name: 'Idea Bank',
        outs: ['09:30', '13:30', '16:00'],
        ins: ['11:30', '15:30', '17:30']
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
            console.log('sel', sel);
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

            msg = "Pieni¹dze bêd¹ na koncie";
            if (nextDay)
                msg += " o " + iin + " nastêpnego dnia roboczego ";
            else
                msg += " dzisiaj o " + iin;



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
    };
});
