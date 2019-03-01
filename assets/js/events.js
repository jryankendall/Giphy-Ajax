//Sets up buttons and input handlers

function initHandlers() {
    //Handler is added to the body instead of to the topic-button class
    //Otherwise, it would only handle buttons that were in the DOM before this function was called
    $("body").on("click", ".topic-button", function() {
        searchValue = $(this).val();
        queryBuilder();
        getGif();
        appendGifs(pullResults);
    });

    $("#submit-button").on("click", function() {
        var userInput = $("#user-topic-input").val().trim().toLowerCase();
        event.preventDefault();
        console.log(userInput);

        //Ensures that the user doesnt try to put in arbitrary code or weird characters
        if (!validateTextbox(event, userInput)) {
            alert("Invalid entry! Letters and spaces only!");
            return;
        } else 
        
        //Makes sure the topic hasn't already been added
        if (fTopics.indexOf(userInput) > -1) {
            alert("That topic has already been added.");
            return;

        } else

        {

            fTopics.push(userInput);
            printfTopics();

        }
    });

    //Handles the user clicking on a gif
    $(document.body).on("click", ".displayed-gif", function() {
        clickedGifId = $(this).attr("id");
        clickGif(clickedGifId);
    });
};

//Wipes topic list, alphabetizes ftopics array, reprints it
function printfTopics(){
    fTopics.sort();
    $("#topics-holder").html("");

    for (var i = 0; i < fTopics.length; i++) {
        var newButton = $("<button>");
        newButton.val(fTopics[i])
            .addClass("topic-button btn btn-primary mr-3 mb-2")
            .attr("id", fTopics[i].trim() + "-button")
            .text(fTopics[i]);
        $("#topics-holder").append(newButton);
    };
};


//Makes sure the input box doesnt have numbers or non-standard characters
function validateTextbox(thisEvent, thisValue) {
    var inputValue = thisValue;
    if ( !/^[a-zA-Z\s]*$/g.test(inputValue) || inputValue.trim() == "" ) {
        return false;
    } else {return true;}
};

function appendGifs(sentData) {
    for (var i = 0; i < sentData.length; i++) {
        var newImg = $("<img>");
        var imgSrc = sentData[i].images.fixed_height_still.url;
        newImg.attr("src", imgSrc)
            .attr("alt", "Gif " + i)
            .addClass("displayed-gif still-gif")
            .attr("id", "gif-num-" + i);
        $("#gif-print-area").append(newImg);
    };
};

function clickGif(clickedGif) {
    var theGif = $("#" + clickedGif);
    var gifSource = theGif.attr("src");

    if (theGif.hasClass("still-gif")) {
        var newSrc = gifSource.substring(0, gifSource.length - 6) + ".gif";
        theGif.attr("src", newSrc);
        theGif.removeClass("still-gif");
        theGif.addClass("moving-gif");
    } else if
    ( theGif.hasClass("moving-gif") ) {
        var newSrc = gifSource.substring(0, gifSource.length - 4) + "_s.gif";
        theGif.attr("src", newSrc);
        theGif.removeClass("moving-gif");
        theGif.addClass("still-gif");
    };


};