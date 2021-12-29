describe("Taste", function(){
    var taste

    beforeEach(function(){
        taste = new Taste()
    })

    it("muss erstellt werden können", function(){
        expect(taste).toBeTruthy()
    })
})