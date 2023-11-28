// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

// declarar elemento 'escuchador': "resultsBtn"
// declarar variable que recoge el número del usuario: "num"
// crear función con if / else con el operador '%'para verificar si el número es divisible

// declarar variable "divisiblesNum" como array vacío
// modificar condiciones para añadir con métido .push el número por el cuál es divisible
//  convertir el array resultante en una cadena (separado de ,) con el método .join(', ')

const resultsBtn = document.getElementById("resultBtn");

function divisible() {

    let num = document.getElementById("numberUser").value;
    let result = document.getElementById("result");
    let divisiblesNum = [];


        if (num % 2 === 0) {
            divisiblesNum.push(2);                 
        }
        if (num % 3 === 0) {
            divisiblesNum.push(3);       
        }
        if (num % 5 === 0) {
            divisiblesNum.push(5);       
        }
        if (num % 7 === 0) {
            divisiblesNum.push(7);
        }

        if (divisiblesNum.length >0) {
            result.innerHTML= "El número " + num + " es divisible por: " + divisiblesNum.join(", ");             
        }
        
        else {
            result.innerHTML = "El número " + num + " no es divisible por 2, 3, 5 ni 7";              
        }
}
    resultsBtn.addEventListener("click", divisible);
