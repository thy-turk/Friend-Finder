var surveyData = require("../data/friends.js");

//Route that displays all the info for the surveydata
module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(surveyData);
    });

    // Post that compares the user input with the surveydata info
    app.post("/api/friends", function (req, res) {
        var matchedFriend;
        var differenceAllowed = 40;
        var user = req.body;

        //Takes info from the array and runs through each object, comparing each to the user input
        surveyData.forEach(friend => {
            var scoreDifference = 0;
            for (var i = 0; i < user.scores.length; i++) {
                scoreDifference += Math.abs(parseInt(friend.scores[i]) - parseInt(user.scores[i]));
            }
            //Decideds the best match
            if (scoreDifference < differenceAllowed) {
                differenceAllowed = scoreDifference;
                matchedFriend = friend;
            }
        });
        res.json(matchedFriend);
    });

};


