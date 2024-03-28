let pessoa = {
    nome: '',
    setNome: function(novoNome){
        this.nome = novoNome;
    },
    getNome: function() {
        return this.nome
    }
}

pessoa.setNome("Jheny");// Recebe a proriedade novoNome
console.log(pessoa.getNome());