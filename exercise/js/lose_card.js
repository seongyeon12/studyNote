function answer (a, b, c) {
  // let number = 0;
  let v = 0;

  num = [a, b, c];
  num.sort((x, y) => x - y);

  
/*   //1 get d -> 등차값 찾기
  let d = 0;
  for (let i = 1; i < num.length; i++) {
    d += num[i] - num[i - 1];
  }
  d /= num.length;

  //2 빈 index 찾기 
  let index = num[2] - num[1] > num[1] - num[0] ? 2 : 1;

  //3 이전값 + d
  number = num[0] + d * index;
  */
  if (b - a > c - b) {
    v = c - b;
    number = a + v; 
  } else {
    v = b - a; 
    number = b + v;
  }

  return number;
}

let input = [
  [1, 7, 10],

  [3, 8, 18],

  [2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
