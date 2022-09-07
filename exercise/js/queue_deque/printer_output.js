/* 

*/

function answer(priorites, select) {
  let result = -1;

  return result;
}

let input = [
  [[3], 0],

  [[3, 4, 5, 6], 2],

  [[1, 1, 5, 1, 1, 1], 0],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}