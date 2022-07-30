function answer(nums) {
  let result = [];

  // 1 최소값 
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
  }

  // 2 최소값에 해당하는 위치 index 
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (min == nums[i]) {
      result[count++] = i; // count -> 0
    }
  }

  return result;
}

let input = [
  [5, 2, 10, 2],

  [4, 5, 7, 4, 8],

  [11, 15, 12, 16, 11, 12],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
