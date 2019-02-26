//Prints the starting topics and initializes the event handlers AFTER the page is loaded.
//Placed in this JS file as it's the last one loaded so there's no conflicts
$( document ).ready(
    function() {
        printfTopics();
        initHandlers();
    }
);