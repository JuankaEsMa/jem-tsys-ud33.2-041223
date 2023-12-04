let array = [];
let array2 = [];
const rellenarArray = (min, max)=>{
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor((Math.random()*(max-min+1)+min));
    }
}
const rellenarArray2 = (array, numero) => {
    for (let i = 0; i < array.length; i++) {
        array2.push(cogerUltimoNumero(array[i]));
    }
}
const mostrarArray = (array) =>{
    for (let i = 0; i < array.length; i++) {
        console.log("numero: " + array[i] + " posición: " + i);  
    }
}

const cogerUltimoNumero = (numero) => numero%10;
const isInt = (numero) => !isNaN(numero);


let dimension = prompt("Escriba la dimensión de la array")
while(!isInt(dimension)){
    dimension = prompt(dimension + " no es un número, escriba un número correcto");
}
let numero = prompt("Escriba el número que quieres buscar como último dígito")
while(!isInt(numero)){
    numero = prompt(numero + " no es un número, escriba un número correcto");
}

array.length = dimension;
rellenarArray(1,300);
rellenarArray2(array, numero);
console.log("Array 1");
mostrarArray(array);
console.log("Array 2");
mostrarArray(array2);

