/* [원본] https://velog.io/@jeongin/Javascript-%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98 */
// 반복문
let result = '';
let x = 'bakjeongin'
while (true) {
    if (x.length == 1) {
        result += x;
        // 더하는 순서에 따라 순차적으로 반환하거나 거꾸로 반환한다.
        break;
    } 
    let y = x.split(''); // 배열로 만들어 준다.
    result += String(y.pop()); 
    x = y.join(''); // 마지막값을 제외하고 문자열로 변환 되서 x로 들어감
}
console.log(result); 

// 재귀함수
function strReverse(str) {
  if (str.length == 1) {
      return str //종료 조건
  }
  return str[str.length-1] + strReverse(str.slice(0, str.length-1)); // 순서 더하는 순서 바꾸면 정순
}
console.log(strReverse('bakjeongin'));