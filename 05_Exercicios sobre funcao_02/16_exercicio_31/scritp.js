/*
1.Escreva uma função chamada calculateAverage que recebe um array de números como argumento.
2.A função deve calcular a média dos números no array.
3.A média é calculada somando todos os números e dividindo pelo total de números no array.
4.A função deve retornar o valor da média calculada.
*/

function calculateAverage(numbers) {
  // Verifica se o array não está vazio
  if (numbers.length === 0) {
    return 0; // Retorna 0 para evitar divisão por zero
  }

  // Inicializa a variável para armazenar a soma dos números
  let sum = 0;

  // Usa um loop for para somar todos os números no array
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  // Calcula a média dividindo a soma pelo total de números
   return sum / numbers.length;

}  

// Exemplo de uso
const arrayExemplo = [3, 6, 9, 12, 15];
const resultadoMedia = calculateAverage(arrayExemplo);
console.log(`A média é: ${resultadoMedia}`);

 
// Usando o metodo .REDUCE
 /*
 function calculateAverage(numbers) {
   // Verifica se o array não está vazio para evitar divisão por zero
   if (numbers.length === 0) {
     return 0;
   }
   // Calcula a soma de todos os números no array
   const sum = numbers.reduce((acc, num) => acc + num, 0); <--
 
   // Calcula a média dividindo a soma pelo total de números
   const average = sum / numbers.length;
    return average;
 }
 
 // Exemplo de uso:
 const numbersArray = [1, 2, 3, 4, 5];
 const result = calculateAverage(numbersArray);
 console.log(result); // Isso imprimirá a média: 3
 */