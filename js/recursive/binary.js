/* [원본] https://velog.io/@jeongin/Javascript-%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98 */

// 반복문
let result = '';
let x = 11
while (true) {
    if (x%2 == 0) {
        result += '0'; // result = '0' + result;
    } else {
        result += '1'; // result = '1' + result;
    }
    x = Math.floor(x / 2);
    // Math.floor() : 소수점 버림
    console.log(result);
    if (x == 1 || x == 0) {
        result += String(x); //result = String(x) + result;
        break;
    }
}
console.log(result.split('').reverse().join(''));

// 재귀함수
function rec(num) {
  let result = '';

}

console.log(11/2)