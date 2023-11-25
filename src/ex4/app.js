//Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.

// declarar elemento "escuchador" (método addEventListener)
// declarar variables num1, num2 que recogen números introducidos
// declarar variable resul con la suma de ambos números
// crear sección donde se mostrará el mensaje con el resultado
// crear función 
// asignar método addEventListener

const resultAdd = document.getElementById("resultBtn");

function sum() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultSum = document.getElementById("result");
    sumNumbers = parseFloat(num1) + parseFloat(num2);
    let text = "La suma de " + num1 + " con " + num2 + " es " + sumNumbers;
    resultSum.innerHTML = text;
}

resultAdd.addEventListener("click", sum);

