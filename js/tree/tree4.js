  /* 큐 객체 추가 */
  function Queue(array) {
    this.array = array ? array : [];
  }

  Queue.prototype.isEmpty = function () {
    return this.array.length === 0;
  }

  Queue.prototype.enqueue = function (element) {
    return this.array.push(element);
  }

  Queue.prototype.dequeue = function () {
    return this.array.shift();
  }
  
  // node() value와 left, right node 저장을 위한 생성자 
  function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  //BinaryTree() 시작 노드인 root를 저장하기 위한 생성자
  function BinaryTree() {
    this.root = null;
  } 

  // _insertNode() 재귀로 트리를 순회하며 노드 추가 (내부 사용)
  BinaryTree.prototype._insertNode = function(node, value) {
    // 현재값과 비교
    // 작으면 왼쪽, 크면 오른쪽 
    // 왼쪽, 오른쪽 left, rigtht pointer 비어있다면 추가할 노드를 연결
    // 비어있지 않다면 하위 노드에서 다시 비교하도록 넘겨준다

    if (node === null) {
      node = new Node(value);
    } else if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertNode(node.right, value);
    }

    return node;
  }

  // insert() 노드 추가
  BinaryTree.prototype.insert = function(value) {
    this.root = this._insertNode(this.root, value);
  }

  /* 전위 순회 */
  BinaryTree.prototype._preOrderTraverseNode = function(node, callback) {
    if (node === null) {
      return;
    }

    callback(node);
    this._preOrderTraverseNode(node.left, callback)
    this._preOrderTraverseNode(node.right, callback)
  }

  BinaryTree.prototype.preOrderTraverse = function(callback) {
    this._preOrderTraverseNode(this.root, callback)
  }

  /* 중위순회 */
  BinaryTree.prototype._inOrderTraverseNode = function(node, callback) {
    if (node === null) {
      return;
    }

    
    this._inOrderTraverseNode(node.left, callback)
    callback(node);
    this._inOrderTraverseNode(node.right, callback)
  }

  BinaryTree.prototype.inOrderTraverse = function(callback) {
    this._inOrderTraverseNode(this.root, callback)
  }

  /* 후위순회 */
  BinaryTree.prototype._postOrderTraverseNode = function(node, callback) {
    if (node === null) {
      return;
    }

    this._postOrderTraverseNode(node.left, callback)
    this._postOrderTraverseNode(node.right, callback)
    callback(node);
  }

  BinaryTree.prototype.postOrderTraverse = function(callback) {
    this._postOrderTraverseNode(this.root, callback)
  }

  /* 층별순회 */
  BinaryTree.prototype.levelOrderTraverse = function (callback) {
    let q = new Queue();
    let node;

    q.enqueue(this.root);
    while (!q.isEmpty()) {
      node = q.dequeue();
      callback(node)
      if (node.left !== null) q.enqueue(node.left);
      if (node.right !== null) q.enqueue(node.right);
    } 
  }

  let tree = new BinaryTree();

  tree.insert("A");
  /* 
  this.root = null -> F
  */
  tree.insert("B");
  /* 
  this.root = F
  F.left = B;
  */
  tree.insert("C");
  tree.insert("D");
  tree.insert("E");
  tree.insert("F");
  tree.insert("G");

  console.log(tree)

  function printNode(node) {
    process.stdout.write(`#${node.value} -> `)
  }

  console.log("********* Pre-Order *********")
  tree.preOrderTraverse(printNode)
  console.log("end");

  console.log("********* in-Order *********")
  tree.inOrderTraverse(printNode)
  console.log("end");

  console.log("********* post-Order *********")
  tree.postOrderTraverse(printNode)
  console.log("end");

  console.log("********* Level-Order *********")
  tree.levelOrderTraverse(printNode)
  console.log("end");