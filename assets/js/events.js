//Sets up buttons and input handlers

function initHandlers() {
    //Handler is added to the body instead of to the topic-button class
    //Otherwise, it would only handle buttons that were in the DOM before this function was called
    $("body").on("click", ".topic-button", function() {
        searchValue = $(this).val();
        queryBuilder();
        getGif();
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

function validateTextbox(thisEvent, thisValue) {
    var inputValue = thisValue;
    if ( !/^[a-zA-Z\s]*$/g.test(inputValue) || inputValue.trim() == "" ) {
        return false;
    } else {return true;}
};