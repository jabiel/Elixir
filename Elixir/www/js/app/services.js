angular.module('starter.services', [])

    .factory('ElixirService', function () {

        var monthList = ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"];

        var kir = [{ from: '9:30', to: '11:00' }, { from: '13:30', to: '15:00' }, { from: '16:00', to: '17:30' }]
        /// Oblicza z uwzgednieniem KIR
        var calc2 = function (sel) {
            if (!sel || !sel.epoh || !sel.bankFrom || !sel.bankTo) {
                console.log('sel is null!', sel);
                return null;
            }

            console.log('  ' + sel.bankFrom.name + ' -> ' + sel.bankTo.name + ' at ' + epochToTimeString(sel.epoh));

            var nextDay = false;
            var out = getEarliestTransferTime(sel.epoh, sel.bankFrom.outs);
            if (!out) {
                nextDay = true;
                out = sel.bankFrom.outs[0];
            }
            console.log(sel.bankFrom.name + ': out o ' + out);
            var kirTo = null;
            outE = timeStringToEpoch(out);
            for (var i = 0; i < 3; i++) {
                var kii = timeStringToEpoch(kir[i].from);
                if (outE < kii) {
                    kirTo = kir[i].to;
                    break;
                }
            }
            if (!kirTo) {
                nextDay = true;
                kirTo = kir[0].to;
            }
            console.log('Kir out o ' + kirTo);

            var inn = getEarliestTransferTime(timeStringToEpoch(kirTo), sel.bankTo.ins);

            console.log(sel.bankTo.name + ': out o ' + inn);

            var ret = {
                nextDay: nextDay,
                out: out,
                in: inn
            };
            return ret;
        }

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

        var timeStringToEpoch = function (str) {
            var ss = str.split(":");
            var h = parseInt(ss[0]);
            var m = parseInt(ss[1]);

            return (h * 3600) + m * 60;
        }


        function getEarliestTransferTime(epohNow, bankTimeTable) {
            for (var i = 0; i < bankTimeTable.length; i++) {
                //console.log('getEarliestTransferTime: ', epohNow, bankTimeTable[i], timeStringToEpoch(bankTimeTable[i]));
                if (epohNow < timeStringToEpoch(bankTimeTable[i])) {
                    return bankTimeTable[i];
                }
            }
            //console.log('getEarliestTransferTime null');
            return null;
        }

        //function calcBankInOutTimes(sel) {
        //    if (!sel || !sel.epoh || !sel.bankFrom || !sel.bankTo) {
        //        console.log('sel is null!');
        //        return null;
        //    }

        //    var nextDay = false;

        //    var out = getEarliestTransferTime(sel.epoh, sel.bankFrom.outs);
        //    if (!out) {
        //        nextDay = true;
        //        out = sel.bankFrom.outs[0];
        //    }
        //    var outEpoh = timeStringToEpoch(out);

        //    var iin = getEarliestTransferTime(outEpoh, sel.bankTo.ins);
        //    if (!iin) {
        //        nextDay = true;
        //        iin = sel.bankTo.ins[0];
        //    }

        //    console.log('out: ' + out + ', in: ' + iin + ', next day: ' + nextDay);

        //    var ret = {
        //        nextDay: nextDay,
        //        out: out,
        //        in: iin
        //    };
        //    return ret;
        //}

        function calcDate(sel)
        {
            var ret = calc2(sel);

            if (!ret)
                return null;

            if (sel.bankFrom.id === sel.bankTo.id) {
                var d = new Date(new Date(sel.date).getTime() + 5 * 60000); // 5 minut
                return { date: d, msg: "w ciągu kilku minut" };
            }
            
            var sd = new Date(sel.date); // original date
            var d = new Date(sel.date);  // final date (will be calculated)
            var dateIsToday = (d.getDate() === sel.now.getDate());
            if (ret.nextDay)
                d.setDate(sd.getDate() + 1);
            //console.log('d', d, 'getDay', d.getDay(), 'dateIsToday', dateIsToday);

            // sat or sun
            if (d.getDay() === 0 || d.getDay() === 6) {
                var mon = 0;
                if (d.getDay() === 0) {
                    d.setDate(d.getDate() + 1);
                    console.log('d is sunday');
                }

                if (d.getDay() === 6) {
                    d.setDate(d.getDate() + 2);
                    console.log('d is saturday');
                }
                return { date: d, msg: "w poniedziałek " + d.getDate() + " " + monthList[d.getMonth()].toLowerCase() + " o " + ret.in};
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

                return { date: d, msg: msg2};
            }
        }

        return {
            calcDate: calcDate,
            epochToTimeString: epochToTimeString
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
