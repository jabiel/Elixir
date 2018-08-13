angular.module('starter.data', [])
    // https://www.mbank.pl/pomoc/info/konta/sesje-przelewow-dla-klientow-detalicznych.html
    // https://www.getinbank.pl/dokument/Zasady-realizacji-przelewow.pdf
    // https://www.ideabank.pl/pomoc-w-obsludze
    // https://www.bankbps.pl/godziny-graniczne-realizacji-przelewow
    .factory('ElixirData', function () {
        var banks = [{
            id: 1,
            name: "PKO BP",
            outs: ["08:00", "11:45", "14:30"],
            ins: ["11:30", "15:10", "17:30"]
        }, {
            id: 2,
            name: "Pekao SA",
            outs: ["08:30", "12:30", "15:00"],
            ins: ["11:00", "15:00", "17:30"]
        }, {
            id: 3,
            name: "Bank Zachodni WBK",
            outs: ["08:15", "12:15", "14:45"],
            ins: ["18:00", "18:00", "18:00"]
        }, {
            id: 4,
            name: "mBank", 
            outs: ["05:55", "09:55", "13:25"],
            ins: ["11:15", "15:00", "18:15"]
        }, {
            id: 5,
            name: "Idea Bank",
            outs: ["07:30", "12:15", "15:00"],
            ins: ["10:30", "14:30", "16:30"]
        }, {
            id: 6,
            name: "Alior Bank",
            outs: ["8:20", "12:20", " 15:10"],
            ins: ["12:00", "15:30", "17:30"]
        }, {
            id: 7,
            name: "Getin Bank", 
            outs: ["08:15", "12:15", "14:30"],
            ins: ["10:00", "14:00", "17:00"]
        }, {
            id: 8,
            name: "Credit Agricole",
            outs: ["14:30"],
            ins: ["12:00", "16:00", "18:00"]
        }, {
            id: 9,
            name: "Millennium",
            outs: ["8:10", "12:10", "14:30"],
            ins: ["12:00", "15:30", "17:15"]
        }, {
            id: 10,
            name: "BGŻ BNP Paribas",
            outs: ["08:00", "11:45", "14:15"],
            ins: ["12:00", "15:00", "18:00"]
        }, {
            id: 11,
            name: "Pocztowy",
            outs: ["09:00", "13:00", "15:00"],
            ins: ["11:00", "15:00", "17:30"]
        }, {
            id: 12,
            name: "Eurobank",
            outs: ["7:30", "11:30", "14:30"],
            ins: ["11:00", "15:00", "17:00"]
        }, {
            id: 13,
            name: "Citi Handlowy",
            outs: ["08:00", "12:15", "15:30"],
            ins: ["10:30", "14:30", "17:30"]
        }, {
            id: 14,
            name: "Raiffeisen Polbank",
            outs: ["08:00", "12:15", "15:00"],
            ins: ["11:30", "15:15", "18:00"]
        }, {
            id: 15,
            name: "Deutsche Bank",
            outs: ["07:45", "12:00", "15:00"],
            ins: ["12:00", "16:00", "17:30"]
        }, {
            id: 16,
            name: "BOŚ Bank",
            outs: ["08:35", "12:35", "15.00"],
            ins: ["11:00", "15:00", "17:30"]
        }, {
            id: 17,
            name: "BNP Paribas Bank",
            outs: ["08:00", "11:45", "14:15"],
            ins: ["11:00", "14:30", "17:00"]
        }, {
            id: 18,
            name: "Nordea Bank",
            outs: ["08:30", "11:50", "14:30"],
            ins: ["10:45", "14:45", "17:15"]
        }, {
            id: 19,
            name: "BPS",
            outs: ["08:30", "12:00", "14:00"],
            ins: ["12:00", "16:00", "18:00"]
        }, {
            id: 20,
            name: "SGB Bank",
            outs: ["08:30", "12:30", "15:30"],
            ins: ["11:30", "15:30", "17:30"]
        }, {
            id: 22,
            name: "ING Bank Śląski",
            outs: ["08:10", "11:30", "14:30"],
            ins: ["11:00", "15:00", "17:30"]
        }, {
            id: 24,
            name: "Inteligo",
            outs: ["08:00", "11:45", "14:30"],
            ins: ["11:30", "15:10", "17:30"]
        }, {
            id: 26,
            name: "Plus Bank",
            outs: ["08:00", "11:30", "14:00"],
            ins: ["12:00", "15:30", "18:00"]
        }, {
            id: 28,
            name: "Toyota Bank",
            outs: ["08:10", "12:10", "14:40"],
            ins: ["10:30", "14:30", "16:30"]
        }, {
            id: 30,
            name: "Nest Bank (Smart)",
            outs: ["08:00", "11:30", "14:00"],
            ins: ["11:30", "15:30", "17:30"]
        }, {
            id: 31,
            name: "T-Mobile Bank",
            outs: ["08:20", "12:20", "15:10"],
            ins: ["11:30", "15:30", "17:30"]
        }, {
            id: 32,
            name: "VW Bank",
            outs: ["07:55", "11:45", "14:15"],
            ins: ["12:00", "16:00", "18:00"]
        }, {
            id: 33,
            name: "BPH",
            outs: ["10:30", "14:30", "17:00"],
            ins: ["11:45", "15:45", "17:00"]
        }, {
            id: 34,
            name: "Biz Bank",
            outs: ["08:30", "11:30", "14:00"],
            ins: ["11:30", "15:30", "17:30"]
        }, {
            id: 35,
            name: "BGK",
            outs: ["08:45", "12:00", "15:10"],
            ins: ["10:30", "14:30", "17:00"]
        }, {
            id: 36,
            name: "DNB Bank",
            outs: ["08:30", "12:30", "15:00"],
            ins: ["11:00", "15:00", "17:30"]
        }, {
            id: 37,
            name: "HSBC Bank Polska",
            outs: ["08:00", "12:00", "14:30"],
            ins: ["10:00", "14:00", "16:00"]
        }, {
            id: 38,
            name: "Santander Consumer Bank",
            outs: ["09:00", "13:30", "16:00"],
            ins: ["11:00", "15:00", "17:00"]
        }, {
            id: 39,
            name: "Kasa Stefczyka",
            outs: ["06:00", "08:30", "12:30"],
            ins: ["11:00", "15:00", "17:30"]
        }, {
            id: 40,
            name: "Pekao Bank Hipoteczny",
            outs: ["08:30", "10:30", "13:30"],
            ins: ["11:30", "15:00", "17:30"]
        }, {
            id: 41,
            name: "Noble Bank",
            outs: ["08:15", "12:15", "14:30"],
            ins: ["10:00", "14:00", "17:00"]
        }, {
            id: 42,
            name: "neoBank",
            outs: ["08:30", "12:30", "14:30"],
            ins: ["12:00", "15:00", "17:40"]
        }];

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
            getBankById: function (chatId) {
                for (var i = 0; i < banks.length; i++) {
                    if (banks[i].id === parseInt(chatId)) {
                        return banks[i];
                    }
                }
                return null;
            }
        }
    });
