class Anzeige{
    constructor(){
        this.anzeige = document.createElement("div")
    }
    
    set anzeigeText(value){
        this.anzeige.textContent = value
    }
    set anzeigeID(value){
        this.anzeige.id = value
    }

    set anzeigeClass(value){
        this.anzeige.className = value
    }
    
    get anzeigeText(){
        return this.anzeige.textContent
    }

    get anzeigeElement(){
        return this.anzeige
    }
}