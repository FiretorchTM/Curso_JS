// Declaração da função fatorial usando arrow function.
// Essa função recebe um valor e retorna o fatorial desse valor.
const fatorial = (valor) => {

    // Caso base: se o valor for 0 ou 1, o fatorial é 1.
    // Isso impede que a função chame a si mesma infinitamente (evita um loop sem fim).
    if (valor === 0 || valor === 1) {
        return 1; 
    }

    // Caso recursivo: a função chama a si mesma com (valor - 1).
    // Exemplo: fatorial(3) = 3 * fatorial(2), e assim por diante...
    return valor * fatorial(valor - 1);

    /*
        Aqui está o que acontece na prática quando chamamos fatorial(3):

        fatorial(3)
        => 3 * fatorial(2)
        => 3 * (2 * fatorial(1))
        => 3 * (2 * 1)
        => 3 * 2 = 6

        O retorno acontece de trás pra frente, como uma pilha de chamadas.
        Isso é o conceito de recursão: uma função que chama ela mesma até chegar em um "fim" (caso base).
    */
}
// Chamando a função e exibindo o resultado no console.
console.log(fatorial(3)); // Deve imprimir: 6

// OBS: fatorial é uma função recursiva, ou seja, ela se chama dentro dela mesma.
// É MUITO IMPORTANTE ter uma condição de parada (o if com return 1), senão ela entra em loop infinito.
