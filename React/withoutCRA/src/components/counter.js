import React, { useState } from "react"
// Hook

export default function Counter() {
  // 값(state), 값을 변경할 때 쓰는 함수(setState) <- 관용적 명칭으로 자주 씀
  // +, -, *
  const operators = ["+", "-", "*"]

  const [info, setInfo] = useState({
    count : 0,
    show : true,
    operator: operators[0],
  })

  console.log(info);

  return (
    <div>
      <button onClick={() => {
        let result;
        if (info.operator === "+") result = info.count + 1
        if (info.operator === "-") result = info.count - 1
        if (info.operator === "*") result = info.count * 1
        setInfo({...info, show : !info.show})
        //.setCount(result)
      }}>
        {info.operator}1</button>
      <button onClick={() => {
        // info.show = !info.show
        // const newInfo = info
        setInfo({...info, show : !info.show})
      }}>보이거나 숨기기</button>
      <button onClick={() => {
        const idx = Math.floor(Math.random() * operators.length)
        setInfo({...info, operator : operators[idx]})
        }}>연산자 바꾸기</button>
      <br />
      {info.show && `Counter : ${info.count}`}
    </div>
  )
}