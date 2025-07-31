// Lista de objetos com nome e idade
const lista = [
    { nome:"José", idade: 40 },
    { nome:"Maria", idade: 30 },
    { nome:"Carlos", idade: 20 },
    { nome:"Fernando", idade: 31 },
    { nome:"Lara", idade: 22 },
];

// Comentário importante: 
// o método sort() **não retorna um novo array**, ele **modifica a ordem do array original**
// ou seja, ele altera diretamente a variável 'lista'

// Aqui estamos ordenando a lista por nome (ordem alfabética, sem considerar maiúsculas/minúsculas)
lista.sort((a, b) => {
    // Transforma os nomes em letras maiúsculas para evitar erro de ordem (case insensitive)
    if(a.nome.toUpperCase() < b.nome.toUpperCase()) {
        return -1; // a vem antes de b
    }
    if(a.nome.toUpperCase() > b.nome.toUpperCase()) {
        return 1; // a vem depois de b
    }
    return 0; // nomes iguais, mantém a ordem
});

console.log(lista); // Mostra a lista ordenada por nome (alfabeticamente)
/*
    // Se você quiser ordenar por idade (do menor para o maior), basta mudar a lógica:
    lista.sort((a, b) => {
        if(a.idade < b.idade) {
            return -1; // a vem antes de b
        }
        if(a.idade > b.idade) {
            return 1; // a vem depois de b
        }
        return 0; // idades iguais, não altera a ordem
    });
*/

/*
    // Observação:
    // Para ordenar do maior para o menor, basta **inverter os sinais**
    // ou trocar o `-1` por `1` e vice-versa.
*/

/*
    // Resumo sobre o funcionamento do sort:
    // - Ele percorre o array comparando os itens de dois em dois.
    // - A cada comparação ele pode trocar a posição dos itens se necessário.
    // - Ao final, o array original já estará ordenado.
*/