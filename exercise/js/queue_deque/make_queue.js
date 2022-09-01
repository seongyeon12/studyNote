/* 
enqueue X - 자연수 x를 뒤쪽에 넣는다 
dequeue - 큐 앞쪽에 있는 값을 제거하고 그 값을 반환, 값이 없을 경우 -1 반환
empty - 큐가 비어 있다면 1, 아니면 0 반환 
size - 큐에 들어 있는 자연수 개수 반환 
front - 큐 앞쪽에 값이 있다면 해당 값을, 없다면 -1을 반환 
back - 큐 뒤쪽에 값이 있다면 해당 값을, 없다면 -1 반환 
*/

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (x) {
  return this.array.push(x);
}

Queue.prototype.dequeue = function () {
  let ret = this.array.shift();
  return ret === undefined ? -1 : ret;
}

Queue.prototype.empty = function () {
  return this.array.length === 0 ? 1 : 0;
}

Queue.prototype.size = function () {
  return this.array.length;
}

Queue.prototype.front = function () {
  return this.array.length === 0 ? -1 : this.array[0];
}

Queue.prototype.back = function () {
  return this.array.length === 0 ? -1 : this.array[this.array.length - 1];
}

function answer(cmds) {
  let result = [];
  let queue = new Queue();

  for (let i = 0; i < cmds.length; i++) {
    let cmd = cmds[i].split(" ")[0];

    switch (cmd) {
      case "enqueue" :
        queue.enqueue(Number(cmds[i].split(" ")[1]))
        break;
      case "dequeue" :
        result.push(queue.dequeue())
        break;
      case "empty" :
        result.push(queue.empty())
        break;
      case "size" :
        result.push(queue.size())
        break;
      case "front" :
        result.push(queue.front())
        break;
      case "back" :
        result.push(queue.back())
        break;
    }
  }
  // 1 cmds -> 문자열 파싱 -> 명령어에 따라 함수를 호출

  // 2 호출 후 반환값을 result

  return result;
}

let input = [
  ["enqueue 1", "enqueue 2", "dequeue", "dequeue", "dequeue"],

  ["enqueue 3", "enqueue 4", "enqueue 5", "enqueue 6", "front", "back", "dequeue", "size", "empty"],

  ["enqueue 7", "enqueue 8", "front", "back", "size", "empty", "dequeue", "dequeue", "dequeue", "size", "empty","dequeue", "enqueue 9", "empty", "front"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}