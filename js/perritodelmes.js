function getRandomImage(){
  
        $.get( "https://dog.ceo/api/breeds/image/random", 
        function( data ) {
        $('#dogImage').attr('src', data.message)
        });
    
};
        // Click para OCULTAR Boton
        $('#btn-ocultar').click(function() {
        $('#dogImage').hide();
            });
      
      // Click para MOSTRAR boton
        $('#btn-mostrar').click(function() {
        $('#dogImage').show();
            });      
