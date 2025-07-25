const lista = [
    { nome:"José", idade: 40 , exibir: true},
    { nome:"Maria", idade: 30 },
    { nome:"Carlos", idade: 20 },
    { nome:"Fernando", idade: 30 },
    { nome:"Lara", idade: 22 },
];

//filter tem que receber verdadeiro ou falso
//const listaFiltrada = lista.filter((pessoa) => pessoa.idade > 29);

const filtrarPessoa = (pessoa) => !!pessoa.exibir;

const filtrarPessoaNome = (pessoa) => pessoa.nome === "Lara";

// ! = true /  !! = false
const listaFiltrada = lista.filter(filtrarPessoa);

const listaFiltradaNome = lista.filter(filtrarPessoaNome);

console.log(lista);
console.log(listaFiltrada);
console.log(listaFiltradaNome);