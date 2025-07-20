const mensagem = "Bom dia João";
const mensagem2 = "tudo bem ?";

console.log("tamanho da string: ", mensagem.length);
console.log(mensagem + mensagem2);//maneira de concatenar otimizada
console.log(mensagem.concat(mensagem2));//maneira comum de concaternar
console.log(mensagem.substring(2)); 
console.log(mensagem.substring(5,1));//(5,1) 1: começa a partir da posição 1 = "o" / 5: mostra os 5 caracteres seguintes incluindo o espaço
console.log("quebrar em array", mensagem.split(" "));//transforma em duas strings pois quebra no " " que eu selecionei
console.log("ES:",`mensagem: ${mensagem} ${mensagem2}`);//permite eu colocar espaço não preciso das pelicas
console.log("UP: maiusculo:", mensagem.toUpperCase());//util para buscas, se o usuario quer pesquisar no site mudamos tudo para maiusculas para facilitar a busca 
console.log("DOWN: maiusculo:", mensagem.toLowerCase());//
console.log("Replace:", mensagem.replace("João", "Pyettro"));
console.log("ReplaceAll:", mensagem.replaceAll("o", "A"));