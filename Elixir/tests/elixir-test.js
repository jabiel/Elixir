/// uruchomienie testu tylko z konsoli: 
/// karma start --single-run

describe("elixirTest", function () {

    var ElixirSrv;
    
    beforeEach(function () {
        module('starter.services');
    });

    beforeEach(inject(function (_ElixirSrv_) {
        ElixirSrv = _ElixirSrv_;
    }));
    
    it("getAllBankData", function () {
        var bankData = ElixirSrv.getBanks();

        expect(bankData).toBeDefined();
        expect(bankData.length).toBeGreaterThan(10);
    });

    it("calcBankTransfer_today", function () {
        var hour = 13;
        var minute = 25;
        var now = new Date(2016, 5, 10, hour, minute, 0, 0);
        var sel = {
            epoh: (hour * 60 * 60) + (minute * 60),
            now: now,
            date: now,
            bankFrom: ElixirSrv.get(2), // pko sa
            bankTo: ElixirSrv.get(4) // mbank
        };

        var ret = ElixirSrv.calcDate(sel);

        expect(ret).toEqual("dzisiaj o 18:15");
    });


    it("calcBankTransfer_tomorrow", function () {
        var hour = 15;
        var minute = 25;
        var now = new Date(2016, 5, 14, hour, minute, 0, 0);
        var sel = {
            epoh: (hour * 60 * 60) + (minute * 60),
            now: now,
            date: now,
            bankFrom: ElixirSrv.get(2), // pko sa
            bankTo: ElixirSrv.get(4) // mbank
        };

        var ret = ElixirSrv.calcDate(sel);

        expect(ret).toEqual("jutro o 12:00");
    });

    it("calcBankTransfer_same_bank", function () {
        var hour = 15;
        var minute = 25;
        var now = new Date(2016, 5, 14, hour, minute, 0, 0);
        var sel = {
            epoh: (hour * 60 * 60) + (minute * 60),
            now: now,
            date: now,
            bankFrom: ElixirSrv.get(4), // mbank
            bankTo: ElixirSrv.get(4) // mbank
        };

        var ret = ElixirSrv.calcDate(sel);

        expect(ret).toEqual("w ciągu kilku minut");
    });

    it("calcBankTransfer_setdate", function () {
        var hour = 13;
        var minute = 25;
        var now = new Date(2016, 5, 10, hour, minute, 0, 0);
        var sel = {
            epoh: (hour * 60 * 60) + (minute * 60),
            now: new Date(2016, 1, 1, hour, minute, 0, 0),
            date: now,
            bankFrom: ElixirSrv.get(2), // pko sa
            bankTo: ElixirSrv.get(4) // mbank
        };

        var ret = ElixirSrv.calcDate(sel);

        expect(ret).toEqual("10 cze o 18:15");
    });

    it("calcBankTransfer_end_of_month", function () {
        var hour = 16;
        var minute = 25;
        var now = new Date(2016, 6, 29, hour, minute, 0, 0);
        var sel = {
            epoh: (hour * 60 * 60) + (minute * 60),
            now: now,
            date: now,
            bankFrom: ElixirSrv.get(2), // pko sa
            bankTo: ElixirSrv.get(4) // mbank
        };

        var ret = ElixirSrv.calcDate(sel);

        expect(ret).toEqual("w poniedziałek 1 sie o 12:00");
    });
});