/*Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/

function mostrar()
{
	var mes;
	mes = txtIdMes.value;

	switch (mes)
	{
		case ("Enero"):
			alert("que comiences bien el año!!!");
			break;
		case ("Marzo"):
			alert("a clases!!!");
			break;
		case ("Julio"):
			alert("se vienen las vacaciones!!!");
			break;
		case ("Diciembre"):
			alert("Felices fiestas!!!");
			break;
		default:
			alert("Nada que decir.");			
	}

}//FIN DE LA FUNCIÓN