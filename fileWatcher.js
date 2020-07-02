const express = require('express');
let app = express();
const port = 5000;

app.get('/', function (req, res) {
  var params = req.query; //Gets parameters from the url as a json object
  res.end(params);
});

app.listen(port, function(){ 
  console.log("Watching Files");
});