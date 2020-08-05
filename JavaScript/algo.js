console.log("Hola a todos");

function Nombre(a, b){
    return "Hola, me llamo: " + a + " y tengo: " + b + " años";
}
console.log (Nombre("Agustin", "17")) ;

var yo = [ "Agustin" ,"Surila" , 17];
var info = "Hola, mi nombre es: " + yo [0] + " ,mi apellido es: " + yo[1] + " y tengo: " + yo[2] + " años."
console.log(info);

var usted = {nombre:"Gaston",apellido:"Algo", edad:17};
var info2 = "tu nombre es: " + usted.nombre + " ,Tu apellido es: " + usted.apellido + " y tu edad es: " + usted.edad + " años."
console.log(info2);

var a, b, c ;
    a = "11";
    b = "22";
    c = a * b;

console.log(c);

function calculo(a, b){
    return a>=b;
}
console.log(calculo(11, 12));

var algo = "Hola, soy agustin \"Soy un adolescente\" y tengo 17 años";
console.log(algo);

var fecha = new Date();
var titulo = "El dia de hoy es: " + fecha;
document.getElementById("demo").innerHTML = fecha.toUTCString();

var i, txet;
i = 1;
txet = "";
while(i<11){
    txet += "<br>El numero es: " + i;
    i++;
}
document.getElementById("demo").innerHTML = txet;

var nombres = ["Agustin", "Elias" , "Juan"];
var x;
for(x of nombres){
    document.write(x + "<br>");
}

let multiplicar = (a, b) => {return a * b};
console.log(multiplicar(2,3));

let autos = ["WV", "Chevrolet", "Nissan"];
for (const key in autos) {
    console.log(autos[key]);
}

//Evento con el boton
document.getElementById("boton").addEventListener("mouseover", function(){
    document.getElementById("boton").style.backgroundColor = "red";
})
document.getElementById("boton").addEventListener("mouseout", function(){
    document.getElementById("boton").style.backgroundColor = "white";
})
