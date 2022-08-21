Array.prototype.peek = function () {
        return this[this.length - 1];
    };

Array.prototype.isEmpty = function () {
        return this.length == 0;
    };

function answer(train) {
  let stack = [];
  let num = 0;

  // train[0] === 3
  // stack - 1, 2, 3
  for (let i = 0; i < train.length; i++) {
    while(stack.isEmpty() || stack.peek() < train[i]) {
      stack.push(++num);
    }
    
    if (stack.peek() === train[i]) {
      stack.pop();
    } else {
      return false;
    }
  }

  //
  return true;
}

let input = [
  [1, 2, 3],
  [3, 2, 1],
  [3, 1, 2],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}