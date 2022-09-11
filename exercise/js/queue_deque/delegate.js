/* 대표 선출 */

function CircularQuere(size) {
  this.array = new Array(size);
  this.size = size;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
}

CircularQuere.prototype.enqueue = function (element) {
  this.length++;
  this.array[this.tail++ % this.size] = element;
}

CircularQuere.prototype.dequeue = function () {
  this.length--;
  return this.array[this.head++ % this.size];
}

function answer(n, m, k) {
  let result = [];

  // 후보세팅 (enqueue)
  let cq = new CircularQuere(n);
  for (let i = 1; i <= n; i++) {
    cq.enqueue(i);
  }
  // 첫번째 노드 위치로 설정
  cq.tail = cq.head = (n + m - 1) % n; 

  // k만큼 움직이면서 대표 후보를 제거 (dequeue)
  // 제거된 번호는 result에 추가
  let count;
  result.push(cq.dequeue());
  while (cq.length !== 0) {
    count = k - 1;
    while (count--) {
      cq.enqueue(cq.dequeue());
      console.log(cq, 1)
    }
    result.push(cq.dequeue())
    console.log(cq, 2)
  }
  return result;
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