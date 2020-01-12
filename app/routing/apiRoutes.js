var surveyData = require("../data/friends.js");


module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(surveyData);
    });


    app.post("/api/friends", function (req, res) {
        
    });

};


