function multiplosde13(valor1, valor2) // Declara uma função que recebe dois valores
{
    let maior = 0; // Variável para armazenar o maior valor
    let menor = 0; // Variável para armazenar o menor valor
    let soma = 0;  // Variável acumuladora da soma

    if(valor1 > valor2) // Se o primeiro valor for maior que o segundo
    {
        maior = valor1; // Atribui o maior valor a 'maior'
        menor = valor2; // Atribui o menor valor a 'menor'
    }
    else // Caso contrário (valor2 maior ou igual)
    {
        maior = valor2; // Atribui o maior valor a 'maior'
        menor = valor1; // Atribui o menor valor a 'menor'
    }

    for(menor; menor <= maior; menor++) // Laço que percorre do menor ao maior, inclusive
    {
        if(menor % 13 !== 0) // Se o número atual NÃO for múltiplo de 13
            soma += menor; // Adiciona o número à soma
    }

    return soma; // Retorna o valor final da soma
}
console.log(multiplosde13(100, 200)) // Chama a função com os valores 100 e 200 e imprime o resultado



/*
const x = 100;
const y = 200;

//let x = parseInt(prompt("Digite o primeiro número:")); // Lê o primeiro número e converte para inteiro
//let y = parseInt(prompt("Digite o segundo número:")); // Lê o segundo número e converte para inteiro

let menor = Math.min(x, y); // Determina o menor dos dois números
let maior = Math.max(x, y); // Determina o maior dos dois números
let soma = 0; // Inicializa a variável que acumulará a soma

for (let i = menor; i <= maior; i++) { // Percorre todos os números entre menor e maior, inclusive
  if (i % 13 !== 0) { // Verifica se o número não é múltiplo de 13
    soma += i; // Se não for múltiplo de 13, adiciona à soma
  }
}

console.log("Soma dos números que não são múltiplos de 13:", soma); // Exibe o resultado final no console


//Um múltiplo de 13 é qualquer número que pode ser dividido por 13 com resto 0, ou seja
*/