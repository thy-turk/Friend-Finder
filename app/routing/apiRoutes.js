var surveyData = require("../data/friends.js");


module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(surveyData);
    });


    app.post("/api/friends", function (req, res) {
        newFriend = req.body;
        for(let i = 0; i < newFriend.scores.length; i++){
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }
        res.json(friends.findFriend(newFriend));
        friends.friends.push(newFriend);
        console.log(newFriend);
    });

};


