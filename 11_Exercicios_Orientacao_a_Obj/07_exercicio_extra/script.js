/*
Crie uma classe chamada "Retangulo" que representa um retângulo.
A classe deve ter os seguintes atributos:
largura: representando a largura do retângulo (número maior que zero).
altura: representando a altura do retângulo (número maior que zero).
A classe deve ter os seguintes métodos:
calcularArea(): retorna a área do retângulo (largura * altura).
calcularPerimetro(): retorna o perímetro do retângulo (2 * (largura + altura)).
*/

class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }

  calcularPerimetro(){
    return (2 * (this.largura + this.altura))
  }
}

let retangulo = new Retangulo(10, 10);
console.log(retangulo.calcularArea());
console.log(retangulo.calcularPerimetro());
