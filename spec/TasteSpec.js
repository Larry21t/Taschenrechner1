describe("Taste", function(){
    
    it("muss erstellt werden koennen", function(){
        var taste = new Taste()
        expect(taste).toBeTruthy()
    })

    it("muss einen Tastentext bekommen koennen", function(){
        var taste = new Taste()
        taste.tastenText = "Text auf Taste"
        expect(taste.tastenText).toBe("Text auf Taste")
    })

    it("muss eine ID bekommen koennen", function(){
        var taste = new Taste()
        taste.tastenID = "tasteID"
        expect(taste.tastenElement.id).toBe("tasteID")
    })

    it("muss eine onclick-Function zugewiesen bekommen koennen", function(){
        var viewModel = jasmine.createSpyObj('Viewmodel', {
            onTasteNumberClicked: undefined
        })
        var taste = new Taste()
        taste.onclickFunction = viewModel.onTasteNumberClicked
        taste.tastenElement.click() 
        expect(viewModel.onTasteNumberClicked).toHaveBeenCalled()
    })
})