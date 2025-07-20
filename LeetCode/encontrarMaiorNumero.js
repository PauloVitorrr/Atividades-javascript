function encontrarMaiorNumero(nums) {
  if (nums.length == 0) {
    return "O array está vazio";
  }
  let maiorNumero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maiorNumero) {
      maiorNumero = nums[i];
    }
  }
  return maiorNumero;
}

console.log(encontrarMaiorNumero([1, 5, 2, 8, 3]));
console.log(encontrarMaiorNumero([10, 2, 7, 50, 1]));
console.log(encontrarMaiorNumero([]));
