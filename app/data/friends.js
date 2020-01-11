var $ = require("jquery");

let surveyData = [
    {
        name: "Test",
        photo: "noImage",
        scores: [1,2,3,4,5,1,2,3,4,5]
    },
    {
        name:"Test 2",
        photo: "noImage",
        scores: [1,2,3,4,5,1,2,3,4,5]
    }
];

var please = "TEST";

module.exports = surveyData;

$("#submit-btn").on("click", function (event) {
    event.preventDefault();
    var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [
            $("#question1").val(),
            $("#question2").val()
        ]
    };
    module.exports = newFriend; 
});

