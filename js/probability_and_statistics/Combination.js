/* 
출처: https://mine-it-record.tistory.com/508 [나만의 기록들:티스토리]
*/
/* 서로 다른 n개의 원소를 가지고 중복 없이 r개의 원소를 선택 혹은 나열 하는 것 -> 순열 */

const getPermutations = (arr, num) => {
  const results = [];

  if (num === 1) return arr.map(v => [v]);

  arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      
      const permutations = getPermutations(rest, num - 1);

      const attached = permutations.map(v => [fixed, ...v]);

      results.push(...attached);
  });

  return results;
}

console.log(getPermutations([1,2,3], 2))