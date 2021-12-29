describe("ViewModel", function(){
    var viewModel
    var taste0
    var taste1
    var taste2
    var taste3
    var taste4
    var taste5
    var taste6
    var taste7
    var taste8
    var taste9
    var tasteNegativ
    var tasteKomma
    var tasteQuadrat
    var tasteCE
    var tasteBackspace
    var tasteAddition
    var tasteSubtraktion
    var tasteMultiplikation
    var tasteDivision
    var tasteGleich
    var anzeige

    //für alle Tasten und die Anzeige muss ein SpyObjekt erstellt werden

    

    beforeEach(function(){
        viewModel = new ViewModel()
        viewModel.render() 
    })

    it("muss die Zahlentasten rendern", function(){
        for(var zahl = 0; zahl <=9; zahl++){
            expect(body).toHaveAChildnode("TD", `#taste${zahl}`)
        } 
    })

    it("muss die Negativ-Taste rendern", function(){
        expect(body).toHaveAChildnode("TD", "#tasteNegativ")
    })

    it("muss die Komma-Taste rendern", function(){
        expect(body).toHaveAChildnode("TD", "#tasteKomma")
    })

    it("muss die Quadrat-Taste rendern", function(){
        expect(body).toHaveAChildnode("TD", "#tasteQuadrat")
    })

    it("muss die CE-Taste rendern", function(){
        expect(body).toHaveAChildnode("TD", "#tasteCE")
    })

    it("muss die Backspace-Taste rendern", function(){
        expect(body).toHaveAChildnode("TD", "#tasteBackspace")
    })

    it("muss die Additions-Taste rendern", function(){
        expect(body).toHaveAChildnode("TD", "#tasteAddition")
    })

    it("muss die Subtraktions-Taste rendern", function(){
        expect(body).toHaveAChildnode("TD", "#tasteSubtraktion")
    })

    it("muss die Multiplikations-Taste rendern", function(){
        expect(body).toHaveAChildnode("TD", "#tasteMultiplikation")
    })

    it("muss die Divisions-Taste rendern", function(){
        expect(body).toHaveAChildnode("TD", "#tasteDivision")
    })

    it("muss die Gleich-Taste rendern", function(){
        expect(body).toHaveAChildnode("TD", "#tasteGleich")
    })

    it("muss die Anzeige rendern", function(){
        expect(body).toHaveAChildnode("DIV", "#anzeige")
    })

    //Die Tests oberhalb von hier testen das GUI

    it("muss taschenrechnerverarbeitung.getResult() aufrufen", function(){
        viewModel.onTasteGleichClicked()
        expect(taschenrechnerVerarbeitung.getResult).toHaveBeenCalled()
    })

    it("muss taschenrechnerVerarbeitung.perform() aufrufen", function(){
        viewModel.onTasteGleichClicked()
        expect(taschenrechnerVerarbeitung.perform).toHaveBeenCalled()
    })




    
    
})