// Repeat: Repete a string de acordo com o parametro number

let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimirNums(...args) {
    for (let i = 0; i < args.length; i++)
    console.log(args[i]);
}

imprimirNums(num1, num2, num3);
console.log("-----------")
imprimirNums(num3, num2);
console.log("-----------")
imprimirNums(2,6,7,8,9,5,4,6,1);


