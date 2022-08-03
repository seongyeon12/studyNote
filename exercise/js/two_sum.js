function answer(nums, target) {

/*   for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      } 
    }
  }  */

/*   밑내용 풀이
  let a = {};
  let b = [1, 2, 3, 4];
  a[b[1]] = 1;
  console.log(a); */

  // for 1개만 가지고 풀기
/* let map = {}; // key, value

for (let i = 0; i < nums.length; i++) {
  if (map[target - nums[i]] != undefined) {
    return [map[target - nums[i]], i]
  }

  map[nums[i]] = i;
  console.log(map);
} */
}

let input = [
  [[2, 7, 11, 15], 9],
  [[3, 2, 4], 6],
  [[3, 3], 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i][0], input[i][1]));
}

