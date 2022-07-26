let result; 

function recursive(s, t, number) {
  // 멈출 조건
  if(number == 1) {
    return s;
  }

  //반복할 코드
  return recursive(s, t, number - 1) + t;
}

result = recursive(3, 2, 5);
console.log(result); 
/* 1 3
2 5
3 7
4 9
5 11
11 */