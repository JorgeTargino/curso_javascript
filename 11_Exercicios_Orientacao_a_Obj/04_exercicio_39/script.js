/*
Crie uma classe que simule  um carro;
Propriedades: marca, cor, gasolina restante;
Crie um método de dirigir o carro, que vá diminuindo a gasolina gradativamente;
E um de abastecer para aumentar a gasolina quando necessário;

*/

class Carro {
  constructor(marca, cor, gasolinaRestante, consumo){
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
    this.consumo = consumo;

  }
  dirigir(km){
    let litrosConsumidos = km / this.consumo;
    this.gasolinaRestante -= litrosConsumidos;
  }

  abastecer(l){
    this.gasolinaRestante += l;
  }
}

let carro = new Carro("Celta", "Preto", 50, 14);

console.log(carro);
// Inseringo a km que será divido pelo consumo 100/14
carro.dirigir(100);
// Acrescenta ao total de valor abastecido 
carro.abastecer(20);