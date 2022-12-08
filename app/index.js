const mariadb = require('mariadb');
const ruta = require('path')
var express = require('express');
var app = express();
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.listen(port, ()=>{
	console.log('Server is listening on port',port,'...');
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
app.get('/customers', (req,res)=>{
	res.send(
		{ id: 1, name: "Ramón", },
	);
});

