// Lista de objetos com nome, idade e uma lista de cartões (array de strings)
const lista = [
    { nome: "José", idade: 40, cartoes: ["3144", "4133"] },
    { nome: "Maria", idade: 30, cartoes: ["3244", "4233"] },
    { nome: "Carlos", idade: 20, cartoes: ["3344", "4333"] },
    { nome: "Fernando", idade: 31, cartoes: ["3444", "4433"] },
    { nome: "Lara", idade: 22, cartoes: ["3544", "4533"] },
];

// flatMap percorre a lista e junta todos os arrays de cartões em **um único array plano**
// Ou seja: transforma [[...], [...], [...]] → em apenas [...]
const cartoes = lista.flatMap((cartao) => cartao.cartoes);

// Exibe todos os cartões extraídos da lista (sem estrutura por pessoa)
console.log(cartoes);

// Acessa diretamente o **segundo cartão de Carlos**
// Carlos é o 3º da lista, então os cartões dele estão nas posições 4 e 5 (índices baseados na ordem total)
console.log("O segundo cartão do Carlos é:", cartoes[5]);

/*
 Explicação adicional:
 Se você usasse apenas .map(), teria isso:

   const cartoes = lista.map((cartao) => cartao.cartoes);

   Isso resultaria em um array de arrays (matriz), tipo:
   [
     ["3144", "4133"],
     ["3244", "4233"],
     ...
   ]

   Nesse formato, acessar o segundo cartão de Carlos seria:
   cartoes[2][1]

 Já com .flatMap(), você tem uma única lista:
   ["3144", "4133", "3244", "4233", ..., "4533"]

 Aí acessar o cartão é como acessar posições de um array normal.
*/