
const dia = /\d\d/;

console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("asd1"));



let palavrasTresMenosLetras = /\w\w\w/;

console.log(palavrasTresMenosLetras.test("asd"));
console.log(palavrasTresMenosLetras.test("asdd"));
console.log(palavrasTresMenosLetras.test("as"));
console.log(palavrasTresMenosLetras.test("teste"));