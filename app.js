var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));



app.get('/', function (req, res) {
  res.sendFile('./views/index.html');
});

app.listen(PORT, function () {
  console.log('Example app listening on port '+ PORT +'!');
})	

//hello World :)