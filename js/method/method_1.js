//함수 선언식
function add_1(x, y) {
  return x + y;
}

// 함수 표현식
const add_2 = function (x, y) {
  return x + y;
} 

// 화살표 함수
const add_3 = (x, y) => x + y;

const add_4 = add_1;

console.log(add_4(1, 3));

console.log(add_1 == add_2);
console.log(add_1 == add_4);

console.log(Object.getOwnPropertyDescriptors(add_1));
console.log(Object.getOwnPropertyDescriptors(add_2));
console.log(Object.getOwnPropertyDescriptors(add_3));
console.log(Object.getOwnPropertyDescriptors(add_4));