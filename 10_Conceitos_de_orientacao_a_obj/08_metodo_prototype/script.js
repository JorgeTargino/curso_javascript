function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function() {
    console.log("Auuuuuuuu");
}

Cachorro.prototype.latir = function() {
    console.log("Au Au");
}


let splitz = new Cachorro("Splitz", 4, "Amarelo");

splitz.uivar();
splitz.latir();