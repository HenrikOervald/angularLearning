var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');


app.get('/', function (req, res) {
  res.render('pages/index');
});

app.listen(app.get('PORT'), function () {
  console.log('Example app listening on port '+ app.get('PORT') +'!');
});