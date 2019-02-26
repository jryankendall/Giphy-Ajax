//Prints the starting topics and initializes the event handlers AFTER the page is loaded
$( document ).ready(
    function() {
        printfTopics();
        initHandlers();
    }
);