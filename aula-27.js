const lista = [
    { nome:"José", idade: 40 },
    { nome:"Maria", idade: 30 },
    { nome:"Carlos", idade: 20 },
    { nome:"Fernando", idade: 31 },
    { nome:"Lara", idade: 22 },
];

const encontraPessoaNome =  (pessoa) => pessoa.nome === "Carlos";
const encontraPessoaIdade = (pessoa) => pessoa.idade > 30;

const novaPessoaNome = lista.find(encontraPessoaNome);
const novaPessoaIdade = lista.find(encontraPessoaIdade);

const stringPessoaNome = `Nome: ${novaPessoaNome.nome}, Idade: ${novaPessoaNome.idade}`;
const stringPessoaIdade = `Nome: ${novaPessoaIdade.nome}, Idade: ${novaPessoaIdade.idade}`;

console.log(`Primeira pessoa encontrada com find(===carlos): ${stringPessoaNome}\nPrimeira pessoa encontrada com find(idade>30): ${stringPessoaIdade}`);