/*
Enunciado  a)”bandera a full”
de una cantidad de espectadores  indeterminada debemos tomar lo siguiente datos
sexo
altura
edad
nombre
se debe informar:

1-el nombre de la más alta de las mujeres
2-el nombre del  más viejo de los hombres 
3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si  hay  algún adolescente)
NOTA:pedir datos por "prompt()" y mostrar por console.log()
*/

function mostrar()
{
    var sexo;
    var altura;
    var edad;
    var nombre;
    var respuesta;
    var flagMujer;
    var flagHombre;
    var flagAdolesc;
    var alturaMaximaMujeres;
    var mujerMasAlta;
    var edadMaximaHombres;
    var hombreMasViejo;
    var primerAdolescente;

    while(respuesta == "si")
    {
        sexo = prompt("Ingrese su genero: F o M.");
        sexo = sexo.toUpperCase();
        while(sexo != "F" && sexo != "M")
        {
            sexo = prompt("Reingrese su genero en el formato indicado: F o M.");
        }

        altura = prompt("Ingrese su altura.");
        altura = parseFloat(altura);

        edad = prompt("Ingrese su edad.");
        edad = parseInt(edad);

        nombre = prompt("Ingrese su nombre.");

        if(sexo == "M")
        {
            if(flagMujer == true || altura > alturaMaximaMujeres)
            {
                alturaMaximaMujeres = altura;
                mujerMasAlta = nombre;
                flagMujer = false;
            }  
        }else
        {
            if(flagHombre == true || edad > edadMaximaHombres)
            {
                edadMaximaHombres = edad;
                hombreMasViejo = nombre;
                flagHombre = false;
            }
        }

        if(edad < 18 && edad > 10)
        {
            if(flagAdolesc == true)
            {
                primerAdolescente = nombre;
                flagAdolesc = false;
            }
        }

        respuesta = prompt("¿Desea ingresa mas datos? si/no");
    }

}
