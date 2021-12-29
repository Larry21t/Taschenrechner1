describe("Taste", function(){
    var taste

    beforeEach(function(){
        taste = new Taste()
    })

    it("muss erstellt werden koennen", function(){
        expect(taste).toBeTruthy()
    })
})