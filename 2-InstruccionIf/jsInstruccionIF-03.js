/*Al ingresar una edad debemos informar si la persona es 
mayor de edad, sino informar que es un menor de edad.*/
function mostrar()
{
   var Edad;

   Edad = txtIdEdad.value;
	
   if(Edad > 90)
   {
	   alert("Esta persona ya ripeo");
   }else
   {    
        if(Edad > 17)
        {
	        alert("Esta persona es mayor de edad");   
        }
        else
        {
            alert("Esta persona es menor de edad");    
        }
    }

}//FIN DE LA FUNCIÓN