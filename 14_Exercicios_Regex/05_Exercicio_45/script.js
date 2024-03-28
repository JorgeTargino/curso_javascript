/*
Crie uma regex que valide nome de usuários no sistema;
Aceita letras de a-z, _ e - , números de 0-9, mínimo de 3 caracteres e máximo de 16;
*/

let validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("matheus_123"));


console.log(validarNomeUsuario.test("as"));
console.log(validarNomeUsuario.test("1111111111111111111"));




