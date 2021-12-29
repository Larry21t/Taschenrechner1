class ViewModel{
    render(){
        var body = document.getElementsByTagName("body")[0]
        // var taste0
        // var taste1
        // var taste2
        // var taste3
        // var taste4
        // var taste5
        // var taste6
        // var taste7
        // var taste8
        // var taste9
        // var zahlenTasten = [taste0, taste1, taste2, taste3, taste4, taste5, taste6, taste7, taste8, taste9]
        var taschenrechner = document.getElementById("taschenrechner")
        if(taschenrechner){
            body.removeChild(taschenrechner)
        }
        taschenrechner = document.createElement("div")
        taschenrechner.id = "taschenrechner"
        // zahlenTasten.forEach(element => this.eigenschaftenZahlentastenSetzen(element, taschenrechner))
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

    // eigenschaftenZahlentastenSetzen(element, taschenrechner){
    //     element = new Taste()
    //     element.tastenText = `6`
    //     element.tastenID = `${element.tastenText}`
    //     element.onclickFunction = this.onTasteNumberClicked
    //     taschenrechner.appendChild(element.tastenElement)
    // }

    onTasteNumberClicked(){
        
    }

    //wie könnte man es verbessern, damit man nicht für jede einzelne Zahlentaste die Eigenschaften separat eingeben muss? Evtl. mit einem Array und forEach()

}