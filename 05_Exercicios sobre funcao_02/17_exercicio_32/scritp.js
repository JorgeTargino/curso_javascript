/*
1.Escreva uma função chamada reverseString que recebe uma string como argumento.
2.A função deve inverter a ordem dos caracteres na string.
3.A função deve retornar a string invertida.
*/

function reverseString(str) {
  return str.split('').reverse().join('');
      
}

console.log(reverseString("hello"));
console.log(reverseString("paralelepipedo"));
console.log(reverseString("Jorge Washington"));
console.log(reverseString("Jheny"));
console.log(reverseString("Jessica"));


/*
const exemplo = ("hello");
const resultadoFinal = reverseString(exemplo);
console.log(`A palavra invertida é: ${resultadoFinal}`);
*/