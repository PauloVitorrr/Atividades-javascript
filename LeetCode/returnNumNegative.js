function twoSum(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      return nums[i];
    }
  }
  return null;
}

console.log(twoSum([5, 8, -3, 2])); // [0, 1]
