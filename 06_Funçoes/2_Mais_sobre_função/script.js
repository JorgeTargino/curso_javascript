function multiplicarTresNumeros(x,y,z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,4,8);
console.log(" O valor de mult é " + mult);

console.log("-----------------")

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode dirigir!");
    } else {
        console.log("Não pode dirigir!");
    }
}

console.log(podeDirigir(19,true));
console.log(podeDirigir(25,true));
console.log(podeDirigir(44,0)); // 0 no booleano é considerado false
console.log(podeDirigir(29,1)); // 1 no booleano é considerado true
console.log(podeDirigir(17,false));
console.log(podeDirigir(38,false));