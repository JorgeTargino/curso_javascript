// Join: Junta os elementos de frase em um array, por meio de um separado.Ex(!@#$%)

// Iniciando com uma variavel array
let fraseMontada = ['Fire', 'Air', 'Water'];
console.log(fraseMontada.join(" "));

let fraseMontada2 = ['O', 'rato', 'comeu', 'a', 'roupa', 'rei', 'de', 'roma'];
console.log(fraseMontada2.join("#"));


// forma de utilizar se a variavel sem um array
let frase = "Testando o metodo split sem array";

let palavras = frase.split(" ");// Tranforma a frase em um array
let novaFrase = palavras.join('@')

console.log(novaFrase);