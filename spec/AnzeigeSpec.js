describe("Anzeige", function(){

    it("muss erstellt werden koennen", function(){
        var anzeige = new Anzeige()
        expect(anzeige).toBeTruthy();
    })
})