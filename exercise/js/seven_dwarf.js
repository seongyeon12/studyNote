function answer(drawf) {
  let result = [];
  
  // 1 9명(배열 총 합) = 7명(100) + 2명(faker힙) 
  // 9명 - 7명 = 2명에 대한 합 숫자
  let sum = 0;
  for (let i = 0; i < drawf.length; i++) {
      sum += drawf[i];
  }
  sum -= 100; // -> faker 2명에 대한 배지값 

  // 2 for 두 요소의 합이 faker 2명에 대한 합 숫자와 같은지 비교 -> i, j
  let faker = [];
  for (let i = 0; i < drawf.length; i++) {
    for (let j = i + 1; j < drawf.length; j++) {
      if (sum == drawf[i] + drawf[j]) {
        faker[0] = i;
        faker[1] = j;
        break;
      }
    }
    if (faker.length != 0) break;
  }


  // 3 faker 두명을 제외하고 나머지 배지값을 result 에 넣어준다
  let count = 0;
  for (let i = 0; i < drawf.length; i++) {
    if (faker[0] != i && faker[1] != i) {
      result[count++] = drawf[i];
    }
  }

  return result;
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