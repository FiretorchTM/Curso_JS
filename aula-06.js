let idade = 10;
let ano = 2000;
const maiorDeIdade = 18;
//o certo seria fazer a idade baseada no ano porque sempre que o ano é atualizado a idade seria atualizada juntamente.

do{//nota* se não colocar a a variavel idadeFaltando dentro do loop ela não será atualizada a cada interação.
    
let idadeFaltando = maiorDeIdade - idade;
if(idade >= 17)
{
console.log("ano: " + ano);
console.log("só vai poder entrar na festa daqui a: " + idadeFaltando + " ano");
console.log("")
}

else
{
console.log("ano: " + ano);
console.log("só vai poder entrar na festa daqui a: " + idadeFaltando + " anos");
console.log("")
}//daria pra colocar ano(s) e ter economizado código.

ano++;
idade++;

}while(idade < 18);
console.log("")
console.log("finalmente: " + ano + " e eu posso entrar na festa!")
console.log("pode entrar voce tem: ", idade +);