/* 
Encontrar o maior número em um array
Crie uma função chamada findMaxNumber que recebe como parâmetro um array de números.
A função deve retornar o maior número presente no array.
*/



function findMaxNumber(arr){
    if(arr.length === 0) {
        return "O array esta vazio.";
    }

    let max = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max;

}

const meuArray = [15, 7, 23, 40, 12];
const maxNumber = findMaxNumber(meuArray);

console.log("O maior numero: ", maxNumber);

