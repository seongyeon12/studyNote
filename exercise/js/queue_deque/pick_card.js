function answer(n) {
  let result = [];
  let arr = [];

  let ic = true;

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  for (let i = 0; i < arr.length; i++) {
    if (ic) {
    result.push(arr[i]);
    ic = false;
  } else {
    ic = true;
    arr.push(arr[i]);
  }
}

return result;
}
/* 선생 풀이 */
/* function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (value) {
  this.array.push(value);
}

Queue.prototype.dequeue = function (value) {
  this.array.shift();
}

function answer2(n) {
  let result = [];

  // 첫번째 카드 분배

  // 두번째 카드 맨아래로

  // 카드 없어질 때까지 반복
  let queue = new Queue();
  for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
  }

  while (queue.array.length != 0) {
    result.push(queue.dequeue())
    if (queue.array.length != 0) {
    queue.enqueue(queue.dequeue())
  }
  }

  return result;
} */

let input = [
  4,

  7, 

  10,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}