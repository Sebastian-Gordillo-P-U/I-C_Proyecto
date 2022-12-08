const mariadb = require('mariadb');
const ruta = require('path')
var express = require('express');
var app = express();

//Rutas
app.get('/', function (req, res) {
  res.sendFile(ruta.resolve(__dirname, 'API_uno.html'))
});

//Conexión Base de Datos
const conexion_BD = mariadb.createPool({
  host: '127.0.0.1',
  port: '3306',
  user: 'mariadb',
  password: 'P4ssw0rd',
  database: 'Mini'
});

async function solicitudConexion (){
  try {
    console.log('Conexión exitosa')
    const conexionBD = await conexion_BD.getConnection();
    return conexionBD;
  } catch (error) {
    console.log(error);
  }
}

solicitudConexion()

// var server = app.listen(3000, '0.0.0.0', function () {

//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
// });

