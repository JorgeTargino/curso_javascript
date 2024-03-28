let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function(){
        console.log("Au Au");
    }
}

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = "Labradror";// Atribuindo a raça labrador a variavel "labrador.raca"

console.log(labrador.raca);// Labrador
console.log(cachorro.raca);// SRD

let pastor = Object.create(cachorro);

pastor.raca = "Pastor Alemão";

console.log(pastor.raca);