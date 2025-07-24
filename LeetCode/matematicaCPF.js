function gerarCPFCompleto(cpfParcial) {
  const numerosLimpos = cpfParcial.replace(/\D/g, "");

  if (numerosLimpos.length !== 9) {
    throw new Error(
      "O CPF deve conter exatamente 9 dígitos (sem os verificadores)."
    );
  }

  const digitos = numerosLimpos.split("").map(Number);

  const pesosPrimeiroDigito = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  const pesosSegundoDigito = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

  let somaPrimeiroDigito = 0;
  for (let i = 0; i < digitos.length; i++) {
    somaPrimeiroDigito += digitos[i] * pesosPrimeiroDigito[i];
  }

  const resto1 = somaPrimeiroDigito % 11;
  const primeiroVerificador = resto1 < 2 ? 0 : 11 - resto1;

  const digitosComPrimeiro = [...digitos, primeiroVerificador];

  let somaSegundoDigito = 0;
  for (let j = 0; j < digitosComPrimeiro.length; j++) {
    somaSegundoDigito += digitosComPrimeiro[j] * pesosSegundoDigito[j];
  }

  const resto2 = somaSegundoDigito % 11;
  const segundoVerificador = resto2 < 2 ? 0 : 11 - resto2;

  const cpfCompleto = [
    ...digitos,
    primeiroVerificador,
    segundoVerificador,
  ].join("");

  return cpfCompleto;
}

const entrada = "280.012.389";
const cpfFinal = gerarCPFCompleto(entrada);
console.log(`CPF completo: ${cpfFinal}`);
