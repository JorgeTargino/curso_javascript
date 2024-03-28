/*
1.Escreva uma função chamada sumEvenNumbers que recebe um array de números como argumento.
2.A função deve calcular e retornar a soma de todos os números pares presentes no array.
3.Utilize o operador de módulo (%) para determinar se um número é par.
4.Considere que o array pode conter tanto números inteiros positivos quanto negativos.

Dica: Para verificar se um número é par, você pode usar a expressão numero % 2 === 0, onde % é o operador de módulo 
que retorna o resto da divisão.
*/

function sumEvenNumbers(numbers) {
  // Inicializa a variável para armazenar a soma dos números pares
  let sum = 0;

  // Usa um loop for para iterar sobre cada número no array
  for (let i = 0; i < numbers.length; i++) {
    // Verifica se o número é par usando o operador de módulo (%)
    if (numbers[i] % 2 === 0) {
      // Se for par, adiciona ao total
      sum += numbers[i];
    }
  }

  // Retorna a soma dos números pares
  return sum;
}

// Exemplo de uso
const arrayExemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultadoSomaPares = sumEvenNumbers(arrayExemplo);
console.log(`A soma dos números pares é: ${resultadoSomaPares}`);
