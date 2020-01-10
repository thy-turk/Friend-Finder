var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('data'));
app.use(express.static('public'));
app.use(express.static('routing'));
app.use(express.static('assets'));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function() {
    console.log("App listening at http://localhost:" + PORT);
});