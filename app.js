var express    = require('express');
var app        = express();
var mongodb    = require('mongodb');
var bodyParser = require('body-parser');

var port = process.env.NODE_APP_PORT || 3000;

var registrations;

app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/registrations', function(req,res) {
  if( !req.body || !req.body.team ) { return res.status(422).json({error: 'You must provide a team object.'}); }

  registrations.insert(req.body.team, function(err) {
    if( err ) { console.error(err); return res.status(500).json({error: 'Something went wrong.'}); }

    res.sendStatus(204);
  })
});

mongodb.MongoClient.connect('mongodb://localhost/test', function(err, db) {
  if( err ) { throw err; }

  registrations = db.collection('registrations');
})

app.listen(port, function(err) {
  if( err ) { throw err; }
  console.log("Listening on port", port, "...");
})
