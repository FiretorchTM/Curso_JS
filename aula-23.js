const jose = {
    idade: 35,
    peso: 80 + " kg",
    nome: "José",
    nacionalidade: "brasileiro",
    legalNoPais: true,
    endereco: "rua rodela",
    pais: "brasil",
    temFilhos: true,
}

const exibirInformacoes = (pessoa,qualInfo) => {
    console.log(`Peso do(a) ${pessoa.nome}:`, pessoa.peso);
    console.log(`${qualInfo} do(a) ${pessoa.nome}:`, pessoa[qualInfo]);

}

//jose é um objeto do tipo pessoa

exibirInformacoes(jose, "endereco"); 

//dto