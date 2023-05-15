function getRandomImage(){

        //PERRITO DEL MES, Se obtiene mediante el metodo GET de la API, y luego se enseña en patalla segun el Id especificado.//
  
        $.get( "https://dog.ceo/api/breeds/image/random", 
        function(data) {
        $('#dogImage').attr('src', data.message)
        });
    
};
        // Click para OCULTAR Boton.//
        $('#btn-ocultar').click(function() {
        $('#dogImage').hide();
            });
      
      // Click para MOSTRAR boton.//
        $('#btn-mostrar').click(function() {
        $('#dogImage').show();
            });      
