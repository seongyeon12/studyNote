function answer(num) {
  let result = [];

  for (let i = 0; i < num; i++) {
    result.push("*");
  }
  let output = result.reduce((x, y) => x + y)
  return output;
}

let input = [
  5,
  7,
  12
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
