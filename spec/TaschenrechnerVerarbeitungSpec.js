describe("TaschenrechnerVerarbeitung", function(){

    it("muss erstellt werden koennen", function(){
        var taschenrechnerVerarbeitung = new TaschenrechnerVerarbeitung(3, "+", 8)
        expect(taschenrechnerVerarbeitung).toBeTruthy()
    })

    it("muss addieren koennen", function(){
        var taschenrechnerVerarbeitung = new TaschenrechnerVerarbeitung(3, "+", 8)
        taschenrechnerVerarbeitung.perform()
        expect(taschenrechnerVerarbeitung.getResult()).toBe(3 + 8)
    })

    it("muss subtrahieren koennen", function(){
        var taschenrechnerVerarbeitung = new TaschenrechnerVerarbeitung(3, "-", 8)
        taschenrechnerVerarbeitung.perform()
        expect(taschenrechnerVerarbeitung.getResult()).toBe(3 - 8)
    })

    it("muss multiplizieren koennen", function(){
        var taschenrechnerVerarbeitung = new TaschenrechnerVerarbeitung(3, "*", 8)
        taschenrechnerVerarbeitung.perform()
        expect(taschenrechnerVerarbeitung.getResult()).toBe(3 * 8)
    })

    it("muss dividieren koennen", function(){
        var taschenrechnerVerarbeitung = new TaschenrechnerVerarbeitung(3, "/", 8)
        taschenrechnerVerarbeitung.perform()
        expect(taschenrechnerVerarbeitung.getResult()).toBe(3 / 8)
    })


})