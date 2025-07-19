function soma(item1,item2)//pode ter infinitas posições por exemplo item1, item2,... item23
{
    return item1 + item2;//o return é pra função retornar algo no caso a soma
}

function subtracao(item1, item2)
{
    return item1 - item2;
}

function multiplicacao(item1, item2)
{
    return item1 * item2;
}

function divisao(item1, item2)
{
    return item1 / item2;
}

console.log("soma:", soma(10, 5));//chamo a função pelo nome
console.log("subtração:", subtracao(10, 5));
console.log("multiplicação:", multiplicacao(10, 5));
console.log("divisão:", divisao(10, 5));

