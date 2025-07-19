let numero = 5;//numero alvo
let numerosImpares = [];//array que guarda os impares

for(let i = 0;i < 6;)//for pra contar os 6 numeros impares depois do numero alvo
{
    if(numero % 2 !== 0){//verificar se o numero é impar
    numerosImpares.push(numero);//coloca(push) o numero impar(numero) no final do array(numerosIpares)
    console.log("número ímpar encontrado:", numerosImpares[numerosImpares.length - 1]);// imprime o último número ímpar adicionado, que está na última posição do array
    i++//acrecenta i sempre que um numero impar é encontrado
    }
    numero++;//acrecenta os numeros
    
}console.log("Os 6 próximos números ímpares são:", numerosImpares);//mostra de forma ordenada em um linha o array de numeros impares


/*
let frutas = ["maçã", "banana", "uva"]; // array com 3 elementos

// os índices (posições) de cada item começam do zero:
console.log(frutas[0]); // "maçã"  → primeiro item, índice 0
console.log(frutas[1]); // "banana" → segundo item, índice 1
console.log(frutas[2]); // "uva" → terceiro item, índice 2

// agora, vamos ver o tamanho total do array:
console.log(frutas.length); // retorna 3, porque há 3 elementos no array

// mas o último item está na posição 2, não 3, porque os índices começam em 0!
// então, para acessar o último item, fazemos:
console.log(frutas[frutas.length - 1]); // "uva"

// explicação do porquê do -1:
// frutas.length retorna 3
// como os índices vão de 0 a 2, o último item está na posição (3 - 1) = 2
// por isso usamos frutas[frutas.length - 1] para acessar o último elemento corretamente

*/