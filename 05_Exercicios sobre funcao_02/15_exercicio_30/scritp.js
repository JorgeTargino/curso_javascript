/*
1.Escreva uma função chamada isPalindrome que recebe uma palavra como argumento.
2.A função deve verificar se a palavra é um palíndromo.
3.Um palíndromo é uma palavra que é lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda.
4.A função deve retornar true se a palavra for um palíndromo e false caso contrário.

Por exemplo:
isPalindrome('radar') deve retornar true.
isPalindrome('hello') deve retornar false.*/
function isPalindrome(pali){
   let reverso = pali.split('').reverse().join('');
   return pali === reverso;
   
    
}


console.log(isPalindrome("radar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("paralelepipedo"));
console.log(isPalindrome("ama"));