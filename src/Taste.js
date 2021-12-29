class Taste{
    constructor(){
        this.taste = document.createElement("td")
    }

    /**
     * @param {string} value
     */
    set tastenText(value){
        this.taste.textContent = value
    }

    /**
     * @param {string} value
     */
    set tastenID(value){
        this.taste.id = value
    }

    /**
     * @param {(this: GlobalEventHandlers, ev: MouseEvent) => any} clickFunction
     */
    set onclickFunction(clickFunction){
        this.taste.onclick = clickFunction
    }

    get tastenText(){
        return this.taste.textContent
    }

    get tastenElement(){
        return this.taste
    }
}


