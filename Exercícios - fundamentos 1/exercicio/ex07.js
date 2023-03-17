// Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.
let deltaResultado;

function delta (a,b,c){
    deltaResultado = b**2 - 4*a*c
    if(deltaResultado == 0){
        return console.log("Delta é negativo")
    } else {
        console.log("O delta é " + deltaResultado);
    }   
    const x1 = -b + Math.sqrt(deltaResultado)/ 2*a
    console.log("x' " + x1)
    const x2 = -b - Math.sqrt(deltaResultado)/ 2*a
    console.log("x''" +x2)
}

delta(0,0,0)