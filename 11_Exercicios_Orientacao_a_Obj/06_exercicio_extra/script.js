/*
Crie uma classe chamada WordCounter que representa um contador de palavras.
A classe deve ter um construtor que inicializa um objeto vazio.
A classe deve ter um método chamado countWords que recebe uma string como parâmetro.
O método countWords deve contar o número de palavras na string fornecida e retornar o resultado.
Considere que as palavras são separadas por espaços em branco.
*/

class WordCounter {
  constructor() {
    //Inicializa um obj vazio
  }
  
  countWords(string) {
    // Retorna 0 se a string estiver vazia
    if(string.trim() === ""){
      return 0;
    }
     
    // Conta o numero de palavras na string forcecida
    const words = string.split(/\s+/);
    return  words.length;
  }
  
}

const wordCounter = new WordCounter();
const string = "Esta é uma frase de exemplo.";
//console.log(wordCounter.countWords(string)); //Outra forma de fazer
const result = wordCounter.countWords(string);
console.log(`O número de palavras na string é: ${result}`);
