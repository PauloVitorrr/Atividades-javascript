// Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
// escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
// também um default, que retornará uma mensagem de erro no console.

function feira(fruta){
    const frutaa = fruta.toLowerCase() 
    switch(frutaa){
        case 'maçã':
            return "não vendemos está fruta aqui"
        case 'kiwi':
            return "estamos com escassez de kiwis"
        case 'melancia':
            return "Aqui está, são 3 reais o quilo"
        default:
            return "só vendemos frutas!!"
    } 
}
console.log(feira('maçã'))
console.log(feira('kiwi'))
console.log(feira('MElancia'))
console.log(feira('ração'))