// This function will request data from our GIFY API based on the input
function request(search) {
    $("#gifContainer").show();
    var QueryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=8Wx0v66ZTAi4Xbkwv30arP6focptnZM7&limit=25&rating=G";
    $.ajax({
        url: QueryURL,
        method: "GET"
    })
        .then(function (response) {
            for (i = 0; i < 25; i++) {
                var imageUrl = response["data"][i].images.fixed_height.url

                console.log(imageUrl);
                var image = $("<img>");
                image.attr("src", imageUrl);
                $("#gifContainer").prepend(image);

            } //end for loop
        })
} // end the request function


// When the add Button is clicked we want to store the input and run the newButton function
$("#addButton").on("click", function () {
    var input = document.getElementById("input").value;
    if (input === "") {    }
    else { 
        newButton(input); }

})

// The newButton function will create a new button with its own onclick attribute that will call the request funtion
function newButton(input) {
    console.log(input);
    let idname = input; // kitten
    $("#divButton").append("<button onclick=\"request(\'" + input + "\');\">" + input + "</button>")
}

