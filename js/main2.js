$(document).ready(function() {

	//VALIDACIÓN CON JQUERY
	$('#Formulario').submit(function(event) {
	  event.preventDefault(); // Evita que el formulario se envíe antes de validarlo correctamente

	  //VARIABLES CORRESPONDIENTES A INPUTS

	  let nombre = $('#nombre').val();
	  let email = $('#email').val();
	  let numero = $('#numero').val();
	  let asunto = $('#asunto').val();
	  let mensaje = $('#mensaje').val();

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
		
		$('#alertaErrName').show().delay(2500).fadeOut("slow");
		return false;
	}

	if(!validarEmail(email)){

		$('#alertaErrMail').show().delay(2500).fadeOut("slow");
		return false;
	}

	if(!validarNumero(numero) || numero.length === 0){

		$('#alertaErrNum').show().delay(2500).fadeOut("slow");
		return false;
	}

	$("#Formulario").submit(function(){
		$("#popup").fadeIn("slow");
	});
	return true;

	});

	//FUNCIONES DE VALIDACIÓN DE REQUISITOS PARA CADA CAMPO

	//NOMBRE
	function validarNombre(nombre){

		let exprValidName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
		return exprValidName.test(nombre)
	}

	function validarEmail(email){

		let exprValidEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|net)/;
		return exprValidEmail.test(email)
	}

	function validarNumero(numero){

		let exprValidNumber = /^(|\+56 )(\(?\d{2}\)?[- ]?)?\d{7}$/;
		return exprValidNumber.test(numero)
	}

	//FUNCIÓN QUE PERMITE CERRAR EL POP UP
	$("#cerrar").on("click", function(){
		$("#popup").fadeOut();("slow");
	});

});
