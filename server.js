var express = require("express");
var pass = require("path");
var bodyParser = require("body-parser")

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.text());

require('./app/routing/htmlRoutes.js')(app);
require('.app/routing/apiRoutes.js')(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);

});