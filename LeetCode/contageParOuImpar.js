function contageParOuImpar(nums) {
  let contadorPar = 0;
  let contadorImpar = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      contadorPar += 1;
      console.log(nums[i], "par");
    } else {
      contadorImpar += 1;
      console.log(nums[i], "impar");
    }
  }

  console.log(
    "O numero de impar é:",
    contadorImpar,
    "O numero de contador par é:",
    contadorPar
  );
}

console.log(contageParOuImpar([5, 8, 3, 2, 7, 9, 32, 53, 22]));
