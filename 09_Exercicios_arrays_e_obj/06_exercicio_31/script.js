/* Crie dois arrays, um com mais de 5 elementos e outro com menos;
   Faça uma função que verifica o número de elementos;
   Se possuir menos que 5, imprima “Poucos elementos” no console;
   Se tiver mais, imprima “Muitos elementos”;

*/

let nomes = ["Jorge", "Jessica", "Jheny", "Josué", "Judá"];
let idades = [27, 31, 7, 0];

function verificaElementos(arr) {
    if(arr.length < 5){
        console.log("Poucos elementos");
    } else {
        console.log("Muitos elementos");
    }
    
}


verificaElementos(nomes);
verificaElementos(idades);