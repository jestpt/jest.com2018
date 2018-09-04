//express
//require dependencies

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 5000;

var router = require('./app/routes');
app.use('/',router);

//set static files (css,images,etc) location
app.use(express.static(__dirname + '/public'));

//start server
app.listen(port, function(){
    console.log('app started');
});

