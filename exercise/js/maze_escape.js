function answer(input) {
  let result = -1;

  // 문자열 -> map(정수: 0, 1)
  
  // 시작, 끝 포인트 설정
  // 시작 -> Queue
  // Queue 순회 == 끝 break;

  return result;
}

let input = [
  ["00110", "00010", "00110", "00000", "01011"],
  ["00110", "00010", "00110", "00010", "01011"],
  [
    "1111111100",
    "1111111101",
    "1111111101",
    "1000111101",
    "1010111101",
    "1010011101",
    "1011000001",
    "0011111111",
  ],
]

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]))
}