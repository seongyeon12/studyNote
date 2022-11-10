function shuffle(arr) {
    // Math.max(), 0 ~ 1까지 랜덤으로 뽑
    // array.sort()

    // array.sort(() => 음수를 반환(내림차), 양수를 반환(오름차))
    return arr.sort(() => {
      return Math.random() - 0.5 // 
    })
}

function generateRandomNumber () {
  // 1~9까지 숫자를 이용
  const candidates = [1,2,3,4,5,6,7,8,9]

  // 랜덤하게 섞어 4자리 숫자만 이용할 예정
  const pickedNumbers = shuffle(candidates).splice(0, 4)

  return pickedNumbers
}

export { generateRandomNumber }