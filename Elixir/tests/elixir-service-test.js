﻿/// uruchomienie testu tylko z konsoli: 
/// karma start --single-run

describe("elixirServiceTest", function () {

    var ElixirService;
    var ElixirData;
    beforeEach(function () {
        module('starter.services');
        module('starter.data');
    });

    beforeEach(inject(function (_ElixirService_, _ElixirData_) {
        ElixirService = _ElixirService_;
        ElixirData = _ElixirData_;
    }));

    it('ElixirData should exist', function () {
        expect(ElixirData).toBeDefined();
    });


    it('ElixirService should exist', function () {
        expect(ElixirService).toBeDefined();
    });
   
    it("calcBankTransfer_today", function () {
        var hour = 13;
        var minute = 25;
        var now = new Date(2016, 5, 10, hour, minute, 0, 0);
        var sel = {
            epoh: (hour * 60 * 60) + (minute * 60),
            now: now,
            date: now,
            bankFrom: ElixirData.getBankById(2), // pko sa
            bankTo: ElixirData.getBankById(4) // mbank
        };

        var ret = ElixirService.calcDate(sel);

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
            bankFrom: ElixirData.getBankById(2), // pko sa
            bankTo: ElixirData.getBankById(4) // mbank
        };

        var ret = ElixirService.calcDate(sel);

        expect(ret).toEqual("jutro o 11:15");
    });

    it("calcBankTransfer_same_bank", function () {
        var hour = 15;
        var minute = 25;
        var now = new Date(2016, 5, 14, hour, minute, 0, 0);
        var sel = {
            epoh: (hour * 60 * 60) + (minute * 60),
            now: now,
            date: now,
            bankFrom: ElixirData.getBankById(4), // mbank
            bankTo: ElixirData.getBankById(4) // mbank
        };

        var ret = ElixirService.calcDate(sel);

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
            bankFrom: ElixirData.getBankById(2), // pko sa
            bankTo: ElixirData.getBankById(4) // mbank
        };

        var ret = ElixirService.calcDate(sel);

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
            bankFrom: ElixirData.getBankById(2), // pko sa
            bankTo: ElixirData.getBankById(4) // mbank
        };

        var ret = ElixirService.calcDate(sel);

        expect(ret).toEqual("w poniedziałek 1 sie o 11:15");
    });
});