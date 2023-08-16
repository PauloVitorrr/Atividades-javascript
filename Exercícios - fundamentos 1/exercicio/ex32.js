// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.
function contadorNegativo(){
    const arrayNegativo = [-1, -2, -3, 5, 3, 10, -5]
    let contador = 0

    const somandoNegativos = arrayNegativo.reduce((accumulator, currentValor) => {
        if(currentValor < 0){
            return contador += 1
        }
    }, arrayNegativo)
    console.log(somandoNegativos)
} 
contadorNegativo()