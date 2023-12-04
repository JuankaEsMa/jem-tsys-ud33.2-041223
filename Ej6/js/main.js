const contadorCifras = (num) => {
    let contador = 0;
    for (let i = num; i > 0; parseInt(i = parseInt(i / 10))) {
        contador ++;
    }
    return contador;
};
let num;
do{
     num = prompt("Escriba un número positivo");
}while(num < 1);

console.log(contadorCifras(num))

