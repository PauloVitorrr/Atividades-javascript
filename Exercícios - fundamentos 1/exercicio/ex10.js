// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.
function divisivel(numero){
    
    if((numero % 3) == 0){
        return console.log(true)
    } else
        return console.log(false)
}

divisivel(15)