//Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.

// crear variables num1, num2 y resul




function sum() {
    let num1, num2, sum;    
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    sum = parseFloat(num1) + parseFloat(num2);
   
    document.getElementById("result").innerHTML = "La suma de " + num1 + " con " + num2 + " es " + sum; 
}
