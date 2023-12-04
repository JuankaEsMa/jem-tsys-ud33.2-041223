const areaCirculo = (radio)=>radio/2;
const areaTriangulo = (base,altura)=>base*altura;
const areaCuadrado = (lado1,lado2) =>lado1*lado2;

let figura = prompt("de que figura deseas calcular el area (circulo, triangulo o cuadrado)")
let resultado = null;

switch(figura.toLowerCase()){
    case("circulo"):
        let radio = prompt("Escríbeme el radio")
        resultado = areaCirculo(radio);
        break;
    case("triangulo"):
        let base = prompt("Escribeme la base");
        let altura = prompt("Escribeme la altura");
        resultado = areaTriangulo(base,altura);
        break;
    case("cuadrado"):
        let lado = prompt("Escribeme el lado");
        resultado = areaCuadrado(lado,lado);
        break;
}
if(isNaN(resultado)){
    alert("Proporcionaste datos imposibles de calcular");
}else{
    alert("El area del " + figura.toLowerCase() + " es " + resultado);
}