/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var Importe
	var Descuento
	var Resultado
 
    Importe = txtIdImporte.value;
    Importe = parseInt(Importe);
	
	Descuento = Importe * 0.25;

    Resultado = Importe - Descuento;

    txtIdResultado.value = Resultado;
}
