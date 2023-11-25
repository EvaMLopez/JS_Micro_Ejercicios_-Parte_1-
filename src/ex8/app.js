// Escribe un programa que pida una frase y escriba las vocales que aparecen

// ***  OPCION 1  ***
// declarar elemento 'escuchador': "resultsBtn1"
// declarar variable que recoge la frase del usuario
// declarar variable "characters": con 'split' para convertir la frase en un array, con 'filter' para filtrar las vocales
// declarar función isVowel para verificar si un caracter es una vocal
// crear función 
// asignar método addEventListener

const resultsBtn1 = document.getElementById("resultBtn");

function vowels() {
    let phrase = document.getElementById("phrase").value;
    let characters = phrase.split('').filter(isVowel);
    let resultA = document.getElementById("result");
    resultA.innerHTML = "Vocales encontradas en la frase: " + characters;
}

function isVowel(caracter) {
    let vowel = ["a", "e", "i", "o", "u", "á", "é", "í", "ó","ú", "A", "E", "I", "O", "U", "Á", "É", "Í", "Ó", "Ú"];
    return vowel.includes(caracter);
}

resultsBtn1.addEventListener("click", vowels);


// ***  OPCIÓN 2 CON BUCLE FOR  ***
// declarar elemento 'escuchador': "resultsBtn2"
// declarar variable que recoge la frase del usuario
// sacar un caracter de una cadena con el método charAt()
// añadir condicional para eliminar la última coma con método 'slice' eliminando el último caracter: la última coma

const resultsBtn2 = document.getElementById("resultBtnFor");

function vowelsFor() {
    let phrase = document.getElementById("phrase").value;
    let numberVowels = " ";
    for (let i = 0; i < phrase.length; i++) {
        let allVowels = phrase.charAt(i);
        if (isVowel(allVowels)) {
            numberVowels += allVowels + ",";            
        }        
    }

    if (numberVowels.length>0) {
        numberVowels = numberVowels.slice(0, -1);        
    }

    let resultB = document.getElementById("resultFor");
    
    resultB.innerHTML = "Vocales encontradas en la frase: " + numberVowels;
}

resultsBtn2.addEventListener('click',vowelsFor);