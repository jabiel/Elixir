/// uruchomienie testu tylko z konsoli: 
/// karma start --single-run

describe("elixirDataTest", function () {
    
    var ElixirData;
    beforeEach(function () {
        module('starter.data');
    });

    beforeEach(inject(function (_ElixirData_) {
        ElixirData = _ElixirData_;
    }));


    it('ElixirData should exist', function () {
        expect(ElixirData).toBeDefined();
    });


    
    it("getAllBankData", function () {
        var bankData = ElixirData.getBanks();
        
        expect(bankData).toBeDefined();
        expect(bankData.length).toBeGreaterThan(10);
    });

    it("getBankById", function () {
        var bankData = ElixirData.getBankById(2); // pko
        console.log('bankData', bankData);
        expect(bankData).toBeDefined();
    });

    it("getBankById is null", function () {
        var bankData = ElixirData.getBankById(9873); 
        expect(bankData).toBeNull();
    });
    
});