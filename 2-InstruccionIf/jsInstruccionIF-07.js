/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/


 function mostrar()
 {
 var edad;
 var estadoCivilIngresado;
 
 edad=txtIdEdad.value;
 edad=parseInt(edad);
 
 estadoCivilIngresado=estadoCivil.value; 

 if(edad<18 && estadoCivilIngresado!="Soltero")
 {
	 alert("Es muy pequeño para NO ser soltero.")
 }
 else
 {
	 alert("Esta bien.")
 }
 
 }//FIN DE LA FUNCIÓN
 
 /*Operadores Relacionales IF
 < Menor que
 > Mayor que
 == Igual a
 != Distinto de
 <= Menor o igual} En vez de estos dos
 >= Mayor o igual} ponemos un numero mayor o menor al comparado, segun corresponda.
 
 Operadores Logicos IF
 && = Y
 || = O 
 !  = Negacion - No */