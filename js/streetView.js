streetViewModulo = (function () {
  var panorama // 'Visor' de StreetView

  function inicializar () {
        /* Completar la función inicializar()  que crea un panorama
        en una posición y lo muestra en la página. */
        var vista = document.getElementById("pano");
        var opciones = {
          position: marcadorModulo.damePosicion() || posicionCentral,
        };
        panorama = new google.maps.StreetViewPanorama(vista, opciones)
  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
        /* Completar la función fijarStreetView que actualiza la posición
         de la variable panorama y cambia el mapa de modo tal que se vea
         el streetView de la posición actual. */
         panorama.setPosition(ubicacion);

  }

  return {
    inicializar,
    fijarStreetView
  }
})()
