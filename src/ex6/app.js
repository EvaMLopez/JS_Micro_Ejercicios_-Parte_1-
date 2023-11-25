//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

// declarar elemento "escuchador" (método addEventListener)
// declarar variables num1, num2, num3 que recogen números introducidos
// declarar variable resul con la suma de ambos números
// crear sección donde se mostrará el mensaje con el resultado
// crear función 
// asignar método addEventListener

const resultAdd = document.getElementById("resultBtn");

function numberGreater() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    let resulGreater = document.getElementById("result");
    let greater = Math.max(num1, num2, num3);
    resulGreater.innerHTML = "El número mayor de los tres es: " + greater;
}


resultAdd.addEventListener("click", numberGreater);