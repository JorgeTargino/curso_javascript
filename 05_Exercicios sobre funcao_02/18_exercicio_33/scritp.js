/*
1.Escreva uma função chamada countVowels que recebe uma string como argumento.
2.A função deve contar o número de vogais presentes na string (considerando letras maiúsculas e minúsculas).
3.A função deve retornar o total de vogais encontradas.
*/

function countVowels(str){
  let getCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let char of str) {
    if(vowels.includes(char)) {
      getCount++;
    }
  }
    return getCount;
}

console.log(countVowels("araraararaa"));
