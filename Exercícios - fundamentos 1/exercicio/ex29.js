// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
function paresImpares(){
    var pares = 0
    var impares = 0
    var vetor = [10, 5, 15, 20, 30, 19, 17, 19, 22]
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 == 0){
            pares ++ 
            console.log(pares + ' numeros pares')
        } else {
            impares ++
            console.log(impares + ' numeros impares')
        }
    }
}

paresImpares()