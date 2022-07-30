function answer(nums) {
  let result = [];
  let emp = 0;
  let a = null;
  let b = null;
  let value = nums.reduce(function add(sum, cur) {
    return sum + cur;
  }, 0);

  value = value - 100;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (value == nums[i] + nums[j]) {
        emp = 0; 
        let a = null;
        let b = null;

        a = Number(nums.splice(i, 1));
        b = Number(nums.splice(j, 1));

        emp = nums.reduce(function add(sum, cur) {
          return sum + cur;
        }, 0);

        if (emp == 100) {
          return nums;
        } else {
          nums.splice(i, 0, a);
          nums.splice(j, 0, b);
          return nums;
        }
      }
    }
  }
}

let input = [
  [1, 5, 6, 7, 10, 12, 19, 29, 33],

  [25, 23, 11, 2, 18, 3, 28, 6, 37],

  [3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}