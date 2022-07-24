function answer(arr) {
  const arr2 = arr.reduce(function (acc, cur) {
    return acc.concat(cur);
  })
  /* 

  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  */
  
  let tmp = arr2[0];

  for (let i = 1; i < arr2.length; i++) {
    tmp = tmp * arr2[i];
  }

  return tmp;
}

let input = [
  [[1], [2], [3]],
  [[1, 2], [3, 4], [5, 6, 7]],
  [[5, 1], [0.2, 4, 0.5], [3, 9]],
]

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}