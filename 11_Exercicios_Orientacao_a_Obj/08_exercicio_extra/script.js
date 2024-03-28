/*
Crie uma classe chamada "ContaBancaria" que representa uma conta bancária.
A classe deve ter os seguintes atributos:
numeroConta: representando o número da conta (string ou número).
saldo: representando o saldo da conta (número).
A classe deve ter os seguintes métodos:
depositar(valor): recebe um valor como parâmetro e adiciona esse valor ao saldo da conta.
sacar(valor): recebe um valor como parâmetro e verifica se o saldo é suficiente para efetuar o saque. Se for, realiza o saque subtraindo o valor do saldo. Caso contrário, exibe uma mensagem informando que o saldo é insuficiente.
consultarSaldo(): retorna o saldo atual da conta.
*/

class ContaBancaria {
    constructor(numeroConta, saldo){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor;
        console.log(`Deposito de ${valor} realizado com sucesso!`);
    }
    sacar(valor){
        if(valor <= this.saldo){
            this.saldo -= valor;
            console.log(`Saque de ${valor} realizado com sucesso!`);
        } else {
            console.log(`Saldo insuficiente, tente novamente um saldo positivo!`);
        }
    }
    consultarSaldo(){
        return this.saldo
    }
}

let conta = new ContaBancaria("1234", 500.0)

console.log(conta);
conta.depositar(600);
conta.sacar(200);

console.log(`O seu saldo atual é: R$${conta.consultarSaldo()}`)
