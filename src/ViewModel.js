class ViewModel{
    render(){
        var body = document.getElementsByTagName("body")[0]
       
        var taschenrechner = document.getElementById("taschenrechner")
        if(taschenrechner){
            body.removeChild(taschenrechner)
        }
        taschenrechner = document.createElement("div")
        taschenrechner.id = "taschenrechner"
        
        var taste0 = new Taste()
        taste0.tastenText = '0'
        taste0.tastenID = 'taste0'
        taste0.onclickFunction = this.onTasteNumberClicked
        var taste1 = new Taste()
        taste1.tastenText = '1'
        taste1.tastenID = 'taste1'
        taste1.onclickFunction = this.onTasteNumberClicked
        taschenrechner.appendChild(taste0.tastenElement)
        taschenrechner.appendChild(taste1.tastenElement)
        body.appendChild(taschenrechner)
    }

    //evtl. könnte man render() verbessern indem man ein Array für alle Zahlentasten macht und anschliessend mit forEach() oder einer Schleife die Eigenschaften der Zahlentasten festlegt
    //sonst muss für jede Taste einzeln immer new Taste() gemacht und die Eigenschaften festgelegt werden.

    onTasteNumberClicked(){
        
    }

    
}