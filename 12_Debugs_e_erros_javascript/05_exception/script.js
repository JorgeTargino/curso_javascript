function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error("O paramentro nome precisa ser string");
    } else {
        console.log(`Olá ${nome}.`);
    }
}

saudacao("Matheus");
saudacao(5);

console.log("teste");