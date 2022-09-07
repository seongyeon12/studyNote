/* [원본] https://velog.io/@jeongin/Javascript-%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98 */

//반복문 
let s = 0;
for (var i = 1; i < 101; i++) {
	s += i
};
console.log(s);

//공식 
let n = 100;
console.log((n*(n+1)/2));

//재귀함수
function rec(x) {
  if (x <= 1) {
    return 1 
  }
  return x + rec(x - 1);
}

console.log(rec(100));