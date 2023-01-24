// Declaracion de variables
let btn = document.getElementById("botonEncriptar");
let btn2 = document.getElementById("botonDesencriptar");
let btn3 = document.getElementById("botonCopiar");

const vowels = ["a","e","i","o","u"];
const cript = ["ai","enter","imes","ober","ufat"];


let muneco = document.getElementById("muneco");
let advertencia = document.querySelector(".texto-advertencia");
let resultado = document.getElementById("mensajeRespuesta");


//puedo mejorar la funcion encriptar, utilizando las constantes vowels y cript
function encriptar(){
    var mensaje = document.getElementById("mensajeEncriptado").value.toLowerCase();
    var mensajeEncriptado = "";

    for (var i = 0; i < mensaje.length; i++) {
        var caracter = mensaje[i];
        switch (caracter) {
            case "e":
                caracter = "enter";
                break;
            case "i":
                caracter = "imes";
                break;
            case "a":
                caracter = "ai";
                break;
            case "o":
                caracter = "ober";
                break;
            case "u":
                caracter = "ufat";
                break;
        }
        mensajeEncriptado += caracter;
    }
    if (mensaje == "") {
        alert("Ingrese texto para encriptar")
    } else {
        muneco.classList.add("oculto");
        advertencia.classList.add("oculto");
        resultado.classList.remove("oculto");
        document.getElementById("mensajeRespuesta").value = mensajeEncriptado;
        btn3.classList.remove("oculto");
        resultado.scrollIntoView();
    }
}

function desencriptar() {
    var mensajeEncriptado = document.getElementById("mensajeEncriptado").value.toLowerCase();


    for(var i = 0; i <= 5; i++){
        if (mensajeEncriptado.includes(cript[i])) {
            while (mensajeEncriptado.includes(cript[i])){
            mensajeEncriptado = mensajeEncriptado.replace(cript[i],vowels[i]);
            
            }
            
        }
        
    } 
    if(mensajeEncriptado == ""){
        alert("no hay mensaje para desencriptar")

    } else {
    document.getElementById("mensajeRespuesta").value = mensajeEncriptado;
    muneco.classList.add("oculto");
    advertencia.classList.add("oculto");
    resultado.classList.remove("oculto");
    btn3.classList.remove("oculto");
    resultado.scrollIntoView();
    }        
}
    


    


function copiar() {
    var contenido = document.getElementById("mensajeRespuesta");
    var seleccion = window.getSelection();
    var range = document.createRange();
    range.selectNode(contenido);
    seleccion.removeAllRanges();
    seleccion.addRange(range);

    try {
        var res = document.execCommand("copy");
        if(res){
            console.log("Copied!")
        }else{
            console.log("Failed to copy!")
        }
    } catch (err) {
        console.log("Failed to copy!")
    }
    seleccion.removeAllRanges();
}


// Inicializacion de funciones luego del evento "onClick"

btn.onclick = encriptar;

btn2.onclick = desencriptar;

btn3.onclick = copiar;

