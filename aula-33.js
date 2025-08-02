// Define a classe Pessoa com nome, idade e filhos
class Pessoa {
    nome;
    idade;
    filhos;

    // Método que retorna a quantidade de filhos (se houver)
    quantosFilhos() {
        if (this.filhos) {
            return this.filhos.length; // Retorna o tamanho do array de filhos
        }
        return 0; // Se não tiver filhos, retorna 0
    }

    // Construtor da classe: define nome, idade e filhos
    constructor(nome, idade, filhos) {
        this.nome = nome;
        this.idade = idade;
        this.filhos = filhos;
    }
}

// Cria um neto (filho do filho1)
const neto = new Pessoa("Lucas", 2); 

// Cria filho1 com um filho (o neto)
const filho1 = new Pessoa("Pedro", 23, [neto]);

// Cria filho2 sem filhos
const filho2 = new Pessoa("Daniel", 20);

// Cria o pai (João) com dois filhos: Pedro e Daniel
const pessoa = new Pessoa("Joao", 54, [filho1, filho2]);

// Exibe o objeto completo da pessoa (João)
console.log(pessoa);

// Mostra quantos filhos o filho1 (Pedro) tem → deve retornar 1
console.log("Filho1 tem:", filho1.quantosFilhos(), "filhos");

// Mostra quantos filhos a pessoa (João) tem → deve retornar 2
console.log("Quantidade de filhos de João:", pessoa.quantosFilhos());
