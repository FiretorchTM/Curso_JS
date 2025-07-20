//const idade = 10;//o pai nao consegue acessar as informaçoes do filho

const exibirIdade = () => {
    const idade = 23;//se ele nao tiver ele olha o pai se nao ele mostra o propio.
    console.log(idade);
}

const exibirIdade2 = () => {
    exibirIdade();
     //console.log(idade);//nao vai ter a informação pois é de outro escopo
}

exibirIdade2();//filho consegue acessar dados do pai