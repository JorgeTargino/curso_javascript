const umOuMaisNumeros = /\d/;

console.log(umOuMaisNumeros.test("1518"));
console.log(umOuMaisNumeros.test(""));
console.log(umOuMaisNumeros.test("qwerasdfzxcv"));
console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test("13216548976543213254871231"));