let idades = [18, 43, 14, 22, 45, 83, 34, 31]; // array com idades

let idadespar = []; // array para armazenar as idades pares (declarado fora do loop para não reiniciar a cada iteração)

for (let i = 0; i < idades.length; i++) {
    // cada volta do loop verifica uma idade

    if (idades[i] % 2 === 0) { 
        // se o resto da divisão por 2 for 0, a idade é par
        idadespar.push(idades[i]); 
        // usamos .push() para adicionar essa idade ao array idadespar
    } else {
        // se não for par, então é ímpar
        console.log("indivíduos com idade ímpar: " + idades[i]);
    }
}

// agora usamos forEach para percorrer o array idadespar
// forEach executa uma função para cada item do array
idadespar.forEach(par => {
    console.log("idade par: " + par);
});

// extras para revisar conceitos importantes:
// console.log("a idade do indivíduo número 1 é ", idades[0]);
// console.log("existem:", idades.length, "pessoas no estudo de idade");

/*Maneira correta de fazer se eu quiser saber pares e impares de forma limpa e com o extra da formatação em ordem crescente:

let idades = [18, 43, 14, 22, 45, 83, 34, 31];

// Arrays para guardar os pares e ímpares
let pares = [];
let impares = [];

// Separar as idades em pares e ímpares
for (let i = 0; i < idades.length; i++) {
    if (idades[i] % 2 === 0) {
        pares.push(idades[i]);
    } else {
        impares.push(idades[i]);
    }
}

// Ordenar os dois arrays em ordem crescente
pares.sort((a, b) => a - b);
impares.sort((a, b) => a - b);

// Mostrar os resultados
console.log("Indivíduos com idade par: " + pares.join(", "));
console.log("Indivíduos com idade ímpar: " + impares.join(", "));
*/
