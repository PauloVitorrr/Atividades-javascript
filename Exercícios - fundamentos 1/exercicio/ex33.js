//  Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
function media(){
    const nInteiros = [2, 2, 2, 2, 2]
    var sum = 0

    for(let i = 0; i < nInteiros.length; i++){
        sum += nInteiros[i]
    }
    var media = sum / nInteiros.length
    console.log(media)
}

media()