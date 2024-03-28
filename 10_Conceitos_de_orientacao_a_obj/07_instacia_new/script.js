function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function() {
        console.log("Auuuuuuu");
    }
}

let splitz = new Cachorro("Splitz", 4, "Amarelo");

console.log(splitz);
splitz.uivar();