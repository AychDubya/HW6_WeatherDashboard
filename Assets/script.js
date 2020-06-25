var SearchAndButtonsDiv = $("#SearchButtons")
var searchBtn = $(".searchBtn")
var cityInput = $(".cityInput")



searchBtn.click(function(event){
    event.preventDefault()
    var cityToSearch =  cityInput.val()
     
    var myRow = $("<div>")
    myRow.attr("class","row")

    var newButton = $("<button>")
    newButton.text(cityToSearch)
    newButton.attr("class","col-5 btn btn-primary mt-2")

    myRow.append(newButton)

    SearchAndButtonsDiv.append(myRow)
})
