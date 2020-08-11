console.log("Conectado");

let us = "Juan";
let vs = "Pedro";

let ush = Math.floor(Math.random()*6)+1;
let vsh = Math.floor(Math.random()*6)+1;

let hyo = "";
let hel = "";

switch (ush) {
    case 1:
        hyo = "Tijera";
    break;
    
    case 2:
        hyo = "Papel";
    break;

    case 3:
        hyo = "Piedra";
    break;

    case 4:
        hyo = "Tijera";
    break;
        
    case 5:
        hyo = "Papel";
    break;
        
    case 6:
        hyo = "Piedra";
    break;

    default:
        hyo = "No elegiste nada";
    break;
}

switch (vsh) {
    case 1:
        hel = "Piedra";
    break;

    case 2:
        hel = "Tijera";
    break;

    case 3:
        hel = "Papel";
    break;

    case 4:
        hel = "Piedra";
    break;

    case 5:
        hel = "Tijera";
    break;

    case 6:
        hel = "Papel";
    break;

    default:
        hel = "No elegiste nada";
    break;
}
var r = ""
if(hyo < hel){
    r = "Vos perdiste";
}else{
    r = "Vos ganaste";
}


let resultado = "Vos sos: " + us + " Y tu enemigo es: " + vs + " Vos elegiste: " + hyo + " Y el: " + hel + ". Y vos: " + r ;


document.getElementById("Resultado").innerHTML = resultado;