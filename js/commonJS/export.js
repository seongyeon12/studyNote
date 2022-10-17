function Person(name, age) {
  this.name = name;
  this.age = age;

  this.getName = function() {
    return this.name + '입니다'
  }
}

module.exports = Person