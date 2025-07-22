// Função que procura dois números em 'nums' cuja soma seja igual ao 'target'
const twoSum = function(nums, target) {
    // Percorre o array de início ao fim
    for (let i = 0; i < nums.length; i++) {
        // Percorre a partir do próximo elemento (evita repetir pares ou somar com ele mesmo)
        for (let j = i + 1; j < nums.length; j++) {
            // Verifica se a soma dos dois elementos atuais é igual ao target
            if (nums[i] + nums[j] === target) {
                // Se encontrar, retorna os índices dos dois elementos que somam o target
                return [i, j];
                // OBS: Se você quisesse os valores em si, usaria: return [nums[i], nums[j]];
            }
        }
    }

    // Se nenhum par for encontrado, retorna null
    return null;
};

// Chama a função com o array e o target desejado
const resultado = twoSum([2, 8, 7, 11, 15], 9);

// Verifica se algum par foi encontrado
if (resultado) {
    // Se encontrou, imprime os índices
    console.log(`Encontrou um par com o target (9) nas posições:\n ${resultado[0]} e ${resultado[1]}`);
} else {
    // Se não encontrou, imprime mensagem de falha
    console.log("não encontrou nenhum par ;(");
}
