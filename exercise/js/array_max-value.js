function answer(arr) {
  /* 
  max - Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  */
  /*
  max = Math.max.apply(null, arr);
  */
  arr.sort(function(x, y) {
    return x - y;
  })
  return arr[arr.length - 1];
}

let input = [
  [1, 6, 5, 2, 3],
  [19, 41, 23, -4, 17],
  [-64, -27, -41, -33, -59],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`)
}