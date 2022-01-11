describe("ViewModel", function(){
    var body = document.getElementsByTagName("body")[0]


    it("muss die Zahlentasten rendern", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        for(var zahl = 0; zahl <=9; zahl++){
            expect(body).toHaveAChildnode("TD", `#taste${zahl}`)
        } 
    })

    it("muss die Negativ-Taste rendern", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        expect(body).toHaveAChildnode("TD", "#tasteNegativ")
    })

    it("muss die Punkt-Taste rendern", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        expect(body).toHaveAChildnode("TD", "#tastePunkt")
    })

    it("muss die Quadrat-Taste rendern", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        expect(body).toHaveAChildnode("TD", "#tasteQuadrat")
    })

    it("muss die CE-Taste rendern", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        expect(body).toHaveAChildnode("TD", "#tasteCE")
    })

    it("muss die Backspace-Taste rendern", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        expect(body).toHaveAChildnode("TD", "#tasteBackspace")
    })

    it("muss die Additions-Taste rendern", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        expect(body).toHaveAChildnode("TD", "#tasteAddition")
    })

    it("muss die Subtraktions-Taste rendern", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        expect(body).toHaveAChildnode("TD", "#tasteSubtraktion")
    })

    it("muss die Multiplikations-Taste rendern", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        expect(body).toHaveAChildnode("TD", "#tasteMultiplikation")
    })

    it("muss die Divisions-Taste rendern", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        expect(body).toHaveAChildnode("TD", "#tasteDivision")
    })

    it("muss die Gleich-Taste rendern", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        expect(body).toHaveAChildnode("TD", "#tasteGleich")
    })

    it("muss die Anzeige rendern", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        expect(body).toHaveAChildnode("DIV", "#anzeige")
    })

    //Die Tests oberhalb von hier testen das GUI


})