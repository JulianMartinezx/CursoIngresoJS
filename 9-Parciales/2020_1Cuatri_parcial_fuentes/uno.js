/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:

el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/


function mostrar()
{
	var contador;
	var acumulador;
	var tipo;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var flagAlcohol;
	var alcoholMasBarato;
	var cantUnidAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;

	contador = 0;

	while(contador != 5)
	{
		tipo = prompt("Indique el tipo de producto a ingresar: barbijo jabon o alcohol.");
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
		{
			tipo = prompt("ERROR Reingrese el tipo de producto en el formato indicado: barbijo jabon o alcohol.");
		}

		precio = prompt("Indique el precio del producto ingresado: entre 100 y 300.");
		precio = parseInt(precio);
		while(precio < 100 && precio > 300)
		{
			precio = prompt("ERROR Reingrese el precio del producto en el formato indicado: entre 100 y 300.");
			precio = parseInt(precio);
		}

		cantidadUnidades = prompt("Indique las cantidades del producto: mas de 0 y menos de 1000.");
		cantidadUnidades = parseInt(cantidadUnidades);
		while(cantidadUnidades < 1 && cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt("ERROR Reingrese la cantidad de unidades segun el formato indicado: mas de 0 y menos de 1000.");
			cantidadUnidades = parseInt(cantidadUnidades);
		}
		acumulador = acumulador + cantidadUnidades;

		marca = prompt("Ingrese la marca del producto.");
		fabricante = prompt("Ingrese el fabricante.");

		if(tipo == "alcohol")
		{
			if(flagAlcohol == true || precio < alcoholMasBarato)
			{
				alcoholMasBarato = precio;
	
				fabricanteAlcoholMasBarato = fabricante;
				flagAlcohol = false;
			}
		}

		contador = contador + 1;
	}



}
