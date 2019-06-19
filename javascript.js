let queryURl = "https://api.giphy.com/v1/gifs/trending?api_key=jxV0GXF04Xz5KhzxZh8OYW3080cEtgnk"
let mySports = ["football", 'baseball', "basketball", "wrestling"] 
$.ajax({
    url: queryURl,
    method: "GET"
}).then(function(response) {
    console.log(response);
});

function renderButtons(){
    for (let i = 0; i < mySports.length; i++){      
        let a = $("<button>");
        a.addClass("sport");
        a.attr("data-name", mySports[i]);
        a.text(mySports[i]);
        $("#sport").append(a);
        console.log($("#sport"))
    }
}
renderButtons()
