function mostrar()
{
  var tipoBolsa;
  var cantBolsasArena;
  var cantBolsasCal;
  var cantBolsasCemento;
  var acumuladorArena;
  var acumuladorCal;
  var acumuladorCemento;
  var precioBolsaArena;
  var precioBolsaCal;
  var precioBolsaCemento;
  var cantBolsasTotal;
  var importeTotal;
  var respuesta;

  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0;
  respuesta = "Si";

  while(respuesta=="Si")
  {
    tipoBolsa = prompt("Ingrese el tipo de bolsa: arena, cal, o cemento.");
    tipoBolsa = tipoBolsa.toLowerCase();

    while(tipoBolsa != "arena" && tipoBolsa != "cal" && tipoBolsa != "cemento")
    {
      tipoBolsa = prompt("Reingrese el tipo de bolsa en el formato requerido: arena, cal, o cemento.");

    }
    
    switch(tipoBolsa)
    {
      case "arena":
          cantBolsasArena = prompt("Ingrese la cantidad de bolsas");
          cantBolsasArena = parseInt(cantBolsasArena);
          acumuladorArena = acumuladorArena+cantBolsasArena;
          break;

      case "cal":
          cantBolsasCal = prompt("Ingrese la cantidad de bolsas");
          cantBolsasCal = parseInt(cantBolsasCal);
          acumuladorCal = acumuladorCal+cantBolsasCal;
          break;

      case "cemento":
          cantBolsasCemento = prompt("Ingrese la cantidad de bolsas");
          cantBolsasCemento = parseInt(cantBolsasCemento);
          acumuladorCemento = acumuladorCemento+cantBolsasCemento;
          break;
    }
    /*precioPorBolsa = prompt("Ingrese el precio de la bolsa de "+tipoBolsa+".");
    precioPorBolsa = parseInt(precioPorBolsa);
    while(isNaN(precioPorBolsa) || precioPorBolsa<0)
    {
      precioPorBolsa = prompt("Reingrese el precio de la bolsa en valores positivos y sin signo $.");
      precioPorBolsa = parseInt(precioPorBolsa);
    }*/
    respuesta = prompt("¿Desea continuar agregando productos? Si/No")
  }
  precioBolsaArena = prompt("Ingrese el precio de la bolsa de arena.");
  precioBolsaArena = parseInt(precioBolsaArena);
  while(isNaN(precioBolsaArena) || precioBolsaArena<0)
  {
    precioBolsaArena = prompt("Reingrese un valor mayor que cero y sin signo $.");
    precioBolsaArena = parseInt(precioBolsaArena);
  }

  precioBolsaCal = prompt("Ingrese el precio de la bolsa de cal.");
  precioBolsaCal = parseInt(precioBolsaCal);
  while(isNaN(precioBolsaCal) || precioBolsaCal<0)
  {
    precioBolsaCal = prompt("Reingrese un valor mayor que cero y sin signo $.");
    precioBolsaCal = parseInt(precioBolsaCal);
  }

  precioBolsaCemento = prompt("Ingrese el precio de la bolsa de cemento.");
  precioBolsaCemento = parseInt(precioBolsaCemento);
  while(isNaN(precioBolsaCemento) || precioBolsaCemento<0)
  {
    precioBolsaCemento = prompt("Reingrese un valor mayor que cero y sin signo $.");
    precioBolsaCemento = parseInt(precioBolsaCemento);
  }

  importeTotal = acumuladorArena*precioBolsaArena+acumuladorCal*precioBolsaCal+acumuladorCemento*precioBolsaCemento;
  alert("Debe pagar: $"+importeTotal);

  cantBolsasTotal = acumuladorArena+acumuladorCal+acumuladorCemento;
  if(cantBolsasTotal>10 && cantBolsasTotal<31)
  {
    importeTotal = importeTotal*0.15;
    alert("Pero con el descuento del 15% quedan: $"+importeTotal);
  }else
  {
    if(cantBolsasTotal>30)
    {
      importeTotal = importeTotal*0.25;
      alert("Pero con el descuento del 25% quedan: $"+importeTotal);
    }
  }

  if(acumuladorArena>acumuladorCal && acumuladorArena>acumuladorCemento)
  {
    alert("Hay mas bolsas de arena que del resto.");
  }else
  {
    if(acumuladorCal>acumuladorArena && acumuladorCal>acumuladorCemento)
    {
      alert("Hay mas bolsas de cal que del resto.");
    }else
    {
      if(acumuladorCemento>acumuladorArena && acumuladorCemento>acumuladorCal)
      {
        alert("Hay mas bolsas de cemento que del resto.");
      }
    }
  }

  if(precioBolsaArena>precioBolsaCal && precioBolsaArena>precioBolsaCemento)
  {
    alert("Las bolsas de arena son las mas caras.");
  }else
  {
    if(precioBolsaCal>precioBolsaArena && precioBolsaCal>precioBolsaCemento)
    {
      alert("Las bolsas de cal son las mas caras.");
    }else
    {
      if(precioBolsaCemento>precioBolsaArena && precioBolsaCemento>precioBolsaCal)
      {
        alert("Las bolsas de cemento son las mas caras.");
      }
    }
  }
}
