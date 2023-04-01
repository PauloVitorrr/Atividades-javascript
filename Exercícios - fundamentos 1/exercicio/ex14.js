// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
function semana(dia){
    const diaa = dia.toLowerCase();
    switch (diaa){
        case 'segunda':
            return 'dia útil'
        case 'terça':
            return 'dia útil'
        case 'quarta':
            return 'dia útil'
        case 'quinta':
            return 'dia útil'
        case 'sexta':
            return 'dia útil'
        case 'sábado': 
            return 'fim de semana'
        case 'domingo':
            return 'fim de semana'
        default:
            return 'dia inválido'
    } 
}

console.log(semana('Quinta'))