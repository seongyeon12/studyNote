/* 
  큐 형태로 넣고, 처음 n먼저 제거
  그 다음부턴 k번째 요소 제거, m이 큐에 들어올 경우 그 떄부턴 앞에서 뒤로 보내는 형식
*/

function answer(n, m, k) {
  let result = [];
  let queue = [];
  let arr = Array(n).fill().map((v,i)=>i+1);

  // m번째 요소 제거
  let j = 0;
  while () {
    queue.push(arr[i]);
  }
  
  result.push(queue.pop());
  console.log(result)

  /* 
  반복 >>
  k번 요소 제거하는 식으로 시작 -> 사이즈 초과 시 -> 다른 반복문으로 가는 구조 구축
  */
 
  while (true) {
    queue.push(arr[j++]);
    while (4) {
    }
  }
  

  return result
}
let input = [
  [8, 2, 3],

  [10, 2, 3],

  [20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}