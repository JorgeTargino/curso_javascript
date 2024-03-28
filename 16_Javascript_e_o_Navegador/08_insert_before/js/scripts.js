let novoElemento = document.createElement("P");
let texto = document.createTextNode("Algum texto");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector('#titulo-principal');
let elementoPai = document.querySelector('#container-principal');

elementoPai.insertBefore(novoElemento, elementoAlvo);

