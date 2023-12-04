const YEN = 129.852;
const DOLAR = 1.28611;
const LIBRA = 0.86;
const cambioEuroDivisa = (euros, divisa) =>{
    switch(divisa){
        case("yen"):
            alert("el cambio de " + euros + " € són " + euros*YEN + " YENES ")
        break;
        case("dolar"):
            alert("el cambio de " + euros + " € són " + euros*DOLAR + " $ ")
        break;
        case("libra"):
            alert("el cambio de " + euros + " € són " + euros*LIBRA + " Libras ")
        break;
        default:
            alert("elección erronea");
    }
}

const euros = prompt("¿Cuantos euros quieres intercambiar?");

const divisa = prompt("¿A que divisa quieres cambiar?(yen, dolar, libra)");

cambioEuroDivisa(euros, divisa);
