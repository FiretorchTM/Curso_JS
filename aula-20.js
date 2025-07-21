// Função teste1 recebe um parâmetro chamado "callback", mas não o utiliza
const teste1 = (callback) => {
    // Agenda a execução após 200ms
    setTimeout(() => {
        console.log("teste numero 1:"); // Será impresso após 200ms
        // OBS: callback não é chamado aqui!
    }, 200);
}

// Função teste2 recebe uma função como parâmetro (callback) e executa após 600ms
const teste2 = (callback) => {
    setTimeout(() => {
        console.log("teste numero 2:"); // Será impresso após 600ms
        callback(); // Aqui o callback é chamado logo após o log
    }, 600);
}

// Função teste3 recebe um callback como parâmetro, mas não o utiliza
const teste3 = (callback) => {
    setTimeout(() => {
        console.log("teste numero 3:"); // Será impresso após 300ms
        // callback não é chamado aqui!
    }, 300);
}

// Função teste4 não recebe callback e apenas imprime após 1ms
const teste4 = () => {
    setTimeout(() => {
        console.log("teste numero 4:"); // Quase imediato (após 1ms)
    }, 1);
}

// Função que será usada como callback
// Será chamada dentro de teste2, depois que "teste numero 2" for exibido
const funcaoCallBack = () => {
    console.log("salvou o usuario!"); // Indica que alguma ação foi concluída (ex: salvar usuário)
}

// Chamada da função teste1
// Apesar de aceitar callback, não está usando. O console.log virá após 200ms
teste1();

// Executa sincronicamente (de forma imediata)
console.log(1 + 1); // Imprime 2 imediatamente

// Chamada da função teste2, passando a função funcaoCallBack como argumento
// Após 600ms, imprime "teste numero 2:" e depois chama funcaoCallBack → imprime "salvou o usuario!"
teste2(funcaoCallBack);

// Chamada de teste3, que imprime após 300ms. Callback não está sendo usado
teste3();

// Executa sincronicamente (imediatamente)
console.log(2 + 2); // Imprime 4

// teste4 imprime quase imediatamente (após 1ms)
teste4();
