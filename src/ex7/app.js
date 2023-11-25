//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

// declarar elemento "escuchador" (método addEventListener)
// declarar variable recoge la frase del usuario
// declarar variable "characters" con 'split' para convertir la frase en un array
// variable "characters" con filter para crear nuevo array
// crear función "character" con método toLowerCase para no distinguir entre mayúsculas y minúsculas
// crear sección donde se mostrará el mensaje con el resultado
// crear función 
// asignar método addEventListener

// OPCION 1 //
const resultsBtn1 = document.getElementById("resultBtn");

function charactersA() {
    let phrase = document.getElementById("phrase").value;
    let characters = phrase.split('');
    let contA = characters.filter(function(character) 
            {return character.toLowerCase() === 'a';
        }).length;

    let resultA = document.getElementById("result");
    
    resultA.innerHTML = "La letra 'a' aparece " + contA + " veces.";
}

resultsBtn1.addEventListener("click", charactersA);


// OPCIÓN 2 CON BUCLE FOR //

// sacar un caracter de una cadena con el método charAt()
// convertir cada caracter en minúscula con el método toLowerCase() para después compararlo con "a"

const resultsBtn2 = document.getElementById("resultBtnFor");

function charactersAFor() {
    let phrase = document.getElementById("phrase").value;
    let cont = 0;
    for (let i = 0; i < phrase.length; i++) {
        let AllCharacters = phrase.charAt(i).toLowerCase();
        if (AllCharacters === 'a') {
            cont ++;
        }    
    }
    let resultB = document.getElementById("resultFor");
    
    resultB.innerHTML = "La letra 'a' aparece " + cont + " veces.";
}

resultsBtn2.addEventListener('click',charactersAFor);