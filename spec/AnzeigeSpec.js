describe("Anzeige", function(){
    var anzeige

    beforeEach(function(){
        anzeige = new Anzeige();
    })

    it("muss erstellt werden können", function(){
        expect(anzeige).toBeTruthy();
    })
})