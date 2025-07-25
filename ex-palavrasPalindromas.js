// A função `palimentra` é definida como uma arrow function, encapsulando
// a lógica de forma coesa. Sua responsabilidade única é filtrar palíndromos.
const palimentra = () => {
  // O array `palavras` serve como a fonte de dados (data source) estática para a função.
  const palavras = ['cachorro', 'ovo', 'coco', 'reviver'];
  
  // O array `palavrasInvertidas` atua como um acumulador.
  // Uma nomenclatura mais precisa poderia ser `palindromos`, já que ele armazena
  // apenas as palavras que satisfazem a condição de palíndromo, e não todas as invertidas.
  const palavrasInvertidas = []; 

  // A iteração é realizada através de um loop `for` clássico. Esta abordagem
  // é imperativa, detalhando "como" o processo deve ser executado passo a passo.
  for (let i = 0; i < palavras.length; i++) {
    // A lógica de inversão da string é eficiente e idiomática em JavaScript.
    // O encadeamento de .split('').reverse().join('') é o padrão para esta operação.
    let contraria = palavras[i].split('').reverse().join('');

    // A condição `if` compara a string original com sua versão invertida
    // para validar se é um palíndromo. A comparação `===` é estrita e correta.
    if(contraria === palavras[i]) {
      // O método .push() modifica o array acumulador, adicionando os resultados.
      // Este é um efeito colateral (side effect) esperado na abordagem imperativa.
      palavrasInvertidas.push(contraria);
    }
  }
  // A função retorna o array contendo apenas os palíndromos encontrados.
  return palavrasInvertidas;
};

// A invocação da função é feita corretamente, e seu valor de retorno
// é capturado em uma constante, o que é uma boa prática.
const resultadoFinal = palimentra();

// A saída é formatada para melhor legibilidade, utilizando o método .join()
// para criar uma string delimitada a partir do array de resultados.
console.log("palavras palindromas:", resultadoFinal.join(" - "));