function calcular(valor){
    if(valor === 0)
    {
        throw new Error("não pode ser 0");
    }
    return valor/2;
}

try {
    const resultado = calcular(0);//nao continua as linhas antes se a requisição for atendida no caso é ser 0 e vai para o catch
    console.log("resultado:", resultado);
}
 catch(error){
console.log(error.message)
} finally {//exemplo do finaly caso criei um usuario e quero criar o endereço entao exclui o usuario é pra fechar um erro
    console.log("chegou no finaly");
}

console.log("continua a partir daqui");