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

    //Die Tests oberhalb von hier testen ob das GUI korrekt gerendert wurde
    it("muss Zahlen in die Anzeige schreiben koennen", function(){
        var viewModel = new ViewModel()
        viewModel.render()
        expect(anzeige.textContent).toBe('0')
        var taste0 = new Taste()
        taste0.onclickFunction = viewModel.onTasteNumberClicked
        taste0.tastenText = '0'
        taste0.clickOn()
        expect(anzeige.textContent).toBe('0')
        var taste1 = new Taste()
        taste1.onclickFunction = viewModel.onTasteNumberClicked
        taste1.tastenText = '1'
        taste1.clickOn()
        expect(anzeige.textContent).toBe('1')
        var taste2 = new Taste()
        taste2.onclickFunction = viewModel.onTasteNumberClicked
        taste2.tastenText = '2'
        taste2.clickOn()
        expect(anzeige.textContent).toBe('12')
        var tastePunkt = new Taste()
        tastePunkt.onclickFunction = viewModel.onTastePunktClicked
        tastePunkt.tastenText = '.'
        tastePunkt.clickOn()
        expect(anzeige.textContent).toBe('12.')
        taste1.clickOn()
        expect(anzeige.textContent).toBe('12.1')
        var tasteNegativ = new Taste()
        tasteNegativ.onclickFunction = viewModel.onTasteNegativClicked
        tasteNegativ.tastenText = '-'
        tasteNegativ.clickOn()
        expect(anzeige.textContent).toBe('-12.1')
        zahl1 = undefined //werden auf undefinded gesetzt, weil sonst noch irgendwelche Werte darin gespeichert sind und evtl. mit diesen weitergerechnet wird, wenn die Specs alle durchlaufen sind
        zahl2 = undefined
        zahl3 = undefined
        operator = undefined
        operator2 = undefined
        textFuerAnzeige = 0
        viewModel.render()
    })

    it("muss die Anzeige leeren und auf Null setzen koennen", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        var taste1 = new Taste()
        taste1.onclickFunction = viewModel.onTasteNumberClicked
        taste1.tastenText = '1'
        taste1.clickOn()
        expect(anzeige.textContent).toBe('1')
        var tasteCE = new Taste()
        tasteCE.onclickFunction = viewModel.onTasteCEClicked
        tasteCE.clickOn()
        expect(anzeige.textContent).toBe('0')
        zahl1 = undefined 
        zahl2 = undefined
        zahl3 = undefined
        operator = undefined
        operator2 = undefined
        textFuerAnzeige = 0
        viewModel.render()
    })

    it("muss das Resultat in der Anzeige anzeigen koennen", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        var taste5 = new Taste()
        taste5.onclickFunction = viewModel.onTasteNumberClicked
        taste5.tastenText = '5'
        taste5.clickOn()
        expect(anzeige.textContent).toBe('5')
        var tasteOperator = new Taste()
        tasteOperator.onclickFunction = viewModel.onTasteOperatorClicked
        tasteOperator.tastenText = '*'
        tasteOperator.clickOn()
        expect(anzeige.textContent).toBe('5')
        var taste3 = new Taste()
        taste3.onclickFunction = viewModel.onTasteNumberClicked
        taste3.tastenText = '3'
        taste3.clickOn()
        expect(anzeige.textContent).toBe('3')
        var tasteGleich = new Taste()
        tasteGleich.onclickFunction = viewModel.onTasteGleichClicked
        tasteGleich.clickOn()
        expect(anzeige.textContent).toBe('15')
        tasteOperator.tastenText = '+'
        tasteOperator.clickOn()
        expect(anzeige.textContent).toBe('15')
        taste5.clickOn()
        expect(anzeige.textContent).toBe('5')
        var tasteQuadrat = new Taste()
        tasteQuadrat.onclickFunction = viewModel.onTasteQuadratClicked
        tasteQuadrat.clickOn()
        expect(anzeige.textContent).toBe('25')
        tasteGleich.clickOn()
        expect(anzeige.textContent).toBe('40')
        tasteGleich.clickOn()
        expect(anzeige.textContent).toBe('40')
        zahl1 = undefined 
        zahl2 = undefined
        zahl3 = undefined
        operator = undefined
        operator2 = undefined
        textFuerAnzeige = 0
        viewModel.render()
    })

    it("muss das Quadrat einer Zahl in der Anzeige anzeigen koennen", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        var taste3 = new Taste()
        taste3.onclickFunction = viewModel.onTasteNumberClicked
        taste3.tastenText = '3'
        taste3.clickOn()
        expect(anzeige.textContent).toBe('3')
        var tasteQuadrat = new Taste()
        tasteQuadrat.onclickFunction = viewModel.onTasteQuadratClicked
        tasteQuadrat.clickOn()
        expect(anzeige.textContent).toBe('9')
        tasteQuadrat.clickOn()
        expect(anzeige.textContent).toBe('81')
        var tasteGleich = new Taste()
        tasteGleich.onclickFunction = viewModel.onTasteGleichClicked
        tasteGleich.clickOn()
        expect(anzeige.textContent).toBe('81')
        zahl1 = undefined 
        zahl2 = undefined
        zahl3 = undefined
        operator = undefined
        operator2 = undefined
        textFuerAnzeige = 0
        viewModel.render()
    })

    it("muss die zuletzt eingegebene Ziffer loeschen koennen", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        var taste2 = new Taste()
        taste2.onclickFunction = viewModel.onTasteNumberClicked
        taste2.tastenText = '2'
        taste2.clickOn()
        expect(anzeige.textContent).toBe('2')
        var taste3 = new Taste()
        taste3.onclickFunction = viewModel.onTasteNumberClicked
        taste3.tastenText = '3'
        taste3.clickOn()
        expect(anzeige.textContent).toBe('23')
        var tasteBackspace = new Taste()
        tasteBackspace.onclickFunction = viewModel.onTasteBackspaceClicked
        tasteBackspace.clickOn()
        expect(anzeige.textContent).toBe('2')
        zahl1 = undefined 
        zahl2 = undefined
        zahl3 = undefined
        operator = undefined
        operator2 = undefined
        textFuerAnzeige = 0
        viewModel.render()
    })

    it("muss das Resultat von mehr als 2 Zahlen, die miteinander verechnet worden sind, anzeigen koennen", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        var taste2 = new Taste()
        taste2.onclickFunction = viewModel.onTasteNumberClicked
        taste2.tastenText = '2'
        taste2.clickOn()
        expect(anzeige.textContent).toBe('2')
        var tasteOperator = new Taste()
        tasteOperator.onclickFunction = viewModel.onTasteOperatorClicked
        tasteOperator.tastenText = '+'
        tasteOperator.clickOn()
        expect(anzeige.textContent).toBe('2')
        var taste5 = new Taste()
        taste5.onclickFunction = viewModel.onTasteNumberClicked
        taste5.tastenText = '5'
        taste5.clickOn()
        expect(anzeige.textContent).toBe('5')
        tasteOperator.clickOn()
        expect(anzeige.textContent).toBe('7')
        taste2.clickOn()
        expect(anzeige.textContent).toBe('2')
        tasteOperator.clickOn()
        expect(anzeige.textContent).toBe('9')
        taste5.clickOn()
        expect(anzeige.textContent).toBe('5')
        var tasteGleich = new Taste()
        tasteGleich.onclickFunction = viewModel.onTasteGleichClicked
        tasteGleich.clickOn()
        expect(anzeige.textContent).toBe('14')
        zahl1 = undefined 
        zahl2 = undefined
        zahl3 = undefined
        operator = undefined
        operator2 = undefined
        textFuerAnzeige = 0
        viewModel.render()
    })

    it("muss Punkt-Vor-Strich beachten", function(){
        var viewModel = new ViewModel()
        viewModel.render() 
        var taste7 = new Taste()
        taste7.onclickFunction = viewModel.onTasteNumberClicked
        taste7.tastenText = '7'
        taste7.clickOn()
        expect(anzeige.textContent).toBe('7')
        var tasteOperator = new Taste()
        tasteOperator.onclickFunction = viewModel.onTasteOperatorClicked
        tasteOperator.tastenText = '+'
        tasteOperator.clickOn()
        expect(anzeige.textContent).toBe('7')
        var taste5 = new Taste()
        taste5.onclickFunction = viewModel.onTasteNumberClicked
        taste5.tastenText = '5'
        taste5.clickOn()
        expect(anzeige.textContent).toBe('5')
        tasteOperator.tastenText = '*'
        tasteOperator.clickOn()
        expect(anzeige.textContent).toBe('5')
        taste7.clickOn()
        expect(anzeige.textContent).toBe('7')
        taste5.clickOn()
        expect(anzeige.textContent).toBe('75')
        tasteOperator.tastenText = '-'
        tasteOperator.clickOn()
        var taste6 = new Taste()
        taste6.onclickFunction = viewModel.onTasteNumberClicked
        taste6.tastenText = '6'
        taste6.clickOn()
        expect(anzeige.textContent).toBe('6')
        tasteOperator.tastenText = '/'
        tasteOperator.clickOn()
        var taste3 = new Taste()
        taste3.onclickFunction = viewModel.onTasteNumberClicked
        taste3.tastenText = '3'
        taste3.clickOn()
        expect(anzeige.textContent).toBe('3')
        var tasteGleich = new Taste()
        tasteGleich.onclickFunction = viewModel.onTasteGleichClicked
        tasteGleich.clickOn()
        expect(anzeige.textContent).toBe('380')
        tasteOperator.tastenText = '/'
        tasteOperator.clickOn()
        expect(anzeige.textContent).toBe('380')
        var taste1 = new Taste()
        taste1.onclickFunction = viewModel.onTasteNumberClicked
        taste1.tastenText = '1'
        taste1.clickOn()
        expect(anzeige.textContent).toBe('1')
        var taste0 = new Taste()
        taste0.onclickFunction = viewModel.onTasteNumberClicked
        taste0.tastenText = '0'
        taste0.clickOn()
        expect(anzeige.textContent).toBe('10')
        tasteOperator.tastenText = '+'
        tasteOperator.clickOn()
        expect(anzeige.textContent).toBe('38')
        taste3.clickOn()
        expect(anzeige.textContent).toBe('3')
        tasteOperator.tastenText = '*'
        tasteOperator.clickOn()
        expect(anzeige.textContent).toBe('3')
        taste5.clickOn()
        expect(anzeige.textContent).toBe('5')
        taste0.clickOn()
        expect(anzeige.textContent).toBe('50')
        tasteOperator.tastenText = '-'
        tasteOperator.clickOn()
        expect(anzeige.textContent).toBe('188')
        taste7.clickOn()
        expect(anzeige.textContent).toBe('7')
        tasteGleich.clickOn()
        expect(anzeige.textContent).toBe('181')

        zahl1 = undefined 
        zahl2 = undefined
        zahl3 = undefined
        operator = undefined
        operator2 = undefined
        textFuerAnzeige = 0
        viewModel.render()
    })

  
})