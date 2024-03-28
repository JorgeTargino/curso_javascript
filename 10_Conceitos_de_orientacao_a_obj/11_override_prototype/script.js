class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    // Adcionando um metodo como uma funçao "latir"
    latir() {
        console.log("Au Au");
    }

}
// Instaciando uma raça padrão pelo prototype
Cachorro.prototype.raca = "SRD";
// Instaciando patas pelo prototype
Cachorro.prototype.patas = 4;

let poodle = new Cachorro("Poddle", "branco");


console.log(poodle.patas);
poodle.latir();

console.log(Cachorro.prototype.raca);// SRD
console.log(poodle.raca);// Poodle