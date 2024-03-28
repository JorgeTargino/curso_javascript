class ContaBancaria {
    constructor(saldoInicial = 0){
        this.saldo = saldoInicial;
    }

    deposito(quantia){
        //Verificar se a quantia é valida
        if(isNaN(quantia || quantia <= 0)) {
            console.log("Insira uma quantia válida");
           return;           
        }
        // Realizar o deposito
        this.saldo += quantia;

        // Exibir mensagem de sucesso
        console.log(`Deposito de R$ ${quantia.toFixed(2)} realizado com sucesso `);
        this.exibirSaldo();
    }
    saque(quantia){
        //Verficicar se há saldo suficiente
        if(quantia > this.saldo){
            console.log(`Saldo insuficiente para realizar saque, seu saldo é R$${minhaConta.saldo}`);
            return;
        
        }
        //Realizar o saque
        this.saldo -= quantia

        //Exibir mensagem de sucesso
        console.log(`Saque de R$${quantia.toFixed(2)} realizado com sucesso`)
    }
    
    exibirSaldo(){
        console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }

}

// Teste de classe 
let minhaConta = new ContaBancaria(1000)// Cria uma conta com saldo inicial de "1000"
console.log(`Saldo inicial R$${minhaConta.saldo}`);

minhaConta.deposito(200);//Depositar R$200
minhaConta.saque(50); // Sacar 50
minhaConta.saque(1200); // Tenta sacar valor maior que o Saldo



