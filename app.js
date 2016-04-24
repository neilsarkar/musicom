var express = require('express');
var app     = express();

var cache;

var port = process.env.NODE_APP_PORT || 3000;

app.use(express.static('public'));

app.listen(port, function(err) {
  if( err ) { throw err; }
  console.log("Listening on port", port, "...");
})
