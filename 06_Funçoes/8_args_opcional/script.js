function soma(a,b) {

    if(a === undefined || b === undefined) {
        console.log("Esta função precisa ter os dois argumentos")
    } else {
        return a + b;
    }
}

console.log(soma(1));// Função com 1 argumento
console.log(soma(1,2)); // Função com 2 argumentos

function saudacao(nome, idade) {
    if(idade === undefined) {
        console.log("Olá " + nome);
    } else {
        console.log("Olá " + nome + "você tem " + idade + " anos");
    }
}

saudacao("Matheus");
saudacao("Igor ", 29);