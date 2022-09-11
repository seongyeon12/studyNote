const person = {
  name: '이름',
  sayName: function() {
    return this.name + '입니다';
  },
}
const zero = {
  name: '베이스',
  sayName: function () {
    return this.name + '입니다';
  },
};

function sayFullName(firstName) {
  return firstName + this.sayName();
}

const sayFullNamePerson = sayFullName.bind(person)
const sayFullNameZero = sayFullName.bind(zero)

console.log(sayFullNamePerson('장'))
console.log(sayFullNameZero('제로'))