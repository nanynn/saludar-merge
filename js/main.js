function saludar (){

	console.log("hola mundo");
}

//Añadiendo un título
var elemento = document.createElement("h2");
var contenido = document.createTextNode("A-TÓ-MI-CO SQUAD");
elemento.appendChild(contenido);
elemento.setAttribute("align", "center");
document.getElementById("titulo").appendChild(elemento);
>>>>>>> 4174d2dd17717a1bf4b4858cc66c9679c4314ad7
