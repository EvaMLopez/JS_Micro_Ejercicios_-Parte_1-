// Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

// declarar elemento 'escuchador': "resultsBtn"
// declarar variable que recoge el número del usuario: "num"
// solicitar introducir un número mayor a 1
// definir variable "isPrime" como true
// en bucle for, varible "isPrime" cambia a false si "num" es divisble por alguno de los números en la iteración


const resultsBtn = document.getElementById("resultBtn");

function primeNumber() {
    
    let num = document.getElementById("num").value;
    let result= document.getElementById("result");   

    if (num <=1) {
        result.innerHTML = "Por favor, introduce un número mayor que 1";  
        return;    
    }

    let isPrime = true;  

    for (let i = 2; i < num/2; i++) {
        if (num % i === 0) {   
            isPrime = false;
            break;
        }        
    }  

    if(isPrime) {
        result.innerHTML = num + " es un número primo";  

    } else {
        result.innerHTML = num + " no es un número primo";
    }
}

resultsBtn.addEventListener("click", primeNumber);
