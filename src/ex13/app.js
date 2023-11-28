// Escribir un programa que escriba en pantalla los divisores de un número dado

// declarar elemento 'escuchador': "resultsBtn"
// declarar variable que recoge el número del usuario: "num"
// crear función con if / else con el operador '%'para verificar si el número es divisible

// declarar variable "divisorsNum" como array vacío
// añadir con métido .push el número por el cuál es divisible
//  convertir el array resultante en una cadena (separado de ,) con el método .join(', ')

const resultsBtn = document.getElementById("resultBtn");

function divisor() {

    let num = document.getElementById("numberUser").value;
    let result = document.getElementById("result");
    let divisorsNum = [];
    
    result.innerHTML = "Los divisores de " + num + " son: ";

    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            divisorsNum.push(i);      
        }        
    }    
    result.innerHTML += divisorsNum.join(", ");  
 
}
    resultsBtn.addEventListener("click", divisor);
