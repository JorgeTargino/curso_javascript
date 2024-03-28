function checarNumero(num){
    let number = Number(num);
        if(Number.isNaN(number)){
            alert(" Por favor, passe só numeros para programa");
        } else {
            return number;
        }
    
}

checarNumero(5);
checarNumero('sdha');

let number = prompt("Digite um número");

checarNumero(number);