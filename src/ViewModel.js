var textFuerAnzeige = 0
var viewModel
var zahl1
var zahl2
var operator
class ViewModel{  
    render(){
        var body = document.getElementsByTagName("body")[0]
        var taschenrechner = document.getElementById("taschenrechner")
        if(taschenrechner){
            body.removeChild(taschenrechner)
        }
        taschenrechner = document.createElement("div")
        taschenrechner.id = "taschenrechner"
        //Zahlentasten erstellen
        var taste0 = new Taste()
        taste0.tastenText = '0'
        taste0.tastenID = 'taste0'
        taste0.onclickFunction = this.onTasteNumberClicked
        var taste1 = new Taste()
        taste1.tastenText = '1'
        taste1.tastenID = 'taste1'
        taste1.onclickFunction = this.onTasteNumberClicked
        var taste2 = new Taste()
        taste2.tastenText = '2'
        taste2.tastenID = 'taste2'
        taste2.onclickFunction = this.onTasteNumberClicked
        var taste3 = new Taste()
        taste3.tastenText = '3'
        taste3.tastenID = 'taste3'
        taste3.onclickFunction = this.onTasteNumberClicked
        var taste4 = new Taste()
        taste4.tastenText = '4'
        taste4.tastenID = 'taste4'
        taste4.onclickFunction = this.onTasteNumberClicked
        var taste5 = new Taste()
        taste5.tastenText = '5'
        taste5.tastenID = 'taste5'
        taste5.onclickFunction = this.onTasteNumberClicked
        var taste6 = new Taste()
        taste6.tastenText = '6'
        taste6.tastenID = 'taste6'
        taste6.onclickFunction = this.onTasteNumberClicked
        var taste7 = new Taste()
        taste7.tastenText = '7'
        taste7.tastenID = 'taste7'
        taste7.onclickFunction = this.onTasteNumberClicked
        var taste8 = new Taste()
        taste8.tastenText = '8'
        taste8.tastenID = 'taste8'
        taste8.onclickFunction = this.onTasteNumberClicked
        var taste9 = new Taste()
        taste9.tastenText = '9'
        taste9.tastenID = 'taste9'
        taste9.onclickFunction = this.onTasteNumberClicked
        //Negativtaste erstellen
        var tasteNegativ = new Taste()
        tasteNegativ.tastenText = '+/-'
        tasteNegativ.tastenID = 'tasteNegativ'
        tasteNegativ.onclickFunction = this.onTasteNegativClicked
        //Punkttaste erstellen
        var tastePunkt = new Taste()
        tastePunkt.tastenText = '.'
        tastePunkt.tastenID = 'tastePunkt'
        tastePunkt.onclickFunction = this.onTastePunktClicked
        //Gleichtaste erstellen
        var tasteGleich = new Taste()
        tasteGleich.tastenText = '='
        tasteGleich.tastenID = 'tasteGleich'
        tasteGleich.onclickFunction = this.onTasteGleichClicked
        //Operatorentasten erstellen
        var tasteAddition = new Taste()
        tasteAddition.tastenText = '+'
        tasteAddition.tastenID = 'tasteAddition'
        tasteAddition.onclickFunction = this.onTasteOperatorClicked
        var tasteSubtraktion = new Taste()
        tasteSubtraktion.tastenText = '-'
        tasteSubtraktion.tastenID = 'tasteSubtraktion'
        tasteSubtraktion.onclickFunction = this.onTasteOperatorClicked
        var tasteMultiplikation = new Taste()
        tasteMultiplikation.tastenText = '*'
        tasteMultiplikation.tastenID = 'tasteMultiplikation'
        tasteMultiplikation.onclickFunction = this.onTasteOperatorClicked
        var tasteDivision = new Taste()
        tasteDivision.tastenText = '/'
        tasteDivision.tastenID = 'tasteDivision'
        tasteDivision.onclickFunction = this.onTasteOperatorClicked
        //Quadrattaste erstellen
        var tasteQuadrat = new Taste()
        tasteQuadrat.tastenText = 'x2'
        tasteQuadrat.tastenID = 'tasteQuadrat'
        tasteQuadrat.onclickFunction = this.onTasteQuadratClicked
        //CE-Taste erstellen
        var tasteCE = new Taste()
        tasteCE.tastenText = 'CE'
        tasteCE.tastenID = 'tasteCE'
        tasteCE.onclickFunction = this.onTasteCEClicked
        //Backspace-Taste erstellen
        var tasteBackspace = new Taste()
        tasteBackspace.tastenText = '<-'
        tasteBackspace.tastenID = 'tasteBackspace'
        tasteBackspace.onclickFunction = this.onTasteBackspaceClicked
        //Anzeige erstellen
        var anzeige = new Anzeige()
        anzeige.anzeigeText = textFuerAnzeige
        anzeige.anzeigeID = 'anzeige'
        anzeige.anzeigeClass = 'formatFuerAnzeige'

        var row1 = document.createElement("tr")
        row1.appendChild(tasteNegativ.tastenElement)
        row1.appendChild(taste0.tastenElement)
        row1.appendChild(tastePunkt.tastenElement)
        row1.appendChild(tasteGleich.tastenElement)
        var row2 = document.createElement("tr")
        row2.appendChild(taste1.tastenElement)
        row2.appendChild(taste2.tastenElement)
        row2.appendChild(taste3.tastenElement)
        row2.appendChild(tasteAddition.tastenElement)
        var row3 = document.createElement("tr")
        row3.appendChild(taste4.tastenElement)
        row3.appendChild(taste5.tastenElement)
        row3.appendChild(taste6.tastenElement)
        row3.appendChild(tasteSubtraktion.tastenElement)
        var row4 = document.createElement("tr")
        row4.appendChild(taste7.tastenElement)
        row4.appendChild(taste8.tastenElement)
        row4.appendChild(taste9.tastenElement)
        row4.appendChild(tasteMultiplikation.tastenElement)
        var row5 = document.createElement("tr")
        row5.appendChild(tasteQuadrat.tastenElement)
        row5.appendChild(tasteCE.tastenElement)
        row5.appendChild(tasteBackspace.tastenElement)
        row5.appendChild(tasteDivision.tastenElement)
        taschenrechner.appendChild(anzeige.anzeigeElement)
        taschenrechner.appendChild(row5)
        taschenrechner.appendChild(row4)
        taschenrechner.appendChild(row3)
        taschenrechner.appendChild(row2)
        taschenrechner.appendChild(row1)
        body.appendChild(taschenrechner)
    }

