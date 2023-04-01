// Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
function contadorNotas(valor){
    let notas_cem = Math.floor(valor / 100);
    valor %= 100;

    let notas_cinquenta = Math.floor(valor / 50);
    valor %= 50;

    let notas_dez = Math.floor(valor / 10);
    valor %= 10;

    let notas_cinco = Math.floor(valor / 5);
    valor %= 5;

    let notas_um = valor;

    console.log("Notas utilizadas:");
    if (notas_cem > 0) {
        console.log(`${notas_cem} nota(s) de R$ 100`);
    }
    if (notas_cinquenta > 0) {
        console.log(`${notas_cinquenta} nota(s) de R$ 50`);
    }
    if (notas_dez > 0) {
        console.log(`${notas_dez} nota(s) de R$ 10`);
    }
    if (notas_cinco > 0) {
        console.log(`${notas_cinco} nota(s) de R$ 5`);
    }
    if (notas_um > 0) {
        console.log(`${notas_um} nota(s) de R$ 1`);
    }
}

contadorNotas(18)