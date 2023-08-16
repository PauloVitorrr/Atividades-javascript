// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
function maiorValor(){
    const numberArray = [1, 2,3,4,5,6,10,66,77]
    const arrayMaiorMenor = []

    const maiorNumero = numberArray.reduce((a,b) => {
        return Math.max(a,b)
    }, -Infinity)

    const menorNumero = numberArray.reduce((a,b) => {
        return Math.min(a,b)
    }, Infinity)

    return [maiorNumero, menorNumero]
}

console.log(maiorValor())