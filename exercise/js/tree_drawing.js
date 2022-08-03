function answer(height) {
  let str = "\n";

  // 공백 처리 " "
  // * 처리 "*" 2n + 1
  // 개행문자 추가

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height - 1 - i; j++) {
      str += " ";
    }

    for (let j = 0; j < i * 2 + 1; j++) {
      str += "*";
    }

    str += "\n";
  }

  return str;
}

let input = [
  3,

  5,

  7,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}