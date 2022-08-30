/* 
enqueue X - 자연수 x를 뒤쪽에 넣는다 
dequeue - 큐 앞쪽에 있는 값을 제거하고 그 값을 반환, 값이 없을 경우 -1 반환
empty - 큐가 비어 있다면 1, 아니면 0 반환 
size - 큐에 들어 있는 자연수 개수 반환 
front - 큐 앞쪽에 값이 있다면 해당 값을, 없다면 -1을 반환 
back - 큐 뒤쪽에 값이 있다면 해당 값을, 없다면 -1 반환 
*/
function enqueue(X) {
  return result.push(X[length - 1]);
}

function dequeue(X) {
  return X.length === 0 ? -1 : result.shift();
}

function empty(X) {
  return X.length === 0 ? 1 : -1;
}

function size(X) {
  return X.length;
}

function front(X) {
  return X.length === 0 ? X[0] : -1;
}

function back(X) {
  return X.length === 0 ? X[length - 1] : -1;
}

function answer(cmds) {
  let result = [];
  /* cmds 길이만큼 반복문, cmds 각 요소마다 케이스 체크, 체크해서 result에 추가 후 리턴 result */

  for (let i = 0; i < cmds.length; i++) {
    let C = cmds[i];
    let D = cmds;
  switch (C, D) {
    case "dequeue":
      result.push(dequeue(C));
      break;
    case "empty":
      result.push(empty(C));
      break;
    case "size":
      result.push(size(C));
      break;
    case "front":
      result.push(front(C));
      break;
    case "back":
      result.push(back(C));
      break;
    default:
      result.push(1);
      break;
    }
  }

  return result;
}

let input = [
  ["enqueue 1", "enqueue 2", "dequeue", "dequeue"],

  ["enqueue 3", "enqueue 4", "enqueue 5", "enqueue 6", "front", "back", "dequeue", "size", "empty"],

  ["enqueue 7", "enqueue 8", "front", "back", "size", "empty", "dequeue", "dequeue", "dequeue", "size", "empty","dequeue", "dequeue", "dequeue", "size", "empty","dequeue", "enqueue 9", "empty", "front"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}