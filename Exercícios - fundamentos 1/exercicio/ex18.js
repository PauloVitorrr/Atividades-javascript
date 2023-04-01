// Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
//  A     10%
//  B     15%
//  C     20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
function calcSalario(plano, salario){
    const planoo = plano.toUpperCase()
    switch (planoo){
        case 'A':
            return `Seu novo salário é: ${(10/100) * salario}`
        case 'B':
            return `Seu novo salário é: ${(15/100) * salario}`
        case 'C':
            return `Seu novo salário é: ${(20/100) * salario}`
    }
}

console.log(calcSalario('c',200))