function answer(mark) {
  let result = 0;
  let num = 0;

  for (let i = 0; i < mark.length; i++) {
    if (1 == mark[i]) {
      result += ++num;
    } else {
      num = 0;
    }
  }

  return result;
}

let input = [
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}