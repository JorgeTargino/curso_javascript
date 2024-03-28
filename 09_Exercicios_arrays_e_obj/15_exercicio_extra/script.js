/* 
Remover elementos duplicados de um array

Crie uma função chamada removeDuplicates que recebe como parâmetro um array de elementos.
A função deve remover os elementos duplicados do array, mantendo apenas as ocorrências únicas.
*/

function removeDuplicates(arr) {
    // Utiliza a função Set para criar um conjunto de elementos únicos
    const uniqueSet = new Set(arr);

    // Converte o conjunto de volta para um array
    const uniqueArray = Array.from(uniqueSet);

    // Retorna o array resultante sem elementos duplicados
    return uniqueArray;
}

    // Exemplo de uso da função
    const arrayComDuplicates = [1,2,2,3,4,4,5];
    const arraySemDuplicates = removeDuplicates(arrayComDuplicates);

    console.log("Array original: ", arrayComDuplicates);
    console.log("Array sem duplicates: ", arraySemDuplicates);
