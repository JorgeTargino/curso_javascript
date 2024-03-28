/*
Crie uma classe chamada WordNumber que representa um contador de numeros.
A classe deve ter um construtor que inicializa um objeto vazio.
A classe deve ter um método chamado countNumbers que recebe uma numb como parâmetro.
O método countNumbers deve contar o número de numeros na string fornecida e retornar o resultado.
Considere que os numeros são separadas por espaços em branco.
*/

class WordNumber {
  constructor(){

  }
  countNumbers(nmbr){
    let number = nmbr.split(/\s+/);
    return number.length;

  }
}

let wordNumber = new WordNumber();
let nmbr = "1 2 3 4 5 6 7 8 9 10";
let total = wordNumber.countNumbers(nmbr);
console.log(total);