// Declaração de uma constante chamada 'lista'.
// 'lista' é um array (vetor) de objetos.
// Cada objeto representa uma pessoa e possui duas propriedades: 'nome' (String) e 'idade' (Number).
const lista = [
    {
        nome:"José",
        idade: 40,
    },
    {
        nome:"Maria",
        idade: 30,
    },
    {
        nome:"Carlos",
        idade: 20,
    },
    {
        nome:"Fernando",
        idade: 30,
    },
    {
        nome:"Lara",
        idade: 22,
    },
];

// Declaração de uma arrow function chamada 'converterObjeto'.
// Esta função recebe um objeto como parâmetro (por exemplo, um dos itens da 'lista').
// Seu objetivo é transformar esse objeto em um novo objeto.
const converterObjeto = (objeto) => {
    // A função retorna um novo objeto.
    return {
        // O operador spread '...objeto' copia todas as propriedades
        // do objeto original (neste caso, 'nome' e 'idade') para o novo objeto.
        // É uma forma concisa de manter os dados originais.
        ...objeto,

        // Adiciona uma nova propriedade chamada 'nomeIdade'.
        // O valor dessa propriedade é uma string que combina o nome e a idade
        // do objeto original, formatada como "nome + idade".
        nomeIdade: `${objeto.nome} + ${objeto.idade}`
    }
}

// O método 'map()' é chamado no array 'lista'.
// 'map()' cria um NOVO array aplicando a função 'converterObjeto' a CADA um dos
// elementos do array original ('lista').
// O resultado é um novo array onde cada objeto possui os campos originais
// mais o novo campo 'nomeIdade'.
// 'console.log()' então exibe esse novo array no console.
console.log(lista.map(converterObjeto));