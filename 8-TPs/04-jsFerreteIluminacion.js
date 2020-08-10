/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */

 function CalcularPrecio () 
{
    var cantLamparas;
    var precio;
    var marca;
    var precioFinal;

    cantLamparas = txtIdCantidad.value;
    cantLamparas = parseInt(cantLamparas);
    marca = Marca.value;
    precio = 35;

    if(cantLamparas > 5)
    {
        precio = 35*cantLamparas;
        precio = precio*0.5;
    }else
    {
        if(cantLamparas == 5)         
        {   
            precio = 35*cantLamparas;

            if(marca == "ArgentinaLuz")
            {
                precio = precio*0.4;
            }else
            {
                precio = precio*0.3;
            }
        }else
        {
            if(cantLamparas == 4)
            {
                precio = 35*cantLamparas;

                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    precio = precio*0.25;
                }else
                {
                    precio = precio*0.2;
                }
            }else
            {
                if(cantLamparas == 3)
                {
                    precio = 35*cantLamparas;

                    if(marca == "ArgentinaLuz")
                    {
                        precio = precio*0.15;
                    }else
                    {
                        if(marca == "FelipeLamparas")
                        {
                            precio = precio*0.10;
                        }else
                        {
                            precio = precio*0.05;
                        }
                    }
                }
            }
        }
    }
    if(precio > 120)
    {
        precio = precio+precio*0.10;
        alert("IIBB Usted pago "+precio);
    }else
    {
        txtIdprecioDescuento.value = precio;
    }
}

