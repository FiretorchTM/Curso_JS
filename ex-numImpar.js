const quantidade = 6; // define quantos números ímpares queremos exibir

function numerosImpares(numeroAlvo) {
    let contarImpares = 0; // contador para saber quantos números ímpares já encontramos
    let numeroAlvoNovo = numeroAlvo; // começa com o número passado na função e será incrementado

    while (contarImpares < quantidade) { // repete enquanto ainda não achou os 6 números ímpares
        if (numeroAlvoNovo % 2 !== 0) { // verifica se o número atual é ímpar (resto da divisão por 2 é diferente de 0)
            console.log(numeroAlvoNovo); // se for ímpar, mostra o número no console
            contarImpares++; // aumenta o contador de ímpares encontrados
        }
        numeroAlvoNovo++; // incrementa o número para verificar o próximo na próxima volta do loop
    }
}
// chama a função, passando 5 como número inicial
// o programa irá mostrar os 6 próximos números ímpares a partir do 5 (inclusive ele mesmo se for ímpar)
numerosImpares(5);
