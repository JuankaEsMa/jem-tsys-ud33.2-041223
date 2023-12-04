const isPrimo = (numero)=> {
    for (let i = parseInt(numero/2); i > 1; i--) {
        if(numero%i == 0){
            return false;
        }
    }
    return true;
}
let numero = prompt("Escribe un número y te diré si es primo");
console.log(isPrimo(numero));
