let input = ["a", "b", "c"];
let conut = 0;

function permutation(arr, s, r) {
  // 1. 재귀함수를 멈춰야할 조건
  if (s == r) {
    conut++;
    console.log(arr);
    return;
  }

  // 2. 재귀를 돌면서 변경되어야 될 부분/메인로직
  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i] = [arr[i], arr[s]]]
    permutation(arr, s + 1, r);
    [arr[i], arr[s] = [arr[s], arr[i]]]
    /* 
    s = 0, r = 2 ["a", ]
    s = 1, r = 2 ["a", "b", ]
    s = 2, r = 2 ["a", "b", "c"]
    ...
    s = 1 i = 2 r = 2 ["a", "c", ""]
    s = 2 r = 2 ["a", "c", "b"]
    ...
    s = 0 r = 2, i = 1 ["b", "a", "c"]
    ...
    s = 0, r = 2, i = 2 ["a"],
    */
  }
}

permutation(input, 0, 2);
console.log(conut);