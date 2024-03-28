function TamandoDoTexto(texto) {
  if (texto.length > 10 ){
    console.log("Texto muito longo");
  } else {
    console.log("Texto dentro do limite")
  }
}

TamandoDoTexto("Meu nome não é Jhon");
TamandoDoTexto("Jhon");
TamandoDoTexto("Meu nome é");
