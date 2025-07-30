// Lista de pessoas, cada uma representada por um objeto com nome e idade
const lista = [
    { nome:"José", idade: 40 },
    { nome:"Maria", idade: 30 },
    { nome:"Carlos", idade: 20 },
    { nome:"Fernando", idade: 31 },
    { nome:"Lara", idade: 22 },
];

// Função callback para o reduce - transforma a lista em um objeto com nomes como chaves
const funcaoReduce = (acc, objeto) => {
    return {
        ...acc, // mantém todas as propriedades acumuladas até agora
        [objeto.nome]: {
            // poderia usar ...objeto aqui se quisesse manter todas as propriedades
            idade: objeto.idade // adiciona ou atualiza a entrada com o nome como chave e idade como valor
        }
    }
}

// reduce reduz o array para um único objeto
// inicia com um objeto vazio {}
const pessoas = lista.reduce(funcaoReduce, {}); 
// resultado esperado: { José: { idade: 40 }, Maria: { idade: 30 }, ... }

// Outro exemplo de uso do reduce, agora para transformar o array em outro array contendo só idades
const pessoasArray = lista.reduce((acc, objeto) => {
    acc.push(objeto.idade); // adiciona a idade ao array acumulador
    return acc; // sempre retornar o acumulador
}, []); // começa com um array vazio

// Impressões para ver os resultados
console.log(pessoas); // mostra o objeto com os nomes como chaves e idades como valores
console.log(pessoas.Fernando.idade); // acessa diretamente a idade do Fernando
console.log(pessoasArray); // exibe o array com as idades: [40, 30, 20, 31, 22]
