var express = require('express');
var app = express();

app.use(express.static(__dirname + "/dist/build"));

var port = process.env.PORT || 5500;

var server = app.listen(port, function() {
  console.log('Listening on port:', port);
}).listen(port);
