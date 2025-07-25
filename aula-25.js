// Array de objetos, cada um representando uma pessoa com nome e idade.
const lista = [
    { nome:"José", idade: 40 },
    { nome:"Maria", idade: 30 },
    { nome:"Carlos", idade: 20 },
    { nome:"Fernando", idade: 30 },
    { nome:"Lara", idade: 22 },
];

// Variável para acumular o valor total das idades.
let soma = 0;

// Função que, para cada objeto, soma o valor da chave 'idade' à variável externa 'soma'.
const somaIdade = (objeto) => {
    soma += objeto.idade;
}

// O método '.forEach()' executa a função 'somaIdade' para cada item da 'lista'.
lista.forEach(somaIdade);

// Exibe o valor final acumulado.
console.log("Nomes:", lista.map(recebeParametro => recebeParametro.nome).join(", "), "\nidades:" , lista.map(recebeParametro => recebeParametro.idade).join(", "), "\nsoma das idades:", soma, );
 // Saída: soma  142

 //todos os valores mas em tabela
 console.table(lista);