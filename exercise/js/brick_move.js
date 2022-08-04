function answer(blocks) {
  let result = 0;
  let average = 0;
  
  average = blocks.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  average /= blocks.length;

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] < average) {
      result += average - blocks[i];
    }
  }
  return result;
}

let input = [
  [5, 2, 4, 1, 7, 5],
  [12, 8, 10, 11, 9, 5, 8],
  [27, 14, 19, 11, 26, 25, 23, 15],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}