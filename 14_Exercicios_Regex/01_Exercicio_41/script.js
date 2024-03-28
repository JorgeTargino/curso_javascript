// Crie uma regez que só aceite letras maiusculas:
const letrasMaius = /[A-Z]/;

console.log(letrasMaius.test("testando"));
console.log(letrasMaius.test("1324"));
console.log(letrasMaius.test("TESTANDO"));
console.log(letrasMaius.test("Testando"));