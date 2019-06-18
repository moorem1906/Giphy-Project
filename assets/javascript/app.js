var topics = [ "Les Brown", "CT Fletcher", "Eric Thomas", "Mahatma Gandhi", "Zig Zigular", "Will Smith", "TD Jakes", "Steven Furtick", 
"Nipsy Hussle", "Idris Elba" ]

$("button").on("click", function(){
    //In this case, the "this" keyword refers to the button that was clicked
var person = $(this).attr("data-person");

//Makine a URL to seach for Giphy with the person's name
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
person + "&api_key=a77oCOqZMGAeexw7MYiyjLuR7Ac76J2U";


//Performing our AJAX GET request
$.ajax({
    url: queryURL,
    method: "GET"
})
    //After the data comes back from the API
    .then(function(response) {
        //Storing an array of results in the results variable
        var results = response.data;

        //Looping over every result item
        for (var i = 0; i < results.length; i++){
            //Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                //Creating a div for gif
                var gifDiv = $("<div>");

                //Storing the results itme's rating
                var rating = results[i].rating;

                //Creatinga paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + rating);

                //This section creates an image tag
                var personImage = $("<img>");

                //Giving the image tag an scr sttibute of a property
                //pulled off the result item
                personImage.attr("src", results[i].images.fixed_height.url);

                //Appending the paragraph and personImage we created tot he 'gifDiv'
                gifDiv.append(p);
                gifDiv.append(personImage);

                //Prepending the gifDiv to the '#gifygifs' div in the HTML
                $("#gifygifs").prepend(gifDiv);
            }
        }
    }
    
    )
});



































// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=Les+Brown&api_key=c1e416ff&limit=10");
// xhr.done(function(response) { console.log("success got data", response); }); 

// var returns = response.data

// for (i in returns) {
//     $('.inner').append("<img src='" +returns[i].images.original.url+"'/>')
// }