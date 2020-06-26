var express = require('express');

var app = express();

app.get('/', function (request, response) {

  var params = request; //Gets parameters from the url as a json object

  response.end(params);
});

app.listen(5000,function(){ 
  console.log('App listening on port 5000!' );
});