let apiKey = 'TU_CLAVE_DE_API';
let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Santiago`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Aquí puedes trabajar con los datos de la API
  })
  .catch(error => {
    console.log(error);
    // Aquí puedes manejar los errores de la petición
  });


  
  