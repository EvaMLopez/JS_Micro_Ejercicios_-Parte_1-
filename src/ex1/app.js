//Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.
/*
* Conectar archivo javascript al html de destino
* Imprimir Hello Javascript! en nuestra ventana del navegador
* * definir el contenedor o espacio que va a ocupar el mensaje Hello JS
* * acceder al contenedor desde javascript
* * crear el mensaje
* * insertar en el contenedor
* * imprimirlo en pantalla
*/

// crear variable "Hello Javascript"
// imprimir en h1 en DOM
// crear función 



const title = "Hello JavaScript"
const titleSection = document.getElementById("title")

function printTitle() {
    titleSection.innerHTML = /* html */ `
        <h1>${title}</h1>    `
}

printTitle()

