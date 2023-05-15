$(document).ready(function(){

    // CALCULADORA DE COMIDA//

    $('#calcularComida').click(function(){

        // Se declarar las variables//

        var edadMascota = $('#edad').val();
        var pesoMascota = $('#peso').val();

        if (edadMascota && pesoMascota) {

            var racionMascota = 0;

            //Ingresa al sentencia IF en donde avanzara dependiendo que condicion cumpla//

            if (edadMascota >=0 && edadMascota <=3) {
                var racionMascota = (pesoMascota * 0.2) * 1000;
            } else if (edadMascota >=4 && edadMascota <=6) {
                var racionMascota = (pesoMascota * 0.12) * 1000; 
            } else if (edadMascota >= 7 && edadMascota <=12) {
                var racionMascota = (pesoMascota * 0.08) * 1000; 
            } else if (edadMascota >= 13 && edadMascota <=24) {
                var racionMascota = (pesoMascota * 0.03) * 1000; 
            } else if (edadMascota >= 25 && edadMascota <=84) {
                var racionMascota = (pesoMascota * 0.025) * 1000;
            } else if (edadMascota >= 85 && edadMascota <=120) {
                var racionMascota = ((pesoMascota * 0.02) * 1000);
            } else if (edadMascota >= 121 && edadMascota <=180) {
                var racionMascota = ((pesoMascota * 0.018) * 1000);
            } else {
                alert("Por favor, ingresa nuevamente los datos.");
                return;
            }
            
            //Retornara la valor obtenido concatenado a un texo a un determinado ID//
            $('#racionMascota').val(racionMascota.toFixed(2) + ' Gramos diarios.');
        } else {
            alert('Por favor, Reintente...');
        }

    });


    // TABLA MESES Nº1-----------------------------//

    $('#tablaMeses').show();
  
    // Evento Click para OCULTAR Boton
    $('#btn-ocultar').click(function() {
    $('#tablaMeses').hide();
        });
  
  // Evento Click para MOSTRAR boton
    $('#btn-mostrar').click(function() {
    $('#tablaMeses').show();
        });       

    // TABLA MESES Nº2-----------------------------//

    $('#tablaMeses2').show();
  
    // Evento Click para OCULTAR Boton
    $('#btn-ocultar2').click(function() {
    $('#tablaMeses2').hide();
        });
  
  // Evento Click para MOSTRAR boton
    $('#btn-mostrar2').click(function() {
    $('#tablaMeses2').show();
        });




});