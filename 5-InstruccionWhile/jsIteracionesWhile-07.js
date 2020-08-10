/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var acumulador;
	var respuesta;

	contador=0;
	acumulador=0;
	respuesta=true;

	while(respuesta==true)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		contador = contador + 1;

		acumulador = numeroIngresado + acumulador;

		respuesta = confirm("¿Desea ingresar otro numero?");
	}

	txtIdSuma.value = acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN