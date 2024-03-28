/*
Crie um objeto que simula um endereço de um cliente;
Propriedades: Rua, Bairro, Cidade e Estado;
No construtor o endereço já deve ser definido por completo;
Crie métodos para atualizar todas as propriedades;
*/

class Endereco {
    constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
 
  }

  exibirEndereco(){
    console.log(`Endereço: ${this.rua},${this.bairro},${this.cidade},${this.estado}`);
  }

  atualizarEndereco(novaRua, novoBairro, novaCidade, novoEstado){
    this.rua = novaRua || this.rua;
    this.bairro = novoBairro || this.bairro;
    this.cidade = novaCidade || this.cidade;
    this.estado = novoEstado || this.estado;

    console.log("Endereço atualizado com sucesso !!")
    this.exibirEndereco();
  }
}

const enderecoCliente = new Endereco("Ararius", "Praia de Iracema", "Fortaleza", "Ceará");

enderecoCliente.exibirEndereco();

enderecoCliente.atualizarEndereco("Nova Rua", null, "Nova Cidade");


