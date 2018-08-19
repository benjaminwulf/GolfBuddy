var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routing/api/buddies")(app);
require("./routing/survey")(app);

app.listen(PORT, function() {
    // Log when server starts
    console.log("Server listening on http://localhost:" + PORT);
})

