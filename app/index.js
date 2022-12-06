const ruta = require('path')
var express = require('express');
var app = express();

//Rutas
app.get('/', function (req, res) {
  res.sendFile(ruta.resolve(__dirname, 'API_uno.html'))
});

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// var server = app.listen(3000, '0.0.0.0', function () {

//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
// });

