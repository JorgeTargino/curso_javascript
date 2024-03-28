let cachorro = {
    raca: "SRD",
    uivar: function(){
        console.log("Aauuuuuuuuuuuu");
    },
    rosnar: function(){
        console.log("grrrrrrrrrrrrrrrrr");
    },
    setRaca: function(novaRaca){
        this.raca = novaRaca;
    },
    getRaca: function() {
        return "A raça do cachorro é " + this.raca;
    }
}

cachorro.uivar();
cachorro.rosnar();

cachorro.setRaca("Splitz Alemão");

console.log(cachorro.raca);

console.log(cachorro.getRaca());