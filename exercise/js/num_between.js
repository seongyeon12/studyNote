function answer(x, y) {
  let result = [];
  /* if (x > y) {
    let t = x;
    x = y;
    y = t;

    for (let i = x; i <= y; i++) {
    result.push(i);
  }
  } */
  if (x < y) {
  for (let i = x; i < y + 1; i++) {
    result.push(i);
  } return result;
} else for (let i = x; i > y - 1; i--) {
  result.push(i);
}
  return result.reverse();
}

let input = [
  [3, 7],

  [8, 3],

  [12, 10],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

