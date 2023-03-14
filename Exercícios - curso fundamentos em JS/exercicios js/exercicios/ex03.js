//desenvolva um função que recebe dois parametros, um é a quantidade de horas por um
//funcionário num mes, e o quanto ele recebe por hora. O retorno da função deve ser a string
// "Salário igual a R$x" em que X é o quanto o funcionário ganhou no mes

function calcularSalario(horasTrabalhadas, ganhosHora){
    return console.log(`Salário igual a R$ ${horasTrabalhadas * ganhosHora}`)
}

calcularSalario(150, 40.5)