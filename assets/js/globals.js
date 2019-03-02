//Load first

var fTopics = ["memes", "raccoons", "possums", "owls", "simpsons", "video games", "funny", "fail", "reaction", "respectful", "retro", "computers", "explosions", "walker texas ranger"];


var baseURL = "https://api.giphy.com/v1/gifs/search?api_key=";
var apiKey = "w3xsw57LACA34eVHdDWeI3mGfV9xiX94";
var resultLimit = 10;
var searchValue = "";
var queryURL = "";
var gifRating = "PG";
var searchOffset = 0;
var searchLanguage = "en";

var pullResults;



//functions

function queryBuilder(){
    if ( document.getElementById("random-offset-checkbox").checked ) {
        searchOffset = Math.floor(Math.random() * 101);
    } else 
    {
        null;
    }
    queryURL = baseURL + apiKey + "&q=" + searchValue + "&limit=" + resultLimit + "&offset=" + searchOffset + "&rating=" + gifRating + "&lang=" + searchLanguage;

};

function clearDisplay() {
    $("#gif-print-area").empty();
}
