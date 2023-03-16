// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.
function juroSimples(capitalInicial, taxasJuros, tempo){
    const taxas = taxasJuros/100
    const jurosSimples = capitalInicial * taxas * tempo
    return console.log(jurosSimples)
}

juroSimples(1.200, 2, 14)

function jurosCompostos(capital, taxasJuros, tempo){
    const taxas = taxasJuros/100
    const montante = capital * (1 + taxas) ** tempo
    return console.log(montante) 
}

jurosCompostos(10.000, 15, 10)