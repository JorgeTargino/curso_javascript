let nome = "Mateus";

for(let i = 0; i < 10; i = i + 1) {

    if(i == 3) {
      nome = "João";
    }

    if(i == 5 && nome == "João") {
      //console.log("O nome e João, pode parar")
      console.log(`O nome é ${nome} pode parar`)
      break;
    }

    console.log(i);

}