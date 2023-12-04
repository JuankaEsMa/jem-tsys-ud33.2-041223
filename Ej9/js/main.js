let tamañoArray = prompt("Escriba el tamaño de la array");
let array = [];
array.length = tamañoArray ;
const rellenarArray = (min, max)=>{
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor((Math.random()*(max-min+1)+min));
    }
}
const mostrarConenidoYSuma = () => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
        console.log("Numero " + array[i] + " en posición " + i);
    }
    console.log("Suma de todos los números = " + suma);
}

rellenarArray(0,9);
mostrarConenidoYSuma();