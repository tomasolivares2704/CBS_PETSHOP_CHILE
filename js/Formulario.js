$(document).ready(function() {
//----------------------------------------------------------------------FORMULARIO------------------------------------------------------------------
	//VALIDACIÓN CON JQUERY
	$('#Formulario').submit(function(event) {
	  event.preventDefault(); // Evita que el formulario se envíe antes de validarlo correctamente

	  //VARIABLES CORRESPONDIENTES A INPUTS

	  let nombre = $('#nombre').val();
	  let email = $('#email').val();
	  let numero = $('#numero').val();

	//LLAMADO DE FUNCIONES DE VALIDACIÓN
	if(!validarNombre(nombre)){
		
		$('#alertaErrName').show().delay(2500).fadeOut("slow");
		return false;
	}

	if(!validarEmail(email)){

		$('#alertaErrMail').show().delay(2500).fadeOut("slow");
		return false;
	}

	if(!validarNumero(numero)){

		$('#alertaErrNum').show().delay(2500).fadeOut("slow");
		return false;
	}

	$("#Formulario").submit(function(){
		$("#popup").fadeIn("slow");
	});
	return true;

	});

	//FUNCIONES DE VALIDACIÓN DE REQUISITOS PARA CADA CAMPO

	function validarNombre(nombre){

		let exprValidName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
		return exprValidName.test(nombre)
	}

	function validarEmail(email){

		let exprValidEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|net)/;
		return exprValidEmail.test(email)
	}

	function validarNumero(numero){

		if (numero.length === 0 ){
			return true

		} else{
			let exprValidNumber = /^(|\+56 )(\(?\d{2}\)?[- ]?)?\d{7}$/;
			return exprValidNumber.test(numero)
		}
	}

	//FUNCIÓN QUE PERMITE CERRAR EL POP UP
	$("#cerrar").on("click", function(){
		$("#popup").fadeOut("slow");
	});

	//FUNCIONES PARA CAMPOS OBLIGATORIOS
	$("#nombre").blur(function(){
		if ($(this).val() === '') {
			$('#campReqNom').show().delay(2500).fadeOut("slow");
		  return false;
		}
	  });

	$("#email").blur(function(){
		if ($(this).val() === '') {
			$('#campReqMail').show().delay(2500).fadeOut("slow");
			return false;
		}
	  });

	$("#asunto").blur(function(){
		if ($(this).val() === '') {
			$('#campReqAsunto').show().delay(2500).fadeOut("slow");
			return false;
		}
	  });

	$("#mensaje").blur(function(){
		if ($(this).val() === '') {
			$('#campReqSMS').show().delay(2500).fadeOut("slow");
			return false;
		}
	  });
//-----------------------------------------------------------------------TIENDA---------------------------------------------------------------------
	$(".divcard").on("click", function(){
		$("#tabla-datos").fadeIn();
	});


});
