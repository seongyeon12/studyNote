/* 출처: https://mine-it-record.tistory.com/508 [나만의 기록들:티스토리] */

/* 서로 다른 n개의 원소를 가지고 순서에 상관없이 r개의 원소를 선택하는 것 = 조합  */

const getCombinations = (arr, num) => {
  const results = [];

  if (num === 1) return arr.map(v => [v]);

  arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);

      const combinations = getCombinations(rest, num - 1);

      const attached = combinations.map(v => [fixed, ...v]);

      results.push(...attached);
  });

  return results;
}

console.log(getCombinations([1,2,3], 2))