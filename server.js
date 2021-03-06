//Express and path boiler plate

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(`/static`, express.static(path.join(__dirname, '/app/public')));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function() {
    console.log("App listening at http://localhost:" + PORT);
});
