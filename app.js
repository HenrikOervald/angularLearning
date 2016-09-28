var express = require('express');
var app = express();

var port = process.env.PORT || 8080;
app.set('view engine', 'html');


app.get('/', function (req, res) {
  res.render('index');

res.status(200);
});

app.listen(port, function () {
  console.log('Example app listening on port '+ port +'!');
});