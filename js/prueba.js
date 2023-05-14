$.ajax({
    url: 'https://api.example.com/data',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
        console.log(response);
        // Aquí puedes trabajar con la respuesta de la API
    },
    error: function(error) {
        console.log(error);
        // Aquí puedes manejar los errores de la petición
    }
});

  
  