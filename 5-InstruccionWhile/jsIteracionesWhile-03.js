/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;

	claveIngresada = prompt("Ingrese la clave de acceso.");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Error...Ingrese la clave correcta!");
	}

	alert("Ingreso confirmado");
	
}//FIN DE LA FUNCIÓN
