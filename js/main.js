//Función validación formulario
function validarFormulario(){
    
    //Validación de Nombre
	var nombre = document.getElementById("nombre"); 
	
	var validName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

	if( !validName.test(nombre.value) ){

		alert('El nombre ingresado no es válido, ingrese nuevamente');
		return false;
	}
	  
	  
	//Validación de Correo
	var correo = document.getElementById('email');
	
	var validEmail =  /@/;

	if( !validEmail.test(correo.value) ){

		alert('El correo ingresado no es válido, ingrese nuevamente');
		return false;
	}

	//Validación Campos Obligatorios
	var asunto = document.getElementById("asunto");
	var mensaje = document.getElementById("mensaje");

	if(!nombre.value){

		alert("El campo nombre es requerido");
		nombre.focus();
		verificar==false;
	}

	if(!correo.value)
	{
		alert("El campo correo es requerido");
		correo.focus();
		verificar==false;
	}

	if(!asunto.value){

		alert("El campo asunto es requerido");
		asunto.focus();
		verificar==false;
   }

	if(!mensaje.value){

		alert("El campo mensaje es requerido");
		mensaje.focus();
		verificar==false;
   }
} 

//Función mensaje número correcto
function validarNumero(){

	var numero = document.getElementById("numero").value;

	var validNumber = /^(\+?\d{1,3}[\s-]?)?\d{9}$/;

	if( !validNumber.test(numero)){

		alert('El número ingresado no es válido o no está completo');
		
	} 
}

	




