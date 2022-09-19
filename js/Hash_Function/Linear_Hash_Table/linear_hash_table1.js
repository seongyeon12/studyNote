const HASH_SIZE = 5;

// Element() key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// LinearHashTable() 생성자
function LinearHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// hashCode() 해시 함수
LinearHashTable.prototype.hashCode = function (key) {
  let hash = 0; // seed
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
}

// put() 데이터 추가
LinearHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);

  if (this.table[index] = new Element(key, value));
  this.length++;

  return true;
}

// get() 데이터 조회
LinearHashTable.prototype.get = function (key) {
  return this.table[this.hashCode(key)];
}

// remove() 데이터 삭제
LinearHashTable.prototype.remove = function (key) {
  let element = this.table[this.hashCode(key)];

  if (element !== undefined) {
    delete this.table[this.hashCode(key)];
    this.length--;
  }

  return element;
}

// clear() 초기화 
LinearHashTable.prototype.clear = function() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// size() 크기 반환
LinearHashTable.prototype.size = function () {
  return this.length;
}

// getBuffer() 데이터 셋 반환
LinearHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }
  return array;
}

// print() 데이터 셋 출력 
LinearHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + " -> " + this.table[i].key + ": " + this.table[i].value);
    }
  }
}

let ht = new LinearHashTable();
console.log(ht.put("Ana", 172));
console.log(ht.put("Donnie", 183));
console.log(ht.put("Sue", 185));
console.log(ht.put("Jamie", 168));
console.log(ht.put("Paul", 190));

console.log("")
console.log(ht.size())
ht.print();