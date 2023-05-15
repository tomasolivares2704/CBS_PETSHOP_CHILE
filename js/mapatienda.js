function iniciarMap(){

    //Creación de MAPA, con coordenadas de la tienda.//
    var coord = {lat:-33.3646955 ,lng: -70.6702378};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 17,
      center: coord
    });

    //Creación de marcador o puntero sobre la ubicación exacta en el mapa.//
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
};