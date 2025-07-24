// Define a codificação de entrada padrão para UTF-8.
// Isso garante que caracteres especiais e acentuações sejam lidos corretamente
// do terminal quando você digita.
process.stdin.setEncoding("utf8");

function gerarRecursiva(n) {
     // Validação inicial para NaN (Not a Number)
    // Se 'n' não for um número válido, lançamos um erro.
    if (isNaN(n)) {
        throw new Error("Entrada inválida! Por favor, digite um número.");
    }
    // Validação da entrada:
    // Se 'n' for menor que 0 ou maior que 100, lançamos um erro.
    // Isso evita cálculos para valores indesejados e ajuda a controlar
    // a profundidade da recursão, prevenindo possíveis Stack Overflow para 'n' muito grandes.
    if (n < 0 || n > 100) {
        throw new Error("Valor inválido! O programa será encerrado.");
    }

    // Caso Base da Recursão:
    // Esta é a condição de parada da recursão.
    // Quando 'n' chega a 0, a função retorna 0, encerrando a sequência de chamadas.
    // (Ex: 3 + 2 + 1 + 0 = 6)
    if (n === 0) {
        return 0;
    }

    // Passo Recursivo:
    // A função se chama novamente com 'n - 1' (reduzindo o valor de 'n' a cada passo)
    // e adiciona o 'n' atual ao resultado da chamada recursiva.
    // Isso constrói a soma de trás para frente, desde 0 até o 'n' inicial.
    return n + gerarRecursiva(n - 1);
}

// Configura um "ouvinte" para o evento 'data' na entrada padrão (teclado/terminal).
// Toda vez que o usuário digitar algo e pressionar Enter, essa função será executada.
process.stdin.on("data", function(data) {
    // O bloco try...catch é usado para lidar com possíveis erros que podem ocorrer
    // dentro do código que estamos tentando executar.
    try {
        // Converte a entrada do usuário (que é uma string) para um número.
        // Em seguida, chama a função 'gerarRecursiva' com esse número
        // e imprime o resultado no console.
        console.log("soma:", gerarRecursiva(Number(data)));
    } catch (error) {
        // Se um erro for lançado (por exemplo, pela validação em gerarRecursiva),
        // este bloco 'catch' captura o erro.
        // Ele imprime a mensagem de erro no console.
        console.log(error.message);
        // Pausa a leitura da entrada padrão.
        // Isso impede que o programa continue aguardando novas entradas após um erro.
        // No entanto, o programa Node.js *não* encerra por completo aqui,
        // ele apenas para de ler o stdin. Para encerrar de verdade, usaria process.exit(1).
        process.stdin.pause();
    }
});

// As linhas abaixo estão comentadas, mas seriam para testar a função diretamente,
// sem a necessidade de entrada via terminal (stdin).
// const resultado = gerarRecursiva(1);
// console.log("o resultado da função recursiva é:", resultado);