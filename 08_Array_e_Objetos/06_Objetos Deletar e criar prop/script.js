/* Adicionando de deletando propriedades de um obj*/

let pessoa = {
    nome: 'Jorge',
    idade: 27,
    profissao: "Programador"
}

console.log(pessoa.nome);
// deletando prop nome do objeto
delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);
// adicionando prop casado ao objeto
pessoa.casado = false;

console.log(pessoa.casado);