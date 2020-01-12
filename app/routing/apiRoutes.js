var surveyData = require("../data/friends.js");


module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(surveyData);
    });


    app.post("/api/friends", function (req, res) {
        var matchedFriend;
        var differenceAllowed = 40;
        var user = req.body;

        surveyData.forEach(friend => {
            var scoreDifference = 0;
            for (var i = 0; i < user.scores.length; i++) {
                scoreDifference += Math.abs(parseInt(friend.scores[i]) - parseInt(user.scores[i]));
            }
            if (scoreDifference < differenceAllowed) {
                differenceAllowed = scoreDifference;
                matchedFriend = friend;
            }
        });
        res.json(matchedFriend);
    });

};


