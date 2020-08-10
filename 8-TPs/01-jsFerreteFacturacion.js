/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    precioUno  = txtIdPrecioUno.value;
    precioDos  = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno  = parseInt(precioUno);
    precioDos  = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    
    suma = (precioUno+precioDos+precioTres);
    alert("La suma de los precios es "+suma);
}
function Promedio () 
{
    var precioUnoB;
    var precioDosB;
    var precioTresB;
    var promedioPrecios;

    precioUnoB  = txtIdPrecioUno.value;
    precioDosB  = txtIdPrecioDos.value;
    precioTresB = txtIdPrecioTres.value;

    precioUnoB  = parseInt(precioUnoB);
    precioDosB  = parseInt(precioDosB);
    precioTresB = parseInt(precioTresB);

    promedioPrecios = ((precioUnoB+precioDosB+precioTresB)/3);
    alert("El promedio entre estos numeros es: "+promedioPrecios);
}
function PrecioFinal () 
{
    var sumaFinal1;
    var sumaFinal2;
    var sumaFinal3;
    var sumaFinal;
    var iva;
    var precioFinal;

    sumaFinal1 = txtIdPrecioUno.value;
    sumaFinal2 = txtIdPrecioDos.value;
    sumaFinal3 = txtIdPrecioTres.value;

    sumaFinal1 = parseInt(sumaFinal1);
    sumaFinal2 = parseInt(sumaFinal2);
    sumaFinal3 = parseInt(sumaFinal3);
    
    sumaFinal  = (sumaFinal1+sumaFinal2+sumaFinal3);
    iva = (sumaFinal*0.21);

    precioFinal = (sumaFinal+iva);
    alert("El precio final es de: "+precioFinal);
}