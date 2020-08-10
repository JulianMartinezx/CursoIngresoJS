/*Al ingresar una edad debemos informar 
solo si la persona es mayor de edad*/

function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Es mayor de edad.");
	}else
	{
		if(edad<18)
		{
			alert("Es menor de edad");
		}
	}
}//FIN DE LA FUNCIÓN