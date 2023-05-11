$(document).ready(function() {

	//VALIDACIÓN CON JQUERY
	$('#Formulario').submit(function(event) {
	  event.preventDefault(); // Evita que el formulario se envíe antes de validarlo correctamente

	  //VARIABLES CORRESPONDIENTES A INPUTS

	  var nombre = $('#nombre').val();
	  var email = $('#email').val();
	  var numero = $('#numero').val();
	  var asunto = $('#asunto').val();
	  var mensaje = $('#mensaje').val();

	  //VALIDACIONES CAMPOS OBLIGATORIOS

	  if(nombre.length == 0){

		alert("El campo nombre es requerido");
		return false;
	}

	  if(email.length == 0){

		alert("El campo correo es requerido");
		return false;
	}

	  if(asunto.length == 0){

		alert("El campo asunto es requerido");
		return false;
    }

	  if(mensaje.length == 0){

		alert("El campo mensaje es requerido");
		return false;
    }

	//LLAMADO DE FUNCIONES DE VALIDACIÓN
	if(!validarNombre(nombre)){

		alert('El nombre ingresado no es válido, ingrese nuevamente');
		return false;
	}

	if(!validarEmail(email)){

		alert('El correo ingresado no es válido, ingrese nuevamente');
		return false;
	}

	if(!validarNumero(numero)){

		alert('El número ingresado no es válido, ingrese nuevamente');
		return false;
	}

	 //MENSAJE CONFIRMACIÓN DE ENVÍO DE FORMULARIO
	alert('El formulario se ha enviado correctamente');
    return true;

	});

	//FUNCIONES DE VALIDACIÓN DE REQUISITOS PARA CADA CAMPO

	//NOMBRE
	function validarNombre(nombre){

		var exprValidName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
		return exprValidName.test(nombre)
	}

	function validarEmail(email){

		var exprValidEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|net)/;
		return exprValidEmail.test(email)
	}

	function validarNumero(numero){

		var exprValidNumber = /^(\+?\d{1,3}[\s-]?)?\d{9}$/;
		return exprValidNumber.test(numero)
	}
});
