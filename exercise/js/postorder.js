function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this.root = null;
} 

BinaryTree.prototype.add = function(node) {
  
}

function answer(str) {
  let result = [];
  return result;
}

let input = [
  "ABC",
  "FBADCEGIH",
  "CBAEDFG",
]

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]))
}