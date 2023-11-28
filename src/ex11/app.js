// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

// declarar elemento 'escuchador': "resultsBtn"
// declarar variable que recoge el número del usuario: "num"
// crear función con if / else con el operador '%'para verificar si el número es divisible


const resultsBtn = document.getElementById("resultBtn");

function divisible() {

    let num = document.getElementById("numberUser").value;

        if (num % 2 === 0) {
            result.innerHTML = "El número " + num + " es divisible por 2";       
        }
        else if (num % 3 === 0) {
            result.innerHTML = "El número " + num + " es divisible por 3";       
        }
        else if (num % 5 === 0) {
            result.innerHTML = "El número " + num + " es divisible por 5";       
        }
        else if (num % 7 === 0) {
            result.innerHTML = "El número " + num + " es divisible por 7";              
        }   
        else {
            result.innerHTML = "El número " + num + " no es divisible por 2, 3, 5 ni 7";              
        }
}
    resultsBtn.addEventListener("click", divisible);
