class TaschenrechnerVerarbeitung{
    constructor(zahl1, operator, zahl2){
        this.zahl1 = zahl1
        this.zahl2 = zahl2
        this.operator = operator
    }

    perform(){
        if(this.operator == "+"){
            this.result = this.zahl1 + this.zahl2
        }

        
        if(this.operator == "-"){
        this.result = this.zahl1 - this.zahl2
        }
        

        if(this.operator == "*"){
            this.result = this.zahl1 * this.zahl2
        }

        if(this.operator == "/"){
            this.result = this.zahl1 / this.zahl2
        }
    }

    getResult(){
        return this.result
    }
}


