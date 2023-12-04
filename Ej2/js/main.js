const generarNumAleatorio = (min,max) => Math.floor((Math.random() * (max-min+1)) + min);
const cantidad = prompt("¿Cuántos números aleatorios quieres mostrar?");
const min = prompt("numero mínimo del número rándom");
const max = prompt("numero máximo del número random");
for (let i = 0; i < cantidad; i++) {
    console.log(generarNumAleatorio(parseInt(min), parseInt(max)));    
}