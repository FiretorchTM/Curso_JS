// Lista de objetos com nome e idade
const lista = [
    { nome: "José", idade: 40 },
    { nome: "Maria", idade: 30 },
    { nome: "Carlos", idade: 20 },
    { nome: "Fernando", idade: 31 },
    { nome: "Lara", idade: 22 },
];

// .some verifica se **pelo menos um elemento** do array satisfaz a condição
// Nesse caso, verifica se existe **alguma pessoa com idade maior que 25**
const resultadoSome = lista.some((objeto) => objeto.idade > 25); 
// Retorna true se **algum** dos objetos tiver idade > 25 (como um OU lógico ||)

// .every verifica se **todos os elementos** do array satisfazem a condição
// Aqui, verifica se **todos têm 18 anos ou mais**
const resultadoEvery = lista.every((objeto) => objeto.idade >= 18); 
// Retorna true apenas se **todos** tiverem idade >= 18 (como um E lógico &&)

console.log(resultadoSome);  // true — porque várias pessoas têm mais de 25 anos
console.log(resultadoEvery); // true — porque todos têm 18 anos ou mais
