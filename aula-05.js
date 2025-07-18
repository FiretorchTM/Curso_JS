let vendas = 95;
const vendasexigidas = 100;


while(vendas < vendasexigidas)
{
    let vendasfaltando = vendasexigidas - vendas; 
    console.log("ainda falta: " + vendasfaltando + " vendas");
    vendas += 1;
}

    console.log("parabens pelas 100 vendas");