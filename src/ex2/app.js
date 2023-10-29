//Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.

// crear variables 3 y 5 y suma
// imprimir en h1 en DOM
// crear función 

let numberA = 3
let numberB = 5
const result = numberA + numberB

const resultSection = document.getElementById("result")

function sumNumbers() {
    resultSection.innerHTML = result
}

sumNumbers()


