var surveyData = require("../data/friends");
var newFriend = require("../data/friends")

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(surveyData);
    });


    app.post("/api/friends", function (req, res) {
        surveyData.push(newFriend);
    });

};

console.log(newFriend);