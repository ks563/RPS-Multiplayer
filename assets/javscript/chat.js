$("#chat-submit").on("click", function (event) {
    event.preventDefault();
    var chatMessage = $("#chat-message").val().trim();
    $("#chat-here").append(chatMessage);
    $("#chat-message").val("");

});

//need to attach identifiers to chat message
//need to make each chat appear on a separate line
//attach chat to fire base