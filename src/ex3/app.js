//Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario>”

// crear sección donde se mostrará el mensaje: greet

// crear variable "Hola " 
//crear variable que recoge el nombre de usuario: user (campo input)
// declarar elemento "escuchador" (método addEventListener)
// crear función 
// asignar método addEventListener

const hello = "Hola ";

other = document.getElementById("username");

function printMessage() {
    let user = document.getElementById("username").value;
    let message = document.getElementById("greet");
    
    message.innerHTML =  hello + user;      
}

other.addEventListener("input", printMessage);