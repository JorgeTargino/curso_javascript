// Crie uma regex que valide endereços de IP;
// Ex: 127.0.0.1

const validaIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validaIp.test("192.168.0.1"));
console.log(validaIp.test("155.165.15.10"));
console.log(validaIp.test("155.0.0.10"));

console.log(validaIp.test("192.168.0"));
console.log(validaIp.test("192"));
console.log(validaIp.test("asdfasdfasdf"));
console.log(validaIp.test("192.16844.04.6244"));


