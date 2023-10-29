//Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario>”

//crear variable que recoge el nombre de usuario: user (campo input)
// crear sección donde se mostrará el mensaje: greet

// crear variable "Hola " + nombre de usuario
// imprimir variable anterior
// crear función 

/* const hello = "Hello ";
let user = document.getElementById("username");
let greet = document.getElementById("greet");

//const message = hello + user;

function printMsg(user) {
    user.addEventListener("input", function printMsg() {
        let result = user.value;               
    })
}
printMsg() 
 */

/* 
// Otra forma sin declarar variable:

const hello = "Hola ";

document.getElementById("username").addEventListener("input", function PrintMessage() {
    let user = document.getElementById("username").value;
    let message = document.getElementById("greet");

    message.innerHTML =  hello + user;    
});

PrintMessage()
 */


const hello = "Hola ";

other = document.getElementById("username")

other.addEventListener("input", function PrintMessage() {
    let user = document.getElementById("username").value;
    let message = document.getElementById("greet");

    message.innerHTML =  hello + user;    
});

PrintMessage()