var surveyData = require("../data/friends.js");

$("#submit-btn").on("click", function (event) {
    event.preventDefault();
    var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [
            $("#question1").val(),
            $("#question2").val(),
            // $("#question3").val(),
            // $("#question4").val(),
            // $("#question5").val(),
            // $("#question6").val(),
            // $("#question7").val(),
            // $("#question8").val(),
            // $("#question9").val(),
            // $("#question10").val()
        ]
    };

    if (newFriend.name && newFriend.photo && newFriend.scores[0] && newFriend.scores[1] /*&& newFriend.scores[2] && newFriend.scores[3] && newFriend.scores[4] && newFriend.scores[5] && newFriend.scores[6] && newFriend.scores[7] && newFriend.scores[8] && newFriend.scores[9]*/) {
        $.post("api/friends", (data, status) => {
            $("#body").append(data.name);
            $(".modal-title").append("Your could be friends with: ");
            $("#modalpopup").modal();
            
        });
        console.log("yea")
    }
    else {
        event.preventDefault();
            event.stopPropagation();

            $("#modalpopup").modal();
            $("#body").append("Please answer all the questions.");
            $(".modal-title").append("Error")
    }

});