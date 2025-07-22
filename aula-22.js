const fatorial = (valor) => {
    if(valor === 0 || valor === 1){
        return 1; 
    }
    return valor * fatorial(valor - 1);
    // 4 * fatorial de 3
    // 3 * fatorial de 2
    // 2 * fatorial de 1 -> 
    // 1
}

console.log(fatorial(3));//função recursiva, função que chama ela mesma fazendo um calculo, ela tem que ter uma validacao pra retornar