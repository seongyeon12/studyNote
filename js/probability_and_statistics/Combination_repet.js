/* 
출처: https://mine-it-record.tistory.com/508 [나만의 기록들:티스토리]
*/
/* 중복순열 */
const getPermutations = (arr, num) => {
  const results = [];
  if (num === 1) return arr.map(v => [v]);

  arr.forEach((fixed, index, origin) => {
      const permutations = getPermutations(origin, num - 1);

      const attached = permutations.map(v => [fixed, ...v]);

      results.push(...attached);
  });

  return results;
}

console.log(getPermutations([1,2,3], 2))