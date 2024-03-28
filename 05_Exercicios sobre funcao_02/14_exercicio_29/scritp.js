/*
1.Crie uma função chamada faixaEtaria que aceita um argumento chamado idade;
2.Identifique três faixas etárias: Criança (menor que 12 anos), Jovem (12 a 24 anos), Adulto (Maior que 25 anos;
3.Execute a função duas vezes e encapsule os resultados em variáveis diferentes;
4.Uma variável deve ter o nome de crianca e enviar como argumento uma idade de criança;
5.A outra o nome adulto e uma idade de adulto para executar a função criada;
*/
function faixaEtaria(idade){
    if(idade < 12){
      return "Criança";
    } else if (idade > 12 && idade <= 24){
      return "Jovem";
    } else {
      return "Adulto";
    }

}
    let crianca = faixaEtaria(8);
    let adulto = faixaEtaria(30);

    console.log(crianca);
    console.log(adulto);


