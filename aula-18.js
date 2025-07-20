// Função que recebe 3 números e soma todos eles
function somarTresNumeros(x, y, z) {
    console.log("somarTresNumeros() foi chamada com:", x, y, z);
    return x + y + z;
}

// Função anônima atribuída à variável que retorna o número 2
const retornaDois = function() {
    console.log("retornaDois() foi chamada. Vai retornar 2.");
    return 2;
}

// Função que recebe outra função como argumento e a executa
const executarFuncao = (qualquerFuncao) => {
    console.log("executarFuncao() foi chamada. Vai executar a função recebida como argumento.");
    return qualquerFuncao(); // Executa a função passada e retorna o resultado
}

// Testando a função somarTresNumeros
console.log("Resultado da soma:", somarTresNumeros(2, 4, 6)); // Deve imprimir 12
console.log();//pula linha
// Testando a função retornaDois
console.log("Resultado da função retornaDois:", retornaDois()); // Deve imprimir 2
console.log();//pula linha
// Testando a função executarFuncao, passando retornaDois como parâmetro
console.log("Resultado de executarFuncao(retornaDois):", executarFuncao(retornaDois)); // Deve imprimir 2
console.log();//pula linha