/* Crie um array a partir de uma frase;
Imprima cada palavra do array no console por meio de um for;
*/

const frase = "Ser um bom programador requer muita pratica :)";

const arrFrase = frase.split(" ");

for(let i = 0; i < arrFrase.length; i++) {
    console.log(arrFrase[i]);
}