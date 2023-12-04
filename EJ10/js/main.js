const isPrimo = (num) => {
    for (let i = parseInt(num/2); i > 1; i--) {
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
const rellenarArray = (min, max)=>{
    let i = 0;
    while (i < array.length) {
        let numAleatorio = Math.floor((Math.random()*(max-min+1)+min))
        if(isPrimo(numAleatorio)){
            array[i] = numAleatorio;
            i++
        }
    }
}
const mostrarArray = () => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
const comprobarMayor = () => {
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
        if(mayor < array[i]){
            mayor = array[i];
        }
    }
    return mayor;
}
let array = [];
let tamañoArray = prompt("Indica el tamaño de la array");
let min = prompt("Cúal quieres que sea el minimo para los números?")
let max = prompt("Cúal quieres que sea el máximo para los números?")

array.length = tamañoArray;

rellenarArray(min,max);
mostrarArray()
console.log("El número mayor es " + comprobarMayor())
