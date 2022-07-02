var texto = document.getElementById("metritos");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", minutosPorClick);


var metros = parseInt(texto.value);
var minutos_final;

function minutosPorClick(metros, minutos_final)
{
var metros = parseInt(texto.value);
if (metros < 10)
{
    minutos_final = parseInt(minutos_final);
    resultado.innerHTML = "<strong>Quedáte a vivir bajo el agua!</strong>";
    }
else if (metros <= 12)
    {
        minutos_final = 199;
        minutos_final = parseInt(minutos_final);
        resultado.innerHTML = "<strong>Podés bucear <strong><i>" + minutos_final + " minutos!</i></strong>";    
    }
else if (metros <= 14)
    {
        minutos_final = 134;
        minutos_final = parseInt(minutos_final);
        resultado.innerHTML = "<strong>Podés bucear <strong><i>" + minutos_final + " minutos!</i></strong>";
    }
else if (metros <= 16)
    {
        minutos_final = 92;
        minutos_final = parseInt(minutos_final);
        resultado.innerHTML = "<strong>Podés bucear <strong><i>" + minutos_final + " minutos!</i></strong>";
    }
else if (metros <= 18)
    {
        minutos_final = 55;
        minutos_final = parseInt(minutos_final);
        resultado.innerHTML = "<strong>Podés bucear <strong><i>" + minutos_final + " minutos!</i></strong>";
    }
else if (metros <= 20)
    {
        minutos_final = 44;
        minutos_final = parseInt(minutos_final);
        resultado.innerHTML = "<strong>Podés bucear <strong><i>" + minutos_final + " minutos!</i></strong>";
    }
else if (metros <= 22)
    {
        minutos_final = 36;
        minutos_final = parseInt(minutos_final);
        resultado.innerHTML = "<strong>Podés bucear <strong><i>" + minutos_final + " minutos!</i></strong>";
    }
else if (metros <= 25)
    {
        minutos_final = 28;
        minutos_final = parseInt(minutos_final);
        resultado.innerHTML = "<strong>Podés bucear <strong><i>" + minutos_final + " minutos!</i></strong>";
    }
else if (metros <= 30)
    {
        minutos_final = 18;
        minutos_final = parseInt(minutos_final);
        resultado.innerHTML = "<strong>Podés bucear <strong><i>" + minutos_final + " minutos!</i></strong>";
    }
else //(metros >= 21)
    {
        //minutos_final = parseInt(minutos_final);
        resultado.innerHTML = "<strong>No te da la nafta, gil!</strong>";   
    } 
    
}
var resultado = document.getElementById("resultado");

    var mp = document.getElementById("marprofundo");
    var papel = mp.getContext("2d");
    document.addEventListener("keyup", moverbuzo);

    
var xbuzo = 200;
var ybuzo = 200

function moverbuzo(evento)
{
var movimiento = 10;
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
  switch(evento.keyCode)
  {
    case teclas.UP:
      ybuzo = ybuzo - movimiento;
      dibujar();
    break;
    case teclas.DOWN:
        ybuzo = ybuzo + movimiento;
        dibujar();
    break;
    case teclas.LEFT:
        xbuzo = xbuzo - movimiento;
        dibujar();
    break;
    case teclas.RIGHT:
        xbuzo = xbuzo + movimiento;
        dibujar();
    break;
    default:
        console.log("otra tecla")
  } 
}


var buzo = {
        url: "buceador.png",
        cargaOk: false,
        posX: 225,
        posY: 225
    }  


var fondo_1 = {
    url: "fondo_1.png",
    cargaOk: false
}

    
fondo_1.imagen = new Image();
fondo_1.imagen.src = fondo_1.url;
fondo_1.imagen.addEventListener("load", cargarFondo);

buzo.imagen = new Image();
buzo.imagen.src = buzo.url;
buzo.imagen.addEventListener("load", cargarbuzo);

function cargarbuzo()
{
    buzo.cargaOk = true;
    dibujar();
}


function cargarFondo()
{
    fondo_1.cargaOk = true;
    dibujar();
}

function dibujar()
{
    if (fondo_1.cargaOk)
    {
        papel.drawImage(fondo_1.imagen, 0, 0);
        if (buzo.cargaOk)
        {
            
                papel.drawImage(buzo.imagen, xbuzo, ybuzo);
        
        }
    }
}

    