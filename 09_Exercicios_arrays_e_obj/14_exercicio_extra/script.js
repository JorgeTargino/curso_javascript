/* 
Soma de Números Únicos

Escreva uma função chamada sumUniqueNumbers que recebe um array de números como argumento.
A função deve calcular e retornar a soma de todos os números que aparecem apenas uma vez no array.
Utilize uma estrutura de dados auxiliar para armazenar a contagem de cada número no array.
Percorra o array e verifique se cada número ocorre apenas uma vez. Se sim, some-o à variável de soma.
Considere que o array pode conter tanto números inteiros positivos quanto negativos.
*/

function sumUniqueNumbers(arr) {
    // Verifica se o array esta vazio
    if (arr.length === 0 ){
        return 0; // Se tiver vazio, a soma é zero
    }
    // Cria um obj para armazenar a contagem de cada número
    const countMap = {};

    // Itera sobre os elementos do array para contar a ocorrência de cada número
    arr.forEach(num => {
        countMap[num] = (countMap[num] || 0) + 1;
    });
    
    // Inicializa a variavel sum 
    let sum = 0;

    // Itera novamente sobre os elementos do array para somar os números únicos
    arr.forEach(num => {
        if (countMap[num] === 1 ) {
            sum += num;
        }
    });

    return sum;
}

// Exemplo de uso da função
const meuArray = [2, 3, 5, 2, 7, 8, 3, 5, 9];
const resultado = sumUniqueNumbers(meuArray);

console.log("A soma dos numeros unicos é:", resultado);



