/* 
왼쪽 가로 위치
오른쪽 가로 위치 
서로 찾을때마다 넣어 둘의 개수가 맞는 지 비교 != 일경우 false 반환 
맞을 경우 인덱스 차이가 가장 적은 가로끼리 묶어 2차원 배열식으로 반환시킬 것

스택식 //
스택 1개 선언 
"(" 위치로 만든다 
가장 끝 위치에서 가장 가까운 ")"을 찾아 둘이 짝맞춰 반환시키고 
짝맞출 ")"가 없을 시 false 반환한다.
*/

function answer(str){
  /* 
  let result = [];

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      stack.push(i);
    } else if (str[i] == ")") {
      if (stack.isEmpty()) {
        return [];
      }

      result.push([stack.pop(), i]);
    }

  }

  if (!stack.isEmpty()) {
    return [];
  }

  return result.
  */
  let result = [],
  arr = [],
  count = 0,
  c = false;

  let set = new Set();

  for (let i = 0; i < str.length; i++) {
    if("(" == str[i]) {
      arr.push(i);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if(")" == str[i]) {
      count++;
    }
  }

  let arr2 = arr.slice();

  while (arr.length > 0) {
    c = false;
    for(let i = arr[arr.length - 1]; i < str.length; i++) {
      if (")" == str[i] && !set.has(i)) {
        result.push([arr[arr.length - 1], i]);
        arr.pop();
        set.add(i);
        c = true;
        break;
      }
    }
    if (!c) {
      return false;
    }
  }

  if (count !== arr2.length) {
    return false;
  }
  return result;
}

let input = [
  "(a+b)",
  "(a*(b+c)+d)",
  "(a*(b+c)+d+(e)",
  "(a*(b+c)+d)+e)",
  "(a*(b+c)+d)+(e*(f+g))",
]

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}

