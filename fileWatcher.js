const express = require('express');
const app = express();
const port = 5000;

app.get('/', function (request, response) {

  var params = request; //Gets parameters from the url as a json object

  response.end(params);
});

app.listen(port, function(){ 
  console.log("Ready to start watching Files");
});