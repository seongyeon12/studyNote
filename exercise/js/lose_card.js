function answer (a, b, c) {
  let number = 0;
  let c = 0;

  num = [a, b, c];
  num.sort((x, y) => x - y);

  if (b - a < c - b) {
    c = b - a;
    number = a + c; 
  } else if (b - a = c - b) {

  } else {
    
  }

  return num;
}

let input = [
  [1, 7, 10],

  [3, 8, 18],

  [2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
