describe("Anzeige", function(){

    it("muss erstellt werden koennen", function(){
        var anzeige = new Anzeige()
        expect(anzeige).toBeTruthy();
    })

    it("muss einen Anzeigetext bekommen koennen", function(){
        var anzeige = new Anzeige()
        anzeige.anzeigeText = "Text fuer Anzeige"
        expect(anzeige.anzeigeText).toBe("Text fuer Anzeige")
    })

    it("muss eine ID bekommen koennen", function(){
        var anzeige = new Anzeige()
        anzeige.anzeigeID = "anzeigeText"
        expect(anzeige.anzeigeElement.id).toBe("anzeigeText")
    })

    it("muss eine Klasse zugewiesen bekommen koennen", function(){
        var anzeige = new Anzeige()
        anzeige.anzeigeClass = "KlassefuerAnzeige"
        expect(anzeige.anzeigeElement.className).toBe("KlassefuerAnzeige")
    })

})