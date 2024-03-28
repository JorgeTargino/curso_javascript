//Get: Serve para resgatar o valor de uma propriedade
//Set: Serve para alterar o valor de uma propriedade 
class Cachorro {
    constructor(raca, cor){
    this.raca =  raca;
    this.cor =  cor;
  }

  get verRaca(){
    return "A raça é " + this.raca;
  }
  set novaRaca(value){
    this.raca = value;
  }

}

let pastor =  new Cachorro("Pastor Alemão", "Sem cor");
console.log(pastor);

// Alterou a cor atraves do set
pastor.setcor = "Marron";


console.log(pastor.setcor);

