// Função que gera os primeiros 'n' números da sequência de Fibonacci
function gerarFibonacci(n) {

    // Inicializa o array com os dois primeiros números da sequência de Fibonacci
    const fib = [1, 1];

    // Laço que começa do índice 2 até 'n - 1' (pois já temos os dois primeiros valores)
    for (let i = 2; i < n; i++) {
        // Cada novo número é a soma dos dois anteriores
        fib[i] = fib[i - 2] + fib[i - 1];
    }

    // Retorna o array completo com a sequência gerada
    return fib;
}
// Chama a função passando 10 como argumento, ou seja, queremos os 10 primeiros números
const sequencia = gerarFibonacci(10);

// Imprime a sequência no console, com os números separados por espaço
console.log(sequencia.join(" "));
