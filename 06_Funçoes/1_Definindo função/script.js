//Função sem argumento 
function imprimirNoConsole() {
    console.log("Olá mundo!");
}

imprimirNoConsole();

//Função com argumento 

function imprimirUmNumero(num) {    
    console.log(" O numero é:" + num);
}

imprimirUmNumero(8);
imprimirUmNumero(5);
imprimirUmNumero(2);


// Função anonima atrelado a uma variavel 
const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();


