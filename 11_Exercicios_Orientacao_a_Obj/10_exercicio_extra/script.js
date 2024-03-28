/*
Crie uma classe chamada "Livro" que representa um livro em um sistema de biblioteca.
A classe deve ter os seguintes atributos:
titulo: representando o título do livro (string).
autor: representando o autor do livro (string).
disponivel: representando a disponibilidade do livro (boolean).
A classe deve ter os seguintes métodos:
emprestar(): verifica se o livro está disponível para empréstimo e, se estiver, atualiza a disponibilidade para false.
devolver(): verifica se o livro não está disponível para empréstimo e, se não estiver, atualiza a disponibilidade para true.
consultarDisponibilidade(): retorna a disponibilidade atual do livro.
*/

class Livro {
    constructor(titulo, autor, disponivel = true){
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;

    }
    emprestar() {
        if(this.disponivel){
            console.log(`O livro '${this.titulo}' de ${this.autor} foi emprestado.`);
            this.disponivel = false;
        } else {
            console.log('O livro não está disponível para empréstimo.')
            //(`Desculpe, o livro '${this.titulo}' de ${this.autor} não está disponível no momento.`);
        }
    }

    devolver(){
        if(!this.disponivel){
            console.log(`O livro '${this.titulo}' de ${this.autor} foi devolvido.`);
            this.disponivel = true;
        } else {
            console.log('O livro já está disponível.');
            
       }
    }

    consultarDisponibilidade(){
        if(this.disponivel){
            return 'Disponível';
        } else{
            return 'Indisponível';
            //`O livro '${this.titulo}' do autor ${this.autor} não está disponível no momento.` ;
        }
    }
}

let livro = new Livro ("Aventuras Fantásticas", "Desconhecido");
console.log(livro.consultarDisponibilidade());


livro.emprestar();
console.log(livro.consultarDisponibilidade());

livro.devolver();
console.log(livro.consultarDisponibilidade());



