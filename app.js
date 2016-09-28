var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.render('index');
  console.err(req);
});

app.listen(PORT, function () {
  console.log('Example app listening on port '+ PORT +'!');
});