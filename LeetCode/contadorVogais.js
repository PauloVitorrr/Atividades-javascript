function contadorVogais(palavra) {
  let contador = 0;
  for (let i = 0; i < palavra.length; i++) {
    if ("aeiou".includes(palavra[i])) {
      contador += 1;
    }
  }
  return contador;
}
console.log(contadorVogais("programacao"));
