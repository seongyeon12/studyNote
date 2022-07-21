function answer(s, e) {
  let sequence = [];
  let i = 0;
  let j = 1;
    sequence.push(s);
    sequence.push(e);
  while (sequence[i] - sequence[j] > - 1) {
    let result = sequence[i] - sequence[j];
    sequence.push(result);
    i++, j++;
  }
  /* 
  let sum;
  while (i) {
      sum = s - e;
      s = e;
      e = sum;
      
    if (e < 0) break;
  }
  */
  return sequence;
}

let input = [
  [9, 3],
  [6, 3],
  [13, 7],
]

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]))
}