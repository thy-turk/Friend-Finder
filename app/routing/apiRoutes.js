var surveyData = require("../data/friends");
console.log(surveyData)

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(surveyData);
    });


app.post("/api/reservations", function(req, res) {

});

};