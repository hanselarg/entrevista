let pesos=[67,69,70,70,71,70,70];
for (let i=0;i<pesos.length;i++) {
    console.log(pesos[i]);
}

class Bicicleta {
    constructor(color,cantRuedas) {
        this.color=color;
        this.ruedas=cantRuedas;
        this.velocidad=0;
    }
    acelerar(incrementoVelocidad) {
        this.velocidad+=incrementoVelocidad;
               
    }
     
}

let biciRoja = new Bicileta("roja",2);
let biciVerde = new Bicicleta("verde",2);

biciRoja.acelerar(30);
biciVerde.acelerar(20);

class Bmx extends Bicicleta {
    constructor(color,cantRuedas,hasGps) {
        this.super(color,cantRuedas);
        this.altura=0;
        this.hasGps=hasGps;
    }

    saltar(altura) {
        this.altura+=altura;
    }
}


let coleccionBmx = [new Bmx("violeta",2,true),new Bmx("naranja",2,false)]; 



// diccionario - objeto literal
// Big O notation -  O(1) - acceso constante -  O(n) - acceso lineal, O(n^2)  




let agenda = {
    juan:"334", 
    "maria ana":"555",
    pedro:"123"
}


let agenda2 = [
    {nombre:"juan", telefono:"334"},
    {nombre:"maria ana", telefono:"555"},
    {nombre:"pedro", telefono:"123"}
    ]

// acceso constante O(1) porque no importa la cantidad de elementos que haya en la agenda, el acceso sigue siendo igual de performante y es directo
let telMaria = agenda["maria ana"];

let telMaria = null;
// O(n) porque en el peor de los casos va a recorrer a todos los elementos
for (let i=0 ; i < agenda2.lenght; i++){

    if (agenda2[i].nombre === "maria ana"){
        telMaria = agenda2[i].telefono;
    }    
         
}

if(telMaria){
   console.log("Encontrada");
}

//expresiones ternarias
const encontrada = telMaria ? "Encontrada": "No encontrada"
// const porque es mejor que las variables sean inmutables salvo que necesite modificarlas


//diferencia entre ++i e i++

let i = 0;
const a = i++;  
console.log(i);
// a = 0  i = 1

let i = 0;
const b = ++i;
console.log(i);
// b = 1   i =1



// diferencia entre == y === en javascript

/*let num = "3"

num == 3 => true
"3" == 3

num === 3 => false
*/

// hacer una funcion para verificar si una palabra es un palindromo. Un palindromo es una palabra que se lee igual al derecho y al reves

function esPalindromo(str){
    return str === str.reverse();
}


function esPalindromo2(str) {
    if(!str || typeof str !== "string"){
      return false;
    }
    
    if (str.length === 0){
        return true;
    }

    for(let i=0; i<str.length-1-i ;i++){
      if (str[i]!==str[str.length-1-i]){
        return false;
      } 
    }

    return true;
}

/*test cases 
esPalindromo("menem") => true
esPalindromo("casa") => false
esPalindromo("") => true
esPalindromo("a") =>true
*/


// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
// Test Data :

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
/*Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2] 
*/

var last = function lastElement(array,n) {
    if (array == null)
        return null;
    if (n == null)
        return array[array.length-1];
    return array.slice(Math.max(array.length-n,0));
};

console.log(last([7, 9, 0, -2]));