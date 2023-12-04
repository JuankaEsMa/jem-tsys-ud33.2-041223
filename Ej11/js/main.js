let array1 = [];
let array2 = [];
let array3 = [];
const rellenarArray = (array, dimension) => {
    array.length = dimension;
    for (let i = 0; i < dimension ;i++) {
        array[i] = Math.floor(Math.random()*100);
    }
}
const crearArray3 = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
        array3.push(array1[i] + array2[i]);
    }
}
const mostrarArray = (array) =>{
    for (let i = 0; i < array.length; i++) {
        console.log("numero: " + array[i] + " posición: " + i);  
    }
}

let dimension = prompt("Ponga la dimensión del array");

rellenarArray(array1, dimension);
array2 = array1;
rellenarArray(array2, dimension);
crearArray3(array1, array2);

console.log("Array 1");
mostrarArray(array1);
console.log("Array 2");
mostrarArray(array2);
console.log("Array 3");
mostrarArray(array3);