function encriptar(){
    var mensaje = document.getElementById("mensajeEncriptado").value.toLowerCase();
    var muneco = document.getElementById("muneco");
    var advertencia = document.getElementById("mensajeNoEncuentra");
    var resultado = document.getElementById("mensajeRespuesta");
    // la i de img es para que tome letras minusculas y mayusculas
    // la m sirve para que tenga en cuenta toda la linea
    // la g es para contemplar multiples lineas

    var mensajeEncriptado = mensaje.replace(/e/img,"enter");
    var mensajeEncriptado = mensajeEncriptado.replace(/i/img,"imes");
    var mensajeEncriptado = mensajeEncriptado.replace(/o/img,"ober");
    var mensajeEncriptado = mensajeEncriptado.replace(/u/img,"ufat");
    var mensajeEncriptado = mensajeEncriptado.replace(/a/img,"ai");

    
    
    if (mensaje == "") {
        alert("Ingrese texto para encriptar")
        
    }
    else {
        document.getElementById("mensajeRespuesta").innerHTML = mensajeEncriptado;
        muneco.classList.add("Nomuneco");
        advertencia.classList.add("Norespuesta");
        resultado.classList.remove("mensaje");
        resultado.classList.add("Simensaje");
    }
}

function desencriptar(){
    var mensaje = document.getElementById("mensajeEncriptado").value.toLowerCase();
    

    // la i de img es para que tome letras minusculas y mayusculas
    // la m sirve para que tenga en cuenta toda la linea
    // la g es para contemplar multiples lineas

    var mensajeEncriptado = mensaje.replace(/enter/img,"e");
    var mensajeEncriptado = mensajeEncriptado.replace(/imes/img,"i");
    var mensajeEncriptado = mensajeEncriptado.replace(/ober/img,"o");
    var mensajeEncriptado = mensajeEncriptado.replace(/ufat/img,"u");
    var mensajeEncriptado = mensajeEncriptado.replace(/ai/img,"a");

    if (mensaje == "") {
        alert("Ingrese texto para Desencriptar")
        
    }
    else {
        document.getElementById("mensajeRespuesta").innerHTML = mensajeEncriptado;
        muneco.classList.add("Nomuneco");
        advertencia.classList.add("Norespuesta");
        resultado.classList.remove("mensaje");
        resultado.classList.add("Simensaje");
    }
    
}

function copiar(){
    var contenido = document.getElementById("mensajeRespuesta");
    var seleccion = document.createRange();
    
    if (contenido.value == "") {
        alert("No hay nada para copiar")        
    } else {
        seleccion.selectNodeContents(contenido);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(seleccion);

    var res = document.execCommand("copy");
    window.getSelection().removeAllRanges(seleccion);
    }
}

var btn = document.getElementById("botonEncriptar");
var muneco = document.getElementById("muneco");
var advertencia = document.getElementById("mensajeNoEncuentra");
var resultado = document.getElementById("mensajeRespuesta");
btn.onclick = encriptar;



var btn2 = document.getElementById("botonDesencriptar");
btn2.onclick = desencriptar;

var btn3 = document.getElementById("botonCopiar");
btn3.onclick = copiar;

