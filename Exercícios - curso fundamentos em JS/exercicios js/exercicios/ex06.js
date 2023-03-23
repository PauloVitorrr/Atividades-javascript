// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.

const contas = {
    receitas: [720, 100],
    despesas: [215, 150, 100, 120],
}


function calcularGastos() {
    let income = contas.receitas
    let expenses = contas.despesas

    let receitasCalc1 = income.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
    })

    let despesasCalc1 = expenses.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
    })

    let saldo = receitasCalc1 - despesasCalc1
    console.log(saldo)
}



calcularGastos()

//saldo tem que dar 235