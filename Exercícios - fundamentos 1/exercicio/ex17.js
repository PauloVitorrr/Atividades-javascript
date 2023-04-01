//  Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica O programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
function calculadora(n1, n2, sinal){
    switch (sinal){
        case 'soma':
            var calc  = n1 + n2
            return `${n1} + ${n2} = ${calc}`
        case 'subtração':
            var calc = n1 - n2
            return `${n1} - ${n2} = ${calc}` 
        case 'multiplicação':
            var calc = n1 * n2
            return `${n1} * ${n2} = ${calc}`
        case 'divisão':
            var calc = n1 / n2
            return `${n1} / ${n2} = ${calc}`
        default:
            return 'operações inválidas!!'
    } 
}
console.log(calculadora(2,3,'soma'))
console.log(calculadora(100,3,'subtração'))
console.log(calculadora(3,3,'multiplicação'))
console.log(calculadora(50,2,'divisão'))
console.log(calculadora(2,3,'baskara'))