function gerarRecursiva(n) {

    if(n === 0 || n === 1)
    {
        return 1;
    }

    return n + gerarRecursiva(n - 1);
}

const resultado = gerarRecursiva(4);

console.log("o resultado da função recursiva é:", resultado);