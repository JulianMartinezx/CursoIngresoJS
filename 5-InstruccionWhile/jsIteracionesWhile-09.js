/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	var numero;
	var flagMaximo;
	var flagMinimo;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	flagMaximo = true;
	flagMinimo = true;
	respuesta = "si";

	while(respuesta == "si")
	{
		numero = prompt("Ingrese un numero.");
		numero = parseInt (numero);

		if(flagMaximo == true || numeroMaximo < numero)
		{
			numeroMaximo = numero;
			flag = false;
		}

		if(flagMinimo == true || numeroMinimo > numero)
		{
			numeroMinimo = numero;
			flagMinimo = false;
		}

		respuesta = prompt("¿Desea continuar agregando numeros?");
	}

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
	
}//FIN DE LA FUNCIÓN

