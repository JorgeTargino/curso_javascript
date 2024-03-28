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
// Instaciando patas pelo prototype
Cachorro.prototype.patas = 4;

let poodle = new Cachorro("Poddle", "branco");

console.log(poodle);
console.log(poodle.patas);
poodle.latir();