    onTasteNumberClicked(){
        viewModel = new ViewModel()
        textFuerAnzeige = textFuerAnzeige.toString() 
        if(textFuerAnzeige === '0'){
            if(this.textContent != '0'){ //sonst gibt es Zahlen mit vorangestellten Nullen, wie z.B. 0894
                textFuerAnzeige = this.textContent 
            } 
        }
        else{
            if(textFuerAnzeige.length < 9){
                textFuerAnzeige = textFuerAnzeige + this.textContent
            }
        }
        viewModel.render()
    }

    onTasteNegativClicked(){
        viewModel = new ViewModel()
        textFuerAnzeige = textFuerAnzeige.toString()                    //String wird beim Rechnen in Integer umgewandelt, anschliessend kann nicht ein Integer mit includes() überprüft werden,
        if(textFuerAnzeige != '0' && !textFuerAnzeige.includes('-')){     //deshalb muss der Integer(), also eine Zahl in einen String umgewandelt werden, dasselbe bei onTasteBackspaceClicked().
            textFuerAnzeige = '-' + textFuerAnzeige
        }
        else{
            if(textFuerAnzeige.includes('-')){
                textFuerAnzeige = textFuerAnzeige.substring(1)
            }
        }
        viewModel.render()
    }

    onTastePunktClicked(){
        viewModel = new ViewModel()
        textFuerAnzeige = textFuerAnzeige.toString()  
        if(textFuerAnzeige.includes(this.textContent)){

        } 
        else{
            textFuerAnzeige = textFuerAnzeige + this.textContent
            viewModel.render()
        }  
    }

    onTasteGleichClicked(){
        viewModel = new ViewModel()
        zahl2 = textFuerAnzeige
        var taschenrechnerVerarbeitung = new TaschenrechnerVerarbeitung(zahl1, operator, zahl2)
        taschenrechnerVerarbeitung.perform()
        textFuerAnzeige = taschenrechnerVerarbeitung.getResult()
        if(operator == undefined){ 
            textFuerAnzeige = zahl2 
        }
        operator = undefined
        viewModel.render()
    }

    onTasteOperatorClicked(){
        zahl1 = textFuerAnzeige
        operator = this.textContent
        textFuerAnzeige = 0
    }

    onTasteQuadratClicked(){
        viewModel = new ViewModel()
        zahl2 = textFuerAnzeige
        if(operator === undefined){
            operator = '*'
        }
        else{
            var alterOperator = operator
            operator = '*'
        }
        var taschenrechnerVerarbeitung = new TaschenrechnerVerarbeitung(zahl2, operator, zahl2)
        taschenrechnerVerarbeitung.perform()
        textFuerAnzeige = taschenrechnerVerarbeitung.getResult()
        operator = alterOperator
        viewModel.render()
    }

    onTasteCEClicked(){
        textFuerAnzeige = 0
        zahl1 = undefined
        zahl2 = undefined
        operator = undefined
        viewModel.render()
    }

    onTasteBackspaceClicked(){
        textFuerAnzeige = textFuerAnzeige.toString()
        textFuerAnzeige = textFuerAnzeige.substring(0, textFuerAnzeige.length -1)
        viewModel.render()
    }


    //evtl. könnte man render() verbessern indem man ein Array für alle Zahlentasten macht und anschliessend mit forEach() oder einer Schleife die Eigenschaften der Zahlentasten festlegt
    //sonst muss für jede Taste einzeln immer new Taste() gemacht und die Eigenschaften festgelegt werden.

}