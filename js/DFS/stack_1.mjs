// Stack() 생성자 함수 
function Stack(array) {
  this.array = array ? array : [];
}

// getBuffer() 객체 내 데이터 셋 반환 
Stack.prototype.getBuffer = function () {
    return this.array.slice();
  }
// isEmpty() 객체 내 데이터 o/x
Stack.prototype.isEmpty = function () {
  return this.array.length === 0;
}

//push() 데이터 추가
Stack.prototype.push = function (element) {
  return this.array.push(element);
}

//pop() 데이터 삭제
Stack.prototype.pop = function () {
  return this.array.pop();
}

//peek() 가장 끝 데이터 반환 
Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
}

//size() 스택 내 데이터 개수 확인
Stack.prototype.size = function () {
  return this.array.length;
}

//indexOf() 데이터 위치 확인 
Stack.prototype.indexOf = function (element, position = 0) {
  for (let i = position; i < this.array.length; i++) {
    if (element === this.array[i]) {
      return i;
    }
  }
  return -1;
}

// includes() 데이터 존재 여부 확인
Stack.prototype.includes = function (element, position = 0) {
  // return this.array.includes(element);
  for (let i = 0; i < this.array.length; i++) {
    if (element === this.array[i]) {
      return true;
    }
  }
  return false;
}

let stack = new Stack([1, 2, 3]);
console.log(stack.includes(-1));
console.log(stack.indexOf(2, 2));

export { Stack };
