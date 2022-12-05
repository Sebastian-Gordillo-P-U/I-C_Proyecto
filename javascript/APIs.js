//Funcionalidad APIs
function personasSeleccionados(datosSeleccionados){
  //API Utilizada
  const resultadosAPI = fetch("https://rickandmortyapi.com/api/character");
    //Respuesta
    resultadosAPI
    .then(respuesta => respuesta.json())
    .then(datos => {
      datosSeleccionados(datos)
    });
}

personasSeleccionados(datos =>{
  //Datos de visualizacion
  for (var i = 0; i < 4; i++){
    const datosVista = datos.results[i].name
    document.getElementById('datosPersonaje'+i).innerHTML = datosVista
  }
});