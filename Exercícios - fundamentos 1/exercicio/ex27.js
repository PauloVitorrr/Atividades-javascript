// Crie um construtor de função chamado Retângulo que tenha propriedades para largura e altura. Em seguida, crie um método no protótipo do objeto Retângulo que calcule a área do retângulo. Por fim, crie uma instância do objeto Retângulo com largura 5 e altura 10 e chame o método area().
function Retangulo(largura, altura){
    this.largura = largura
    this.altura = altura
    this.areatotal = altura * largura
}

const area = new Retangulo(5, 10)
console.log(area)