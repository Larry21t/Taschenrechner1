describe("TaschenrechnerVerarbeitung", function(){
    var taschenrechnerVerarbeitung

    beforeEach(function(){
        taschenrechnerVerarbeitung = new TaschenrechnerVerarbeitung(3, "+", 8) //Taschenrechnerverarbeitung(zahl1, Operator, zahl2)
    })

    it("muss erstellt werden können", function(){
        expect(taschenrechnerVerarbeitung).toBeTruthy()
    })

    it("muss das richtige Resultat ausrechnen", function(){
        taschenrechnerVerarbeitung.perform()
        expect(taschenrechnerVerarbeitung.getResult).toBe(3 + 8)
    })

    

})