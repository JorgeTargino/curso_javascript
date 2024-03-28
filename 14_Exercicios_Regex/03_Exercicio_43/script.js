// Crie uma regex que aceite a seguinte expressão “Marca: 
const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validaMarca.test("Marca: Nike"));
console.log(validaMarca.test("Marca: asd"));
console.log(validaMarca.test("Marca: "));
console.log(validaMarca.test("Nike"));
console.log(validaMarca.test("123432"));
console.log(validaMarca.test("Marca: Puma"));





