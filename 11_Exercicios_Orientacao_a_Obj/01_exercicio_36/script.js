/*
Crie uma classe que simula uma conta no banco (utilize a forma que preferir);
Deve conter a propriedade saldo;
E os métodos deposito e saque;
Teste os métodos;
*/
class contaBanco {
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(valor){
        this.saldo += valor;
    }
    saque(valor){
        this.saldo -= valor;
    }
}
// Intanciando contao com o valor do original do saldo "1000"
let conta = new contaBanco(1000);
console.log("Saldo atual é: " + conta.saldo);

// Inserindo o valor de deposito
conta.deposito(1000);
console.log("Saldo atual após um deposito é de " + conta.saldo);

// Inserindo o valor de saque
conta.saque(500);
console.log("Saldo atual após um saque é de " + conta.saldo);

