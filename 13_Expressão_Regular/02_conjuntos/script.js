const reg1 = /[12345]/;

console.log(reg1.test("Temos o número de 6"));
console.log(reg1.test("Temos o número de 100"));
console.log(reg1.test("Temos o número de 60"));

console.log(reg1.test("Não tem"));

const reg2 = /[0-9]/;

let text = 'Tem bola na cesta';



console.log(reg1.test("Temos o número 654321654987"));
console.log(reg1.test("Temos o número "));
