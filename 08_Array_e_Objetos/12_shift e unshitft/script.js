let carros = ["BMW", "Audi", "VW", "Fiat"];

let removerPrimeiroCarro = carros.shift();// shift - Remover do inicio do array

console.log(removerPrimeiroCarro);
console.log(carros);

let addPrimeiroCarro = carros.unshift("Celta");// unshift - Adicionar ao inicio do array

console.log(carros);
console.log(carros[0]);