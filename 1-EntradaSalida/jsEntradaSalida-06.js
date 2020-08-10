//se ingresa nombre del producto , el importe y el porcentaje de aumento a aplicar (por prompt).
//y semuestra el siguient mensaje(por alert):
//"el producto XXXX cuesta $xxxx sin aumento, tiene un aumento de $XXXX y el precio final es: $xxxx, gracias por su compra"

function Ejercicio1()
{
	var nombre;
    var importe;
    var valorAumento;
    var porcentajeAumento;
    var precioFinal;
    
    nombre       = prompt("Ingrese el nombre de un producto");
    importe      = prompt("Ingrese el precio de este producto");
    valorAumento = prompt("Ingrese porcentaje de aumento");
    
    importe      = parseint(importe);
    valorAumento = parseint(valorAumento);
    
    porcentajeAumento = importe*valorAumento/100;
    
    precioFinal  = importe + porcentajeAumento;
    
    alert("El producto "+nombre+" cuesta "+importe+"sin aumento, tiene un aumento de "+valorAumento+" y el precio final es: "+precioFinal+", gracias por su compra");
    
}