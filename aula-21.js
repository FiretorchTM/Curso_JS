// Função `sleep` que retorna uma Promise que será resolvida após um tempo determinado
// Esse tempo é passado em milissegundos (por isso o nome `mileSegundos`).
const sleep = async (mileSegundos) => {
    // A Promise só será resolvida após o tempo definido com `setTimeout`
    return new Promise(resolve => setTimeout(resolve, mileSegundos));
}

// Função assíncrona que aguarda 3 segundos e depois retorna o número 30
const aguardarComRetorno = async () => {
    await sleep(3000); // Aguarda 3000 milissegundos (3 segundos)
    return "aguardei 3 segundos"; // Após os 3 segundos, retorna aguardei 3 segundos
}

// Função principal que coordena a execução do código assíncrono
const aguardar = async () => {    
    // Exibe o resultado de 2 elevado à potência 2 (ou seja, 4)
    console.log("Passou:", 2 ** 2);

    // Aguarda o término da função `aguardarComRetorno`, que leva 3 segundos
    const resultado = await aguardarComRetorno();

    // Mostra o valor retornado por `aguardarComRetorno` (no caso, 30)
    console.log("resultado:", resultado);

    // Exibe os resultados de potências sucessivas
    console.log("Passou:", 3 ** 2); // 3 ao quadrado = 9
    console.log("Passou:", 4 ** 2); // 4 ao quadrado = 16
    console.log("Passou:", 5 ** 2); // 5 ao quadrado = 25
}
// Executa a função principal `aguardar`.
// Como ela é assíncrona, ela começa e pode esperar (com `await`) outras tarefas
aguardar();

// Porque é util ?
// Quando você quer esperar alguma coisa demorada, como:
// um tempo (o exemplo do sleep) - carregar dados da internet (API) - ler arquivos, etc...
