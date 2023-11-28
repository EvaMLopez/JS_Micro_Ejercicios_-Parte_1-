// Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

// declarar elemento 'escuchador': "resultsBtn"
// declarar variable que recoge la frase del usuario: "phrase"
// crear objeto "vowelCounts" para contar las veces que aparece una vocal. Se inicializanen 0.
// crear bucle for para recorrer cada caracter de la frase y verificar si es una vocal (en caso afirmativo, aumentar el contador correspondiente del ibjeto)

// crear función 
// asignar método addEventListener

const resultsBtn = document.getElementById("resultBtn");

function countVowels() {
    let phrase = document.getElementById("phrase").value;

    let vowelCounts = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0,
        'á': 0,
        'é': 0,
        'í': 0,
        'ó': 0,
        'ú': 0,
        'A': 0,
        'E': 0,
        'I': 0,
        'O': 0,
        'U': 0,
        'Á': 0,
        'É': 0,
        'Í': 0,
        'Ó': 0,
        'Ú': 0
    };

    for (let i = 0; i < phrase.length; i++) {
        let currentChar = phrase.charAt(i);

        if (isVowel(currentChar)) {
            vowelCounts[currentChar]++;
        }
    }

    let result = document.getElementById("result");
    result.innerHTML = "Número de veces que aparece cada vocal: <br>";

    for (let vowel in vowelCounts) {
        if (vowelCounts[vowel] > 0) {
            result.innerHTML += `${vowel}: ${vowelCounts[vowel]}<br>`;
        }
    }
}

resultsBtn.addEventListener("click", countVowels);

function isVowel(char) {
    let vowels = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú", "A", "E", "I", "O", "U", "Á", "É", "Í", "Ó", "Ú"];
    return vowels.includes(char);
}
