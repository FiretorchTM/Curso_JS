const salario1 = 1200.43999;
console.log("salario: ", salario1.toFixed(2));//toFixed() mostra as casas decimais depois da virgula e arredonda pra cima



const salario2 = "1200"
console.log("salario: ", Number(salario2).toFixed(2));//converti primeiro para int para depois poder mostrar as casas decimais

const salario3 = "1200";
let salarioNumero = Number(salario3);//a variável salarioNumero recebe o valor de salario e converte para int
salarioNumero += 50;// adiciona 50 ao salário

console.log("salario:", salario3);
console.log("salario numero:", salarioNumero.toFixed(2));
