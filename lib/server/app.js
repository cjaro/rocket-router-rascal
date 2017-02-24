var express = require("express");
var app = express();
var index = require('./routes/index');
var hello = require('./routes/welcome');
var parts = require('./routes/parts');
var bodyParser = require('body-parser');
var port = 8000;

var spaceshipParts = require('./modules/spaceship-parts');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', index);

app.get('/hello', hello); // Oh, hi there! Wait, who's parts are these?  //*whose

app.use('/parts', parts);

app.post('/newPart', function(req, res){
  spaceshipParts.push(req.body);
  res.sendStatus(200);
});  //like we did in the fish example??


app.use(express.static('lib/public'));

app.listen(port);
console.log("Listening on port: ", port);
