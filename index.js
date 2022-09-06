let min = 1
let max = 20
let intentos = 0
let nombreJugadorUno = prompt("Ingrese el nombre del Jugador 1")
let nombreJugadorDos = prompt("Ingrese el nombre del Jugador 2")
let numeroSecreto = prompt(nombreJugadorUno+" elegí un número entre el 1 y el 20 el cual "+nombreJugadorDos+" deberá adivinar\n¡"+nombreJugadorDos+" NO MIRES!" )
let numero

function calculoIntentosRestantes() {
    let intentosRestantes = 4 - intentos
    return intentosRestantes
}


if (numeroSecreto >= min && numeroSecreto <= max) {
    for(intentos; intentos < 5; intentos++) {
        numero = parseInt(prompt(nombreJugadorDos + ", ingresa un número entre el "+min+" y el "+max))
        cantIntententos = calculoIntentosRestantes()
        if(numero >= min && numero <= max) {
            if(numero < numeroSecreto) {
                alert("El número que ingresaste es más bajo\nTe quedan "+cantIntententos+" intentos")
            } else if (numero > numeroSecreto) {
                alert("El número que ingresaste es más alto\nTe quedan "+cantIntententos+" intentos")
            }
            else if(numero == numeroSecreto){
                break
            }
        } else {
            alert("Debe ingresar un número entre "+min+" y "+max)
        }
    }
    if(numero == numeroSecreto) {
        alert("¡Felicitaciones! Adivinaste el número en "+(intentos + 1)+" intentos")
    } else {
        alert("Agotaste el numero de intentos. Suerte para la próxima!")
    }
} else {
    alert("Debe ingresar un número entre "+min+" y "+max)
}