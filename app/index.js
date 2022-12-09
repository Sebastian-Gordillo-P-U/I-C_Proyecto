const mariadb = require('mariadb');
// const ruta = require('path')
var express = require('express');
var app = express();
// const port = 3306;

// app.use(express.json());
// app.listen(port, ()=>{
// 	console.log('Server is listening on port',port,'...');
// });

//Conexión Base de Datos
const conexion_BD = mariadb.createPool({
  host: '127.0.0.1',
  port: '3306',
  user: 'mariadb',
  password: 'P4ssw0rd',
  database: 'Mini'
});

async function solicitudConexion() {
  try {
    const conexionBD = await conexion_BD.solicitudConexion();
    return conexionBD;
  } catch (error) {
    console.log(error);
  }
}

app.get('/customers', async (req, res)=>{
  try{
      //Conexión
      const conn = await conexion_BD.solicitudConexion();
      //Consulta
      const consulta = 'select * from customers';
      //Ejecuciçon consulta
      const camposBD = await conn.query(consulta);
      //Respuesta
      res.status(200).json(camposBD)
  }catch(error){
    console.log(error)
  }
});

app.post('/nuevoUsuario', async (req, res) =>{
    try{
      //Conexión
      const conn = await conexion_BD.solicitudConexion();
      //Consulta
      const consulta = 'INSERT INTO products(name) SET (?)';
      //Ejecuciçon consulta
      const resultado = await conn.query(consulta, [req.body.name]);
      //Respuesta
      res.status(200).json(resultado)
    }catch(error){
      console.log(error)
    }
})

app.listen(3306, () => {
  console.log('Servicio', 3306)
});

// var server = app.listen(3000, '0.0.0.0', function () {

//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
// });
// app.get('/customers', (req,res)=>{
// 	res.send(
// 		{ id: 1, name: "Ramón", },
// 	);
// });

