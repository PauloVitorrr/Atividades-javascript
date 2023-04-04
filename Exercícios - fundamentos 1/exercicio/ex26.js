// Crie um construtor de função chamado Pessoa que tenha propriedades para nome, idade e profissão. Em seguida, crie uma instância do objeto Pessoa com o nome "João", idade "30" e profissão "engenheiro".
function Pessoa(nome, idade,profissao){
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
}

const joao = new Pessoa("João", 30, "engenheiro")
console.log(joao)