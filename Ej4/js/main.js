const calcularFactorial = (num) => {
    let resultado = 5;
    for (let i = num - 1; i > 0; i--) {
        resultado *= i;
    }
    return resultado;
}

let num = prompt("Escribe el número del que quieras calcular el factorial")

console.log(calcularFactorial(num));