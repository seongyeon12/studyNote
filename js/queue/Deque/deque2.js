// Deque() - 초기 속성값 설정을 위한 생성자 함수
function Deque(array = []) {
  this.array = array;
}

// getBuffer() - 객체 내 데이터 셋 반환
Deque.prototype.getBuffer = function () {
  return this.array.slice();
}

//isEmpty() - 데이터 비어 있는지 확인
Deque.prototype.isEmpty = function () {
  return this.array.length === 0;
}

// pushFront() - 앞쪽 데이터 추가
Deque.prototype.pushFront = function (element) {
  return this.array.unshift(element);
}

// popFront() - 앞쪽 데이터 삭제
Deque.prototype.popFront = function () {
  return this.array.shift();
}

// pushBack() 위쪽 데이터 추가 
Deque.prototype.pushBack = function (element) {
  return this.array.push(element);
}

// popBack() 뒤쪽 데이터 삭제
Deque.prototype.popBack = function (element) {
  return this.array.pop();
}

let dq = new Deque([1, 2, 3]);
console.log(dq);

dq.pushFront(0);
dq.pushBack(4);
console.log(dq);

dq.popFront();
dq.popBack();
console.log(dq);

