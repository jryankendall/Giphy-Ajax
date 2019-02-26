//Load first

var fTopics = ["memes", "raccoons", "possums", "owls", "simpsons", "video games", "funny", "fail", "reaction", "respectful", "retro", "computers", "explosions", "walker texas ranger"];


var baseURL = "https://api.giphy.com/v1/gifs/search?api_key=";
var apiKey = "w3xsw57LACA34eVHdDWeI3mGfV9xiX94";
var resultLimit = "10"
var searchValue = "";
var queryURL = "";



//functions

function queryBuilder(){
    queryURL = baseURL + apiKey + "&q=" + searchValue + "&limit=" + resultLimit;
};