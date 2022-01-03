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
        
        

        taschenrechner.appendChild(tasteNegativ.tastenElement)
        taschenrechner.appendChild(taste0.tastenElement)
        taschenrechner.appendChild(tastePunkt.tastenElement)
        taschenrechner.appendChild(tasteGleich.tastenElement)
        taschenrechner.appendChild(taste1.tastenElement)
        taschenrechner.appendChild(taste2.tastenElement)
        taschenrechner.appendChild(taste3.tastenElement)
        taschenrechner.appendChild(tasteAddition.tastenElement)
        taschenrechner.appendChild(taste4.tastenElement)
        taschenrechner.appendChild(taste5.tastenElement)
        taschenrechner.appendChild(taste6.tastenElement)
        taschenrechner.appendChild(tasteSubtraktion.tastenElement)
        taschenrechner.appendChild(taste7.tastenElement)
        taschenrechner.appendChild(taste8.tastenElement)
        taschenrechner.appendChild(taste9.tastenElement)
        taschenrechner.appendChild(tasteMultiplikation.tastenElement)
        body.appendChild(taschenrechner)
    }

    onTasteNumberClicked(){
        
    }

    onTasteNegativClicked(){
        
    }

    onTastePunktClicked(){

    }

    onTasteGleichClicked(){

    }

    onTasteOperatorClicked(){

    }

    //evtl. könnte man render() verbessern indem man ein Array für alle Zahlentasten macht und anschliessend mit forEach() oder einer Schleife die Eigenschaften der Zahlentasten festlegt
    //sonst muss für jede Taste einzeln immer new Taste() gemacht und die Eigenschaften festgelegt werden.

}