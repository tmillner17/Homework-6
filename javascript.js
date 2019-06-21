let queryURl = "https://api.giphy.com/v1/gifs/trending?api_key=jxV0GXF04Xz5KhzxZh8OYW3080cEtgnk"
let mySports = ["football", 'baseball', "basketball", "wrestling"]
$.ajax({
    url: queryURl,
    method: "GET"
}).then(function (response) {
    console.log(response);
});

function renderButtons() {
    $("#sport").empty()
    for (let i = 0; i < mySports.length; i++) {
        let a = $("<button>");
        a.addClass("sport");
        a.attr("data-name", mySports[i]);
        a.text(mySports[i]);
        $("#sport").append(a);
    }
}

renderButtons()


$("#sport").on("click", "button", function () {
    let sport = $(this).attr("data-name");
    let queryURl = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=jxV0GXF04Xz5KhzxZh8OYW3080cEtgnk&limit=10"
    $.ajax({
        url: queryURl,
        method: "get"
    }).then(function (response) {
        console.log(response)
        let results = response.data;
        for (let i = 0; i < results.length; i++) {
            let gifDiv = $("<div>");
                let rating = results[i].rating;
                let p = $("<p>").text("rating:" + rating);
                let sportImage = $("<img>");
                sportImage.attr("src", results[i].images.fixed_height_still.url)
                sportImage.attr("data-animate", results[i].images.fixed_height.url)
                sportImage.attr("data-still", results[i].images.fixed_height_still.url)
                sportImage.attr("data-state", "still")
                $("#gifs-appear").prepend(gifDiv)
                gifDiv.append(sportImage)
                gifDiv.append(p)                
            };
        })   
    })
    $("#gifs-appear").on("click", "img", function(){
        let state = $(this).attr("data-state")
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else{
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
})

$("#add-sport").on("click", function(event){
    event.preventDefault() 
    let sport = $("#sport-input").val().trim();
    mySports.push(sport)
    console.log(sport)
    renderButtons()

})