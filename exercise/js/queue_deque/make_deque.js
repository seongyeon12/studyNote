function deque(array) {
  this.array = array ? array : [];
}

deque.prototype.pushFront = function (element) {
  this.array.splice(0, 0, Number(element));

  return this.array[0];
}

deque.prototype.pushBack = function (element) {
  this.array.push(Number(element));

  return this.array[this.array.length - 1];
}

deque.prototype.popFront = function () {
  if (this.array.length === 0) {
    return -1;
  }

  return this.array.shift();
}

deque.prototype.popBack = function () {
  if (this.array.length === 0) {
    return -1;
  }

  return this.array.pop();
}

deque.prototype.empty = function () {
  return this.array.length === 0 ? 1 : 0;
}

deque.prototype.size = function () {
  return this.array.length;
}

deque.prototype.front = function () {
  if (this.array.length === 0) {
    return -1;
  }

  return this.array[0];
}

deque.prototype.back = function () {
  if (this.array.length === 0) {
    return -1;
  }

  return this.array[this.array.length -1];
}

function answer (cmds) {
  let result = [];
  let Deque = new deque();

  for (let i = 0; i < cmds.length; i++) {
  let cmd = cmds[i].split(" ")[0];

    switch (cmd) {
      case "push_back":
        Deque.pushBack(cmds[i].split(" ")[1])
        break;
      case "push_front":
        Deque.pushFront(cmds[i].split(" ")[1])
        break;
      case "pop_back":
        result.push(Deque.popBack())
        break;
      case "pop_front":
        result.push(Deque.popFront())
        break;
      case "empty":
        result.push(Deque.empty())
        break;
      case "size":
        result.push(Deque.size())
        break;
      case "front":
        result.push(Deque.front())
        break;
      case "back":
        result.push(Deque.back())
        break;
    } 
}
  return result;
}

let input = [
  ["push_back 1", "push_front 2", "pop_front", "pop_back", "pop_front"],

  ["push_back 3", 
  "push_front 4", 
  "push_back 5", 
  "push_front 6", 
  "front", 
  "back", 
  "pop_front", 
  "size", 
  "empty"],

  ["push_back 7", 
  "push_front 8", 
  "front", 
  "back", 
  "size", 
  "empty", 
  "pop_front", 
  "pop_back", 
  "pop_front",
  "size", 
  "empty", 
  "pop_back", 
  "push_front 9", 
  "empty", 
  "front"],
]

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}