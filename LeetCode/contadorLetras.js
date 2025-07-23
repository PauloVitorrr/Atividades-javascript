function contadorLetra(texto, caractereAlvo) {
  const textoMinusculo = texto.toLowerCase();
  const caractereAlvoMinusculo = caractereAlvo.toLowerCase();

  let caractereContador = 0;

  for (let i = 0; i < textoMinusculo.length; i++) {
    if (textoMinusculo[i] == caractereAlvoMinusculo) {
      caractereContador += 1;
    }
  }

  return caractereContador;
}

console.log(contadorLetra("Banana", "a"));
console.log(contadorLetra("Hello World", "o"));
console.log(contadorLetra("Programacao", "X"));
console.log(contadorLetra("Javascript", "j"));
console.log(contadorLetra("JavaScript", "A"));
