describe("Anzeige", function(){
    var anzeige

    beforeEach(function(){
        anzeige = new Anzeige();
    })

    it("muss erstellt werden koennen", function(){
        expect(anzeige).toBeTruthy();
    })
})