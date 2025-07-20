function somarArray(nums) {
  let somTotal = 0;

  for (let i = 0; i < nums.length; i++) {
    somTotal += nums[i];
  }

  return somTotal;
}

console.log(somarArray([1, 2, 3, 4, 5])); // Deve retornar 15
