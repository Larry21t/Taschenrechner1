describe("ViewModel", function(){
    var viewModel
    var body = document.getElementsByTagName("body")[0]


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

    it("muss die Punkt-Taste rendern", function(){
        expect(body).toHaveAChildnode("TD", "#tastePunkt")
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

    // it("muss taschenrechnerVerarbeitung.perform() aufrufen, wenn man auf das Gleich klickt", function(){
    //     viewModel.onTasteGleichClicked()
    //     expect(taschenrechnerVerarbeitung.perform).toHaveBeenCalled()
    // })

    // it("muss taschenrechnerVerarbeitung.getResult() aufrufen, wenn man auf das Gleich klickt", function(){
    //     viewModel.onTasteGleichClicked()
    //     expect(taschenrechnerVerarbeitung.getResult).toHaveBeenCalled()
    // })

    // it("muss taschenrechnerVerarbeitung.perform() aufrufen, wenn man auf die Quadrat-Taste klickt", function(){
    //     viewModel.onTasteQuadratClicked()
    //     expect(taschenrechnerVerarbeitung.perform).toHaveBeenCalled()
    // })

    // it("muss taschenrechnerVerarbeitung.getResult() aufrufen, wenn man auf die Quadrat-Taste klickt", function(){
    //     viewModel.onTasteQuadratClicked()
    //     expect(taschenrechnerVerarbeitung.getResult).toHaveBeenCalled()
    // })

})