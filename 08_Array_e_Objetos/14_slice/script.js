//slice = Retorna um array a partir de outro array
  
let nums = [0,1,2,3,4,5,6,7,8,9];

//O array retornado é determinado pelos parametros que são os indices
console.log(nums.slice(4,5));// Retorna apenas o array de indice 4. (4,5) O indice a cima determina o inicio e o fim
console.log(nums.slice(4,6));

console.log(nums.slice(2));// se não for definido o segundo indice a contagem vai até o final 

console.log(nums.slice(-2));// De forma negativa ele retorna os valores iniciando pelo ultimo numero

console.log(nums.slice(3,-2));// Retorna o valor a partir do 3 e vai até o 7 não trazendo os 2 ultimos(8,9)