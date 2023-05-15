$(document).ready(function() {

    // API HORA LOCAl, Se extrae la información desde una API publica de Tiempo //
    $.ajax({
      url: "http://worldtimeapi.org/api/ip",
      dataType: "json",
      success: function(data) {

        // Se declaran variables, las cuales luego seran inicializadas con la HORA, MINUTOS, y SEGUNDOS//
        var fechaHora = new Date(data.datetime);
        var hora = fechaHora.getHours();
        var minutos = fechaHora.getMinutes();
        var segundos = fechaHora.getSeconds();
        var horaSegundo = hora + ":" + minutos + ":" + segundos;
        var horaMinuto = hora + ":" + minutos;
        $("#hora").text(horaMinuto);
      }
    });


  });