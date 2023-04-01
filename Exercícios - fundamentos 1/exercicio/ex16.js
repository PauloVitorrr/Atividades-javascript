// Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
// possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
// comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
// que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
// “Não trabalhamos com este tipo de automóvel aqui”.
function revenda(carro){
    const carros = carro.toLowerCase()
    switch (carros){
        case 'hatch': 
            return 'Compra efetuada com sucesso'
        case 'sedan':
            return 'tem certeza que não prefere este modelo?'
        case 'motocicleta':
            return 'tem certeza que não prefere este modelo?'
        case 'caminhonete':
            return 'tem certeza que não prefere este modelo?'
        default: 
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(revenda('hatcse'))