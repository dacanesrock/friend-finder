//node modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes.js');
//express setup
var app = express();
var PORT = 3002;
//sets up express to serve static files
app.use(express.static(path.join(__dirname, 'app/public')));
app.use(express.static(path.join(__dirname, 'app/data')));
//set up express to parse data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//call the apiRoutes and htmlRoutes functions and pass in express app
apiRoutes(app);
htmlRoutes(app);

//start listening on above port
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});