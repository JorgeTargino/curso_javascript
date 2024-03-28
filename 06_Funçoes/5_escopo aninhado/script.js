let a = 10;

function multiplicar(x,y) {
    let a = x * y;
    if(a > 10) {
        let a = 0;
        a++
        console.log(a);// tras a variavel que esta dentro da função "1"
    }

    console.log(a);// tras a multiplicação da variavel entre 3*7"
}

console.log(a);// tras a primeira variavel a "10"

multiplicar(3,7);