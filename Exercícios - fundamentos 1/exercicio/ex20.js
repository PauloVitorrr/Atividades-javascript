// O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto    Preço
// 100       Cachorro Quente     R$ 3,00
// 200      Hambúrguer Simples   R$ 4,00
// 300      Cheeseburguer        R$ 5,50
// 400           Bauru           R$ 7,50
// 500        Refrigerante       R$ 3,50
// 600           Suco            R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.
function comanda(codigo, quantidade){
    switch(codigo){
        case 100:
            return `O valor pelo o lache é R$ ${3.00 * quantidade}`
        case 200:
            return `O valor pelo o lanche é R$ ${4.00 * quantidade}`
        case 300:
            return `O valor pelo o lanche é R$ ${5.50 * quantidade}`
        case 400:
            return `O valor pelo o lanche é R$ ${7.50 * quantidade}`
        case 500:
            return `O valor pelo o lanche é R$ ${3.50 * quantidade}`
        case 600:
            return `O valor pelo o lanche é R$ ${2.80 * quantidades}`
        default:
            return 'Produto não existente'
    }
}

console.log(comanda(300, 2))