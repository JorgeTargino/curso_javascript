// Copiando props de um objeto para outro com o assing

let carro = {
    portamalas: '200l',
    motor: "2.0"
   
}

let adicionais = {
    tetosolar: true,
    arcondissionado: true
}

console.log(carro);

//usado para copiar os valores de todas as propriedades de um ou mais objetos de origem para um objeto destino
Object.assign(carro, adicionais);

console.log(carro);


