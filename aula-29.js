// Array original com objetos representando pessoas (nome e idade)
const lista = [
    { nome:"José", idade: 40 },
    { nome:"Maria", idade: 30 },
    { nome:"Carlos", idade: 20 },
    { nome:"Fernando", idade: 31 },
    { nome:"Lara", idade: 22 },
];

// Função callback para o reduce — transforma a lista em um objeto onde cada chave é o nome da pessoa
const funcaoReduce = (acc, objeto) => {
    return {
        ...acc, // copia tudo que já está acumulado no objeto anterior
        [objeto.nome]: { // usa o nome como chave
            idade: objeto.idade // salva apenas a idade (poderia ter usado ...objeto para manter tudo)
        }
    }
}

// Aplica o reduce para transformar o array em um objeto com os nomes como chaves
const pessoas = lista.reduce(funcaoReduce, {}); 

/* Exemplo de resultado:
pessoas = {
  José: { idade: 40 },
  Maria: { idade: 30 },
  ...
}
*/

// Usa Object.keys para pegar um array com todas as chaves (nomes das pessoas)
const chaves = Object.keys(pessoas);
// Resultado: ['José', 'Maria', 'Carlos', 'Fernando', 'Lara']

// Converte o objeto de volta para array de objetos com nome e idade
const listaDeVolta = chaves.map((minhaChave) => ({
    nome: minhaChave, // cada chave é o nome da pessoa
    idade: pessoas[minhaChave].idade // acessa a idade correspondente no objeto pessoas
}));

// Exibe a nova lista gerada a partir do objeto (convertida de volta para o formato original)
console.log(listaDeVolta);

/*
//-> Se quiser ver os nomes (chaves) extraídos do objeto pessoas
console.log(chaves);
//-> Se quiser ver como ficou o objeto 'pessoas'
console.log(pessoas);
//-> Se quiser ver as chaves de um objeto individual da lista original
console.log(Object.keys(lista[0])); // ['nome', 'idade']
*/
