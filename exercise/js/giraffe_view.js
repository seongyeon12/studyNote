Array.prototype.peek = function () {
  return this[this.length - 1];
}
Array.prototype.isEmpty = function () {
  return this.length === 0;
}
function answer(giraffe){
  let result = 0;
// 선생님 풀이
  let stack = [];
  giraffe.push(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < giraffe.length; i++) {
    while(!stack.isEmpty() && stack.peek()["h"] < giraffe[i]) {
      result += i - stack.pop()["i"] - 1;
    }
    
    stack.push({h: giraffe[i], i: i});
  }

  return result;
  // 내 풀이

    /* let j = 0,
  count = 0,
  standard = giraffe[j];

  while (j < giraffe.length) {
  for (let i = j + 1; i < giraffe.length; i++) {
    if (standard >= giraffe[i]) {
      count++;
    }
    if (standard < giraffe[i]) {
      break;
    }
  }

  j++
  standard = giraffe[j];
}

  return count; */
}

let input = [
  [10, 3, 7, 4, 12, 2],
  [7, 4, 12, 1, 13, 11, 12, 6],
  [20, 1, 19, 18, 15, 4, 6, 8, 3, 3],
]

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
