$(document).ready(function(args){

    $("#enviar").click(function(click_args){
        event.preventDefault();

        $.get(
            "https://dog.ceo/api/breeds/image/random",
            function(datos){
                $.each(datos.message, function(i, item){
                    $("#salida").append(
                        "<tr>"+
                            "<th>"+item.idCategory+"</th>" +
                            "<td>"+item.strCategory + "</td>" +
                            "<td><img src='"+item.message + "'> 
                            "<td>"+item.strCategoryDescription + "</td>" +
                        "</tr>"
                    );
                });
            }
        );
    });

});