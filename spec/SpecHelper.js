
beforeEach(function (){
    jasmine.addMatchers({
        toHaveAChildnode: function(){
            return{
                compare: function (zuDurchsuchendesElement, tagNameVonGesuchtemElement, IDVonGesuchtemElement){

                    return{
                        pass:
                        zuDurchsuchendesElement.querySelector(IDVonGesuchtemElement) && tagNameVonGesuchtemElement === zuDurchsuchendesElement.querySelector(IDVonGesuchtemElement).tagName
                    }
                }
            }
        }
    })
})