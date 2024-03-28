// Fiz com o auxilio do Chat

/*function checandoDados(dados) {
  const tipo = typeof dados;
  if (tipo === "number") {
    console.log("É um tipo number.");
  } else if (tipo === "boolean") {
    console.log("É um tipo boolean.");
  } else { //(tipo === "string") Se não utilizar ele funciona da mesma forma
    console.log("É um tipo string.");
  } 
}

checandoDados("Andre");
checandoDados(20);
checandoDados(false);
checandoDados(true);
*/

// Uma outra forma de fazer
function verificandoDados(dado) {
  if(typeof dado === "number"){
    console.log("Este dado é um number.");
  } else if(typeof dado === "boolean") {
    console.log("Este dado é um boolean.");
  } else if(typeof dado === "string") {
    console.log("Esta dado é um string!");
  }
}

verificandoDados(30);
verificandoDados(false);
verificandoDados("Andre");
verificandoDados(true);

