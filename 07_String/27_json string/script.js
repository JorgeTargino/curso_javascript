let pessoa = {
    "nome": "Jorge",
    "idade": 27,
    "profissão": "programador",
    "hobbies": ["Video game", "correr", "leitura" ]
    

}

// Convertendo Json em string
let pessoaTexto = JSON.stringify(pessoa)
console.log(pessoaTexto);

// Convertendo string em Json
let pessoaJson = JSON.parse(pessoaTexto)
console.log(pessoaJson);
console.log(pessoaJson.hobbies[0]);