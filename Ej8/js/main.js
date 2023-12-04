const rellenarValores = (array)=>{
    for (let i = 0; i < array.length; i++) {
        array[i] = prompt("Di el número " + (parseInt(i)+parseInt(1)));
    }
}
const mostrarValores = (array)=>{
    for (let i = 0; i < array.length; i++) {
        console.log("El número " + array[i] + " está en la posición " + i);
    }
}

array = []
array.length = 10;

rellenarValores(array);
mostrarValores(array);