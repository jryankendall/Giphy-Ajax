function getGif() {
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        pullResults = response.data;
        appendGifs(pullResults);
    })

};