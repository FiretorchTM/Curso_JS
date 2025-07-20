// Define o tipo de codificação da entrada como UTF-8
// Isso garante que acentos e caracteres especiais sejam lidos corretamente
process.stdin.setEncoding('utf8');

// Variável que guardará a maior palavra digitada até agora
let maiorString = '';

// Array que armazenará os resultados (como "1-4-3") de cada frase digitada
let caracterePorPalavra = [];

/**
 * Função que conta a quantidade de caracteres de cada palavra da frase
 * valor: frase digitada pelo usuário (ex: "I love you")
 */
function contarCaracteres(valor){
    let retorno = ''; // String que será preenchida com os comprimentos (ex: "1-4-3")

    // Remove a quebra de linha da string (funciona no Windows que usa '\r\n')
    const removeEnter = valor.replace('\r\n', '');

    // Divide a frase em palavras, usando espaço como separador
    const separarEmArray = removeEnter.split(' ');

    // Percorre cada palavra do array
    for(let i = 0; i < separarEmArray.length; i++)
    {
        // Se for a primeira palavra, só adiciona o tamanho... "a frase sendo i love you: i === 0  ficaria 1 porque é o lenght da frase"
        if(i === 0) {
            retorno = `${separarEmArray[i].length}`; // Ex: "1" "I" love you
        }
        else {
            // Para as seguintes, adiciona um "-" antes do tamanho
            retorno = `${retorno}-${separarEmArray[i].length}`; // Ex: "1-4-3"
        }

        // Verifica se a palavra atual tem tamanho maior ou igual à maior palavra já encontrada
        // Se sim, atualiza a variável maiorString com essa palavra
        if(separarEmArray[i].length >= maiorString.length) {
            maiorString = separarEmArray[i];
        }
    }

    // Retorna a string com os tamanhos separados por "-"
    return retorno;
}

// Excuta eventos de entrada no terminal
// Executa toda vez que o usuário digita uma linha e aperta Enter
process.stdin.on('data', function(data){

    // Verifica se o valor digitado é "0"
    if(data == 0) {
        // Exibe todos os resultados armazenados (como "1-4-3")
        for(let i =0; i < caracterePorPalavra.length; i++) {
            console.log(caracterePorPalavra[i]);  
        }

        // Exibe a maior palavra digitada entre todas as frases
        console.log(`The biggest word: ${maiorString}`);

        // Encerra a leitura de dados (finaliza o programa)
        process.stdin.pause();
    } else {
        // Se não for "0", chama a função contarCaracteres com o texto digitado
        // Adiciona o resultado no array caracterePorPalavra
        caracterePorPalavra.push(contarCaracteres(data));
    }
});

//1-4-3
//1i 4love 3you
//inserir frase calcula a quantidade de caracteres e separa os valores(em numeros) por -    
//deve receber varias frases linha por linha 
//no final calcular a maior e mostrar no ecra
