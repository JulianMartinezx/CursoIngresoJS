/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y 
censos nos pide realizar una carga de datos validada e ingresada por ventanas 
emergentes solamente "PROMPT" y luego asignarla a cuadros de textos ".VALUE =". 

12. Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;

	//---------------------------------------------Primera validacion-------------------------------------------
	edadIngresada = prompt("Ingrese su edad, entre 18 y 90 años.");
	edadIngresada = parseInt(edadIngresada);
	
	while(edadIngresada < 18 || edadIngresada > 90 || isNaN(edadIngresada))
	{
		edadIngresada = prompt("Reingrese su edad en el formato solicitado: entre 18 y 90 años.");
	}
	txtIdEdad.value = edadIngresada;
	//---------------------------------------------Segunda validacion-------------------------------------------
	sexoIngresado = prompt("Ingrese su sexo, F o M");

	while(sexoIngresado != "F" && sexoIngresado != "M")
	{
		sexoIngresado = prompt("Reingrese su sexo en el formato solicitado: F o M.");
	}
	txtIdSexo.value = sexoIngresado;
	//---------------------------------------------Tercera validacion-------------------------------------------
	estadoCivilIngresado = prompt("Ingrese su estado civil 1-para soltero, 2-para casados, 3-para divorciados o 4-para viudos.");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while(estadoCivilIngresado != 1 && estadoCivilIngresado != 2 && estadoCivilIngresado != 3 && estadoCivilIngresado != 4)
	{
		estadoCivilIngresado = prompt("Reingrese su estado civil en el formato solicitado: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos.");
	}
	txtIdEstadoCivil.value = estadoCivilIngresado;
	//---------------------------------------------Cuarta validacion-------------------------------------------
	sueldoBruto = prompt("Ingrese su sueldo bruto, no menor a 8.000.");
	sueldoBruto = parseInt(sueldoBruto);

	while(sueldoBruto < 8000 || isNaN(sueldoBruto))
	{
		sueldoBruto = prompt("Reingrese su sueldo bruto en el formato solicitado: numerico no menor a 8.000.");
	}
	txtIdSueldo.value = sueldoBruto;
	//---------------------------------------------Quinta validacion-------------------------------------------
	numeroLegajo = prompt("Ingrese su numero de legajo, sin ceros a la izquierda.");
	numeroLegajo = parseInt(numeroLegajo);
	
	while(numeroLegajo < 1000 || numeroLegajo > 9999 || isNaN(numeroLegajo))
	{
		numeroLegajo = prompt("Reingrese su numero de legajo en el formato solicitado: numérico de 4 cifras, sin ceros a la izquierda.");
	}
	txtIdLegajo.value = numeroLegajo;
	//---------------------------------------------Sexta validacion-------------------------------------------

	nacionalidad = prompt("Ingrese su nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
	{
		nacionalidad = prompt("Reingrese su nacionalidad en el formato solicitado: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	}
	txtIdNacionalidad.value = nacionalidad;
}
