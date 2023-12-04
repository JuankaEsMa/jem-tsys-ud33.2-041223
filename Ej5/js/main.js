const decimalABinario = (numero) => {
    numeroBinario = "";
    while(numero > 0){
        numeroBinario = (numero%2) + numeroBinario;
        numero = parseInt(numero/2);
    }
    return numeroBinario;
}

let num = prompt("Escriba el número que quiera pasar a binario");

console.log(decimalABinario(num));