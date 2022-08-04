function answer(s, e) {
  let result = [];

  // 각 자릿수 별 인덱스 => 0
  for(let i = 0; i < 10; i++) {
    result[i] = 0;
  }

  // 1 s <= n <= e
  let num;
  for(let i = s; i <= e; i++) {
    num = i;
     // n => % /
    while(num != 0) {
      result[num % 10]++;
      num /= 10;
      num = parseInt(num);
    }
  }

  return result;
}

let input = [
  [129, 130],

  [1412, 1918],

  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i][0], input[i][1]));
}