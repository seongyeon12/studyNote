function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.isAudlt = function() {
  return this.age > 18;
}

Person.prototype.isKid = function() {
  return this.age < 18;
}

// 객체 생성

const p1 = new Person("bob", 26);
const p2 = new Person("alice", 16);

console.log(p1)
console.log(p2)

console.log(p1.isAudlt());
console.log(p2.isKid());
