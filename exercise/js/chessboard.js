// [1, 1, 2, 2, 2, 8] 

function answer(chess) {
  let result = [];
  let arr = [1, 1, 2, 2, 2, 8];

  
/*   let count = 0;
  for (let i = 0; i < chess.length; i++) {
    result[count++] = arr[i] - chess[i];
  }
  */

  for (let i = 0; i < chess.length; i++) {
    if (arr[i] > chess[i] || arr[i] < chess[i]) {
      result.push(arr[i] - chess[i])
    } else {
      result.push(0);
    }
  }
  return result;
}
let input = [
  [0, 1, 2, 2, 2, 7],

  [2, 1, 2, 1, 2, 1],

  [0, 1, 1, 5, 3, 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
