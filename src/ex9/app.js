// Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.

// ***  OPCION 1  ***
// declarar elemento 'escuchador': "resultsBtn1"
// declarar variable que recoge la frase del usuario: "phrase"
// declarar variable contador "cont": con 'split' para dividir la frase en un array, con 'filter' para filtrar las vocales de la función isVowel, con 'length' para obtener la longitud del array (de las vocales)
// declarar función isVowel para verificar si un caracter es una vocal
// crear función 
// asignar método addEventListener

const resultsBtn1 = document.getElementById("resultBtn");

function vowelsNumber() {
    let phrase = document.getElementById("phrase").value;
    let cont = phrase.split('').filter(isVowel).length;
    
    let resultA = document.getElementById("result");
    
    resultA.innerHTML = "Número de vocales encontradas en la frase: " + cont;
}

function isVowel(caracter) {
    let vowel = ["a", "e", "i", "o", "u", "á", "é", "í", "ó","ú", "A", "E", "I", "O", "U", "Á", "É", "Í", "Ó", "Ú"];
    return vowel.includes(caracter);
}

resultsBtn1.addEventListener("click", vowelsNumber);


// ***  OPCIÓN 2 CON BUCLE FOR  ***
// declarar elemento 'escuchador': "resultsBtn2"
// declarar variable que recoge la frase del usuario: "phrase"
// sacar un caracter de una cadena con el método charAt() y almacenarlo en la variable "allVowels"
// añadir condicional para verificar si el caracter es una vocal e incrementar el contador "cont" en 1
// crear función 
// asignar método addEventListener

const resultsBtn2 = document.getElementById("resultBtnFor");

function vowelsFor() {
    let phrase = document.getElementById("phrase").value;
    let cont = 0;
    for (let i = 0; i < phrase.length; i++) {
        let allVowels = phrase.charAt(i);
        if (isVowel(allVowels)) {
            cont ++;            
        }        
    }

    let resultB = document.getElementById("resultFor");
    
    resultB.innerHTML = "Número de vocales encontradas en la frase: " + cont;
}

resultsBtn2.addEventListener('click',vowelsFor);