//Funcionalidad APIs
function personasSeleccionados(datosSeleccionados){

  //API Utilizada
  const resultadosAPI = fetch("https://rickandmortyapi.com/api/character");

    resultadosAPI
    .then(respuesta => respuesta.json())
    .then(datos => {
      datosSeleccionados(datos)
    });
}

personasSeleccionados(datos =>{

  //Datos de visualizacion
  const datosVista = datos.results[0].name
  document.getElementById('datosPersonaje').innerHTML = datosVista

